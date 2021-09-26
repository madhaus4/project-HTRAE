import { useState, useEffect } from "react";
import livingTips from "../../utils/livingTipsData";
import './TipsPage.css';


const TipsPage = () => {
  const [currentTip, setCurrentTip] = useState()
  const [favoriteTips, setFavoriteTips] = useState([])
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
    const newFavorite = {
      tip: tip,
      // isLiked: true,
    }
      setFavoriteTips([...favoriteTips, newFavorite])
  }

  const removeFavoriteTip = (tip) => {
    const filterFavoriteTips = favoriteTips.filter(favorite => favorite !== tip)
    setFavoriteTips(filterFavoriteTips)
  }

  const updateFavorite = (tip) => {
    console.log('tip: ', tip)
    const foundTip = favoriteTips.find(favorite => favorite === tip)
    console.log('foundTip: ', foundTip)

    foundTip ? removeFavoriteTip(foundTip) : addFavoriteTip(tip)
  }

  const toggleDisplay = () => {}




  return (
    <section>
      {console.log('currentTip: ', currentTip)}
      <p>useful tip here</p>
      <p>{currentTip}</p>
      <button 
        onClick={() => getRandomTip()} 
        >Another Tip
      </button>
      <button 
        onClick={() => updateFavorite(currentTip)}
        >Favorite Tip
      </button>
      <button
        onClick={() => toggleDisplay()}
        >View favorites 
      </button>
      {console.log('favoriteTips: ', favoriteTips)}
    </section>
  )
}


export default TipsPage;