import { useState, useEffect } from 'react';
import {getData} from '../../utils/apiCalls';
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
    <p>polar page</p>
  )
}


export default PolarPage;