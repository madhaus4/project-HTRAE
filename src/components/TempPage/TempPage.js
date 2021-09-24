import { useState, useEffect } from 'react';
import {getData} from '../../utils/apiCalls';
import TempGraph from './TempGraph';
import './TempPage.css';

const TempPage = () => {
  const [temperatureData, setTemperatureData] = useState([])
  const [errorMsg, setErrorMsg] = useState('')

  const retrieveData = async () => {
    try {
      let data = await getData('temperature');
      setTemperatureData(data.result)
    } catch(error) {
      setErrorMsg('ERROR MSG: ', errorMsg)
    }
  }

  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <section className='temp-page-container'>
      {console.log('temperatureData: ', temperatureData)}
      <p>temperature page</p>
      <div className='temp-data-graph'>
        <TempGraph temperatureData={temperatureData} />
      </div>
    </section>
  )
}


export default TempPage;