import { useState, useEffect } from 'react';
import DisplayTips from './DisplayTips';
import livingTips from '../../utils/livingTipsData';
// import arrowEmpty from '../../arrow-empty.png';
// import arrowFill from '../../arrow-fill.png';
import saved from '../../bookmark-fill.png';
import unsaved from '../../bookmark-empty.png';
import savedIcon from '../../Saved.png';
import './TipsPage.css';


const TipsPage = () => {
  const [currentTip, setCurrentTip] = useState({})
  const [favoriteTips, setFavoriteTips] = useState([])
  const [isFavoritesDisplayed, setIsFavoritesDisplayed] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  const getRandomTip = () => {
    const randomTipIndex = Math.floor(Math.random() * livingTips.length);
    const randomTip = livingTips[randomTipIndex];
    setCurrentTip(randomTip)
  }

  useEffect(() => {
    getRandomTip()
    retrieveFromStorage()
  }, []);



  // FAVORITING AND UNFAVORITING
  const updateFavorite = (tip) => {
    const foundTip = favoriteTips.find(favorite => favorite.tip === tip.tip)
    !foundTip ? addFavoriteTip(tip) : removeFavoriteTip(foundTip)

  }

  const addFavoriteTip = (tip) => {
    setIsSaved(true)
    setFavoriteTips([...favoriteTips, tip])
    addToStorage(tip)
  }

  const removeFavoriteTip = (tip) => {
    const filterFavoriteTips = favoriteTips.filter(favorite => favorite !== tip)
    setIsSaved(false)
    setFavoriteTips(filterFavoriteTips)
    removeFromStorage(tip)
  }



  // TOGGLE DISPLAY
  const toggleFavoritesDisplay = () => {
    setIsFavoritesDisplayed(!isFavoritesDisplayed)
  }



  // LOCAL STORAGE
  const addToStorage = (tip) => {
    localStorage.setItem(tip.id, JSON.stringify(tip))
  }

  const retrieveFromStorage = () => {
    const findStoredTips = Object.keys(localStorage).map(tip => {
      return JSON.parse(localStorage.getItem(tip))
    })
    setFavoriteTips(findStoredTips)
  }

  const removeFromStorage = (tip) => {
    localStorage.removeItem(tip.id)
  }


  return (
    <>
      <div className='tips-page-intro'>
        <h2>It's time for action!  What are you willing to do to save the planet...</h2>
        <p>Here are some helpful sustainable tips to incorporate into your daily life!</p>
      </div>  
      <section className='tips-page-container'>

        <div className='tips-btn-container'>
          {!isFavoritesDisplayed  && 
          <button 
            className='tip-btn'
            onClick={() => getRandomTip()} 
            >Another Tip
          </button>}

          {/* {!isFavoritesDisplayed && <button 
            className='tip-btn'
            onClick={() => updateFavorite(currentTip)}
            >Save Tip
          </button>} */}

          <button
            className='tip-btn'
            onClick={() => toggleFavoritesDisplay()}
            >{!isFavoritesDisplayed ? 'View saved tips' : 'View more tips' }
          </button>
        </div>  
        
        <div className='tip-container'>
        {!isFavoritesDisplayed && 
          <div>
            <h2>{currentTip.tip}</h2>
            <img 
              className='saved-icon' 
              src={unsaved} 
              alt='bookmark icon, black border with no fill when not saved, black fill when saved' 
              onClick={() => updateFavorite(currentTip)}
            />
          </div>
        }

        {isFavoritesDisplayed && <DisplayTips favoriteTips={favoriteTips}/>}
        </div>
      </section>
    </>
  )
}


export default TipsPage;

