import { useState, useEffect } from "react";
import livingTips from "../../utils/livingTipsData";
import './TipsPage.css';


const TipsPage = () => {
  const [currentTip, setCurrentTip] = useState()
  let randomTip;

  const getRandomTip = () => {
    let randomTipIndex = Math.floor(Math.random() * livingTips.length);
    randomTip = livingTips[randomTipIndex];
    console.log('randomTip: ', randomTip)
    setCurrentTip(randomTip.tip)
  }

  useEffect(() => {
    getRandomTip()
  }, []);




  return (
    <section>
      {console.log('currentTip: ', currentTip)}
      <p>useful tip here</p>
      <p>{currentTip}</p>
      <button 
        >Favorite Tip
      </button>
      <button 
        onClick={() => getRandomTip()} 
        >Another Tip
      </button>
    </section>
  )
}


export default TipsPage;