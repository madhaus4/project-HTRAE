import { useState, useEffect } from 'react';
import {getData} from '../../utils/apiCalls';
import CO2Graph from './CO2Graph';
import './CO2Page.css';

const CO2Page = () => {
  const [CO2Data, setCO2Data] = useState([])
  const [errorMsg, setErrorMsg] = useState('')

  const retrieveData = async () => {
    try {
      let data = await getData('')
      setCO2Data(data.co2)
    } catch(error) {
      setErrorMsg('ERROR MSG: ', errorMsg)
    }
  }

  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <>
      <p>CO2 page</p>
      <div><CO2Graph CO2Data={CO2Data}/></div>
    </>
  )
}


export default CO2Page;