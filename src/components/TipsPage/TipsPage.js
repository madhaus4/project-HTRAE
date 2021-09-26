import { useState, useEffect } from "react";
import DisplayTips from "./DisplayTips";
import livingTips from "../../utils/livingTipsData";
import './TipsPage.css';


const TipsPage = () => {
  const [currentTip, setCurrentTip] = useState('')
  const [favoriteTips, setFavoriteTips] = useState([])
  const [isFavoritesDisplayed, setIsFavoritesDisplayed] = useState(false)
  // let randomTip = {}

  const getRandomTip = () => {
    const randomTipIndex = Math.floor(Math.random() * livingTips.length);
    const randomTip = livingTips[randomTipIndex];
    console.log('randomTip: ', randomTip)
    setCurrentTip(randomTip.tip)
  }

  useEffect(() => {
    getRandomTip()
    // retrieveFromStorage()
  }, []);

  const addFavoriteTip = (tip) => {
    console.log('we in addFavoriteTip')

    const newFavorite = {
      // id: `${tip}` + 1,
      tip: tip,
    }

    // console.log('randomTip2: ', randomTip)
    setFavoriteTips([...favoriteTips, newFavorite])
    addToStorage(newFavorite)
  }

  const removeFavoriteTip = (tip) => {
    console.log('we in removeFavoriteTip')

    const filterFavoriteTips = favoriteTips.filter(favorite => favorite !== tip)
    setFavoriteTips(filterFavoriteTips)
    removeFromStorage(tip)
  }

  const updateFavorite = (tip) => {
    const foundTip = favoriteTips.find(favorite => favorite.tip === tip)
    !foundTip ? addFavoriteTip(tip) : removeFavoriteTip(foundTip)
  }

  const toggleFavoritesDisplay = () => {
    setIsFavoritesDisplayed(!isFavoritesDisplayed)
  }

  // LOCAL STORAGE
  const addToStorage = (tip) => {
    localStorage.setItem(tip, JSON.stringify(tip))
  }

  const retrieveFromStorage = () => {
    const findStoredTips = Object.keys(localStorage).map(tip => {
      return JSON.parse(localStorage.getItem(tip))
    })
    setFavoriteTips(findStoredTips)
  }

  const removeFromStorage = (tip) => {
    localStorage.removeItem(tip)
  }


  return (
    <>
      <div className='tips-page-intro'>
        <p>Some tips for you to try out</p>
      </div>  
      <section className='tips-page-container'>

        <div className='tips-btn-container'>
          {!isFavoritesDisplayed  && <button 
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
        {!isFavoritesDisplayed && <h2>{currentTip}</h2>}
        
        {isFavoritesDisplayed && <DisplayTips favoriteTips={favoriteTips}/>}
        </div>

      </section>
    </>
  )
}


export default TipsPage;