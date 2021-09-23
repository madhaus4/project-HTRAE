// import HomePage from '../HomePage/HomePage';
// import CO2Page from '../CO2Page/CO2Page';
// import TempPage from '../TempPage/TempPage';
// import PolarPage from '../PolarPage/PolarPage';

import './NavBar.css';
import logo from '../../logo.png';

const NavBar = () => {
  return (
    <nav>
      <div className='btn-container'>
        <button 
          className='btn-in-nav'
          // onClick={() => <HomePage />}
          >Home
        </button>
        <button 
          className='btn-in-nav'
          // onClick={() => <CO2Page />}
          >Carbon Dioxide
        </button>
        <button 
          className='btn-in-nav'
          // onClick={() => <TempPage />}
          >Temperature
        </button>
        <button 
          className='btn-in-nav'
          // onClick={() => <PolarPage />}
          >Polar Ice Melt
        </button>
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

