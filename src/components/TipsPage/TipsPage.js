import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DisplayTips from './DisplayTips';
import livingTips from '../../utils/livingTipsData';
import saved from '../../bookmark-fill.png';
import unsaved from '../../bookmark-empty.png';
import './TipsPage.css';


const TipsPage = () => {
  const [currentTip, setCurrentTip] = useState({})
  const [favoriteTips, setFavoriteTips] = useState([])
  const [isFavoritesDisplayed, setIsFavoritesDisplayed] = useState(false)

  const getRandomTip = () => {
    const randomTipIndex = Math.floor(Math.random() * livingTips.length);
    const randomTip = livingTips[randomTipIndex];
    setCurrentTip(randomTip)
  }

  useEffect(() => {
    getRandomTip()
    retrieveFromStorage()
  }, []);


  const updateFavorite = (tip) => {
    const foundTip = favoriteTips.find(favorite => favorite.tip === tip.tip)
    !foundTip ? addFavoriteTip(tip) : removeFavoriteTip(foundTip)
  }

  const addFavoriteTip = (tip) => {
    const newFavorite = {
      isSaved: true,
      ...tip
    }
    handleFavorite(newFavorite)
    setFavoriteTips([...favoriteTips, newFavorite])
    addToStorage(newFavorite)
  }

  const removeFavoriteTip = (tip) => {
    const filterFavoriteTips = favoriteTips.filter(favorite => favorite.tip !== tip.tip)
    handleFavorite(tip)
    removeFromStorage(tip)
    setFavoriteTips(filterFavoriteTips)
  }

  const handleFavorite = (tip) => {
    const findLivingTip = livingTips.find(favorite => favorite.id === tip.id)
    const findFavoriteTip = favoriteTips.find(favorite => favorite.id === tip.id)

    if (findLivingTip || findFavoriteTip) {
      findLivingTip.isSaved = !findLivingTip.isSaved
    }
  }


  const toggleFavoritesDisplay = () => {
    setIsFavoritesDisplayed(!isFavoritesDisplayed)
  }


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
          <button
            className='tip-btn'
            onClick={() => toggleFavoritesDisplay()}
            >{!isFavoritesDisplayed ? 'View saved tips' : 'View more tips' }
          </button>
        </div>
        <div className='tip-container'>
        {!isFavoritesDisplayed && 
          <div>
            <img 
              className='bookmark-icon' 
              onClick={() => updateFavorite(currentTip)}
              src={!currentTip.isSaved ? unsaved : saved} 
              alt='bookmark icon for when item is not saved, black border with no fill' 
            />
            <h2>{currentTip.tip}</h2>
          </div>
        }
        {isFavoritesDisplayed && favoriteTips.length > 0 && <DisplayTips favoriteTips={favoriteTips} updateFavorite={updateFavorite} />}
        {isFavoritesDisplayed && favoriteTips.length === 0 && <h3>You current have no favorited sustainable tips</h3>}
        </div>
      </section>
    </>
  )
}


TipsPage.propTypes = {
  currentTip: PropTypes.object,
  favoriteTips: PropTypes.array,
  isFavoritesDisplayed: PropTypes.bool
}



export default TipsPage;

