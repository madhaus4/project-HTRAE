import { useState, useEffect } from 'react';
import DisplayTips from './DisplayTips';
import livingTips from '../../utils/livingTipsData';
// import arrowEmpty from '../../arrow-empty.png';
// import arrowFill from '../../arrow-fill.png';
import savedIcon from '../../Saved.png';
import './TipsPage.css';


const TipsPage = () => {
  const [currentTip, setCurrentTip] = useState({})
  const [favoriteTips, setFavoriteTips] = useState([])
  const [isFavoritesDisplayed, setIsFavoritesDisplayed] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  const getRandomTip = () => {
    setIsSaved(false)
    const randomTipIndex = Math.floor(Math.random() * livingTips.length);
    const randomTip = livingTips[randomTipIndex];
    console.log('randomTip: ', randomTip)
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

          {!isFavoritesDisplayed && <button 
            className='tip-btn'
            onClick={() => updateFavorite(currentTip)}
            >Save Tip
          </button>}

          <button
            className='tip-btn'
            onClick={() => toggleFavoritesDisplay()}
            >{!isFavoritesDisplayed ? 'View saved tips' : 'View more tips' }
          </button>
        </div>  
        
        <div className='tip-container'>
        {!isFavoritesDisplayed && 
          <>
          <h2>{currentTip.tip}</h2>
          {isSaved && <img className='saved-icon' src={savedIcon} />}
          </>
        }

        {isFavoritesDisplayed && <DisplayTips favoriteTips={favoriteTips}/>}
        </div>

        {console.log('currentTip: ', currentTip)}
      </section>
    </>
  )
}


export default TipsPage;

