import { Link } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import CO2Page from '../CO2Page/CO2Page';
import TempPage from '../TempPage/TempPage';
import PolarPage from '../PolarPage/PolarPage';

import './NavBar.css';
import logo from '../../logo.png';

const NavBar = () => {
  return (
    <nav>
      <div className='btn-container'>
        
        <Link to='/'><button 
          className='btn-in-nav'
          >Home
        </button></Link>
      
        
        <Link to='/CarbonDioxide'><button 
          className='btn-in-nav'
          >Carbon Dioxide
        </button></Link>
      
        
        <Link to='/Temperature'><button 
          className='btn-in-nav'
          >Temperature
        </button></Link>
      
        
        <Link to='/ArcticIceMelt'><button 
          className='btn-in-nav'
          >Polar Ice Melt
        </button></Link>
      
      </div>
      <img 
        className='logo-in-nav'
        src={logo} 
        alt='project HTRAE logo: triangle with black text, black border, inside triangle is light blue, inside triangle is green, inside triangle is yellow, inside triangle is a deep pink' 
      />
    </nav>
  )
}


export default NavBar;

