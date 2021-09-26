import { useState, useEffect } from "react";
import DisplayTips from "./DisplayTips";
import livingTips from "../../utils/livingTipsData";
import './TipsPage.css';


const TipsPage = () => {
  const [currentTip, setCurrentTip] = useState()
  const [favoriteTips, setFavoriteTips] = useState([])
  const [isFavoritesDisplayed, setIsFavoritesDisplayed] = useState(false)
  let randomTip;

  const getRandomTip = () => {
    const randomTipIndex = Math.floor(Math.random() * livingTips.length);
    randomTip = livingTips[randomTipIndex];
    // console.log('randomTip: ', randomTip)
    setCurrentTip(randomTip.tip)
  }

  useEffect(() => {
    getRandomTip()
  }, []);

  const addFavoriteTip = (tip) => {
    console.log('we in addFavroiteTip')

    const newFavorite = {
      tip: tip,
    }
      setFavoriteTips([...favoriteTips, newFavorite])
  }

  const removeFavoriteTip = (tip) => {
    console.log('we in removeFavoriteTip')

    const filterFavoriteTips = favoriteTips.filter(favorite => favorite !== tip)
    setFavoriteTips(filterFavoriteTips)
  }

  const updateFavorite = (tip) => {
    const foundTip = favoriteTips.find(favorite => favorite.tip === tip)
    !foundTip ? addFavoriteTip(tip) : removeFavoriteTip(foundTip)
  }

  const toggleFavoritesDisplay = () => {
    setIsFavoritesDisplayed(!isFavoritesDisplayed)
  }

  // LOCAL STORAGE
  const addToStorage = () => {
    localStorage.addItem()
  }

  const getFromStorage = () => {
    localStorage.getItem()
  }

  const removeFromStorage = () => {
    localStorage.removeItem()
  }


  return (
    <section>
      <p>useful tip here</p>
      {!isFavoritesDisplayed && <p>{currentTip}</p>}
      <button 
        onClick={() => getRandomTip()} 
        >Another Tip
      </button>
      <button 
        onClick={() => updateFavorite(currentTip)}
        >Favorite Tip
      </button>
      <button
        onClick={() => toggleFavoritesDisplay()}
        >{!isFavoritesDisplayed ? 'View favorites' : 'View more tips' }
      </button>
      {isFavoritesDisplayed && <DisplayTips favoriteTips={favoriteTips}/>}
    </section>
  )
}


export default TipsPage;