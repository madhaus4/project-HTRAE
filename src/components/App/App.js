import { Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import CO2Page from '../CO2Page/CO2Page';
import TempPage from '../TempPage/TempPage';
import PolarPage from '../PolarPage/PolarPage';
import TipsPage from '../TipsPage/TipsPage';
import NotFound from '../NotFound/NotFound';
import './App.css';

const App = () => {
  return (
    <>
     <NavBar />
     <main>
       <Switch>
        <Route exact path='/' 
          render={() => <HomePage />} 
        />
        <Route exact path='/Carbon-Dioxide-Levels' 
          render={() => <CO2Page />} 
        />
        <Route exact path='/Temperature' 
          render={() => <TempPage />} 
        />
        <Route exact path='/Arctic-Ice-Melt' 
          render={() => <PolarPage />} 
        />
        <Route exact path='/Sustainable-Life-Tips'
          render={() => <TipsPage />}
        />
        <Route render={() => <NotFound />} />
       </Switch>
     </main>
    </>
  );
}



export default App;
