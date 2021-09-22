// import { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
// import {getData} from '../../utils/apiCalls';
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
