import { Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import CO2Page from '../CO2Page/CO2Page';
import TempPage from '../TempPage/TempPage';
import PolarPage from '../PolarPage/PolarPage';
import NotFound from '../NotFound/NotFound';
import './App.css';

const App = () => {
  return (
    <>
     <NavBar />
     <main>
       <Switch>
        <Route exact path 
          to='/' 
          render={() => <HomePage />} 
        />
        <Route exact path 
          to='/CarbonDioxideLevels' 
          render={() => <CO2Page />} 
        />
        <Route exact path 
          to='/Temperature' 
          render={() => <TempPage />} 
        />
        <Route exact path 
          to='/ArcticIceMelt' 
          render={() => <PolarPage />} 
        />
        <Route render={() => <NotFound />} />
       </Switch>
     </main>
    </>
  );
}



export default App;
