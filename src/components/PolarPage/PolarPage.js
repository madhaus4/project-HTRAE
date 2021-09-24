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
      <p>polar page</p>
      <div className='polar-data-graph'>
        <PolarGraph polarData={polarData} />
      </div>
    </section>
  )
}


export default PolarPage;