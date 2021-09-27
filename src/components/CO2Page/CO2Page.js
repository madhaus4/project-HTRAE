import { useState, useEffect } from 'react';
import {getData} from '../../utils/apiCalls';
import CO2Graph from './CO2Graph';
import './CO2Page.css';

const CO2Page = () => {
  const [CO2Data, setCO2Data] = useState([])
  const [errorMsg, setErrorMsg] = useState('')

  const retrieveData = async () => {
    try {
      let data = await getData('co2')
      setCO2Data(data.co2)
    } catch(error) {
      setErrorMsg('ERROR MSG: ', errorMsg)
    }
  }

  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <section className='CO2-page-container' >
      <h2>Carbon dioxide (CO2) is a greenhouse gas that absorbs and radiates heat.  It has an immense effect on the planet causing the land and ocean temperature to warm.  The Increases in carbon dioxide are responsible for about two-thirds of the total energy imbalance that is causing Earth's temperature to rise.</h2>
      <div className='CO2-data-graph'>
        <CO2Graph CO2Data={CO2Data} />
      </div>
      <p>This graph visualizes the change in CO2 levels over the last decade.  The difference of ~26 parts per million may not seem like a lot.  However, consider that in 1960 that number was around 316ppm.  Today we are at 416ppm and that number is steadily increasing. </p>
    </section>
  )
}


export default CO2Page;