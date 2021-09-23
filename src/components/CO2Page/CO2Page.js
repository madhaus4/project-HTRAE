import { useState, useEffect } from 'react';
import {getData} from '../../utils/apiCalls';
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
    <p>CO2 page</p>
  )
}


export default CO2Page;