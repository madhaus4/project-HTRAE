// import { useState, useEffect } from 'react';
// import {getData} from '../../utils/apiCalls';
import NavBar from '../NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import CO2Page from '../CO2Page/CO2Page';
import TempPage from '../TempPage/TempPage';
import PolarPage from '../PolarPage/PolarPage';
import './App.css';

const App = () => {

  return (
    <>
     <NavBar />
     <main>
       <HomePage />
     </main>
    </>
  );
}



export default App;
