import { Route, Switch } from 'react-router-dom';
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
       <Switch>
        <Route exact path to="/" render={() => <HomePage />} />
        <Route exact path to="/CarbonDioxideLevels" render={() => <CO2Page />} />
        <Route exact path to="/Temperatures" render={() => <TempPage />} />
        <Route exact path to="/ArcticIceMelt" render={() => <PolarPage />} />
        {/* <Route render={() => <NotFound />} /> */}
       </Switch>
     </main>
    </>
  );
}



export default App;
