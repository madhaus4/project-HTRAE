import { useState, useEffect } from 'react';
import {getData} from '../../utils/apiCalls';
import PolarGraph from './PolarGraph';
import './PolarPage.css';

const PolarPage = () => {
  const [polarData, setPolarData] = useState([])
  const [errorMsg, setErrorMsg] = useState('')

  const retrieveData = async () => {
    try {
      let data = await getData('arctic');
      setPolarData(data.result)
    } catch(error) {
      setErrorMsg('ERROR MSG: ', errorMsg)
    }
  }

  useEffect(() => {
    retrieveData();
  }, []);


  return (
    <section className='polar-page-container'>
      {console.log('polarData: ', polarData)}
      <h2>As the global temperature rises, Earth's glacier melt.  With the record high surface temperatures, the arctic sea ice has significantly thinned.  When snow and ice melt, a darker surface is exposed and increases the amount of solar energy absorbed into these areas.</h2>
      <div className='polar-data-graph'>
        <PolarGraph polarData={polarData} />
      </div>
      <p>This graph visualizes the loss of arctic sea ice coverage over the last 50-ish years.  From 2010 to present we are losing 12.85% of arctic ice coverage per decade.  Noteworthy: The degree of warming seen in the Arctic since 1980 is twice that in the rest of the world because of the albedo effect. </p>
      {/* <p>Fun Fact: Spring freshwater ice breakup in the Northern Hemisphere now occurs nine days earlier than it did 150 years ago, and autumn freeze-up ten days later.</p> */}
    </section>
  )
}


export default PolarPage;