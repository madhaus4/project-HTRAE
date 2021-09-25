import { useState, useEffect } from "react";
import livingTips from "../../utils/livingTipsData";
import './TipsPage.css';


const TipsPage = () => {
  const [currentTip, setCurrentTip] = useState()

  const getRandomTip = () => {
    let randomTipIndex = Math.floor(Math.random() * livingTips.length);
    let randomTip = livingTips[randomTipIndex].tip;
    setCurrentTip(randomTip)
  }

  useEffect(() => {
    getRandomTip()
  }, []);




  return (
    <section>
      <p>useful tip here</p>
      {/* {console.log('currentTip: ', livingTips[currentTip])} */}
      <p>{currentTip}</p>
    </section>
  )
}


export default TipsPage;