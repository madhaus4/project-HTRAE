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
    <div>
      {console.log('temperatureData: ', temperatureData)}
      <p>temperature page</p>
      <TempGraph temperatureData={temperatureData} />
    </div>
  )
}


export default TempPage;