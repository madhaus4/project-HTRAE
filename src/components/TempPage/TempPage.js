import { useState, useEffect } from 'react';
import {getData} from '../../utils/apiCalls';
// import PropTypes from 'prop-types';
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
      <h2>Our activities are impacting the global temperature.  This rise has been happening since the industrial revolution.  The average global temperature on Earth has increased by a little more than 1° Celsius (2° Fahrenheit) since 1880.  A one-degree global change is significant because it takes a vast amount of heat to warm all the oceans, atmosphere, and land by that much.</h2>
      <div className='temp-data-graph'>
        <TempGraph temperatureData={temperatureData} />
      </div>
      <p>This graph visually explains the rate at which the global temperature has risen over the last century, plus.  As we focus on the last 50 years, this number has risen about 1C which is ~33F. </p>
      <p>Fun Fact: The 10 warmest years on record have all occurred since 2005, and 7 of the 10 have occurred just since 2014. </p>
    </section>
  )
}

// TempPage.propTypes = {
//   temperatureData: PropTypes.array,
//   errorMsg: PropTypes.string
// }


export default TempPage;