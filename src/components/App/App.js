import { useState, useEffect } from 'react';

import NavBar from '../NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import {getData} from '../../utils/apiCalls';
import './App.css';

const App = () => {
  const [errorMsg, setErrorMsg] = useState('')
  const [temperatureData, setTemperatureData] = useState([])

  // const pageLoad = () => {
  //   getData('temperature')
  //   .then(data => setTemperatureData(data))
  //   .then(console.log('temperatureData: ', temperatureData))
  //   .catch(error => console.log('error: ', error))
  // }

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await getData('temperature');
        setTemperatureData(data.result)
      } catch(error) {
        setErrorMsg('this doesn\'t work')
        console.log('errorMsg: ', errorMsg)
      }
    }
    fetchData();
    console.log('temperatureData: ', temperatureData)
  }, []);

  return (
    <div>
     <NavBar />
     <HomePage />
    </div>
  );
}



export default App;
