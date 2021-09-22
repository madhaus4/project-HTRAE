import { useState, useEffect } from 'react';

import NavBar from '../NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import {getData} from '../../utils/apiCalls';
import './App.css';

function App() {
  const [temperatureData, setTemperatureData] = useState([])

  const pageLoad = () => {
    getData()
    .then(data => setTemperatureData(data.result))
    .then(console.log('temperatureData: ', temperatureData))
  }

  useEffect(() => {
    pageLoad()
  })

  return (
    <div>
     <NavBar />
     <HomePage />
    </div>
  );
}

export default App;
