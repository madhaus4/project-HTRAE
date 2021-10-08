import { Router, Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../logo.png';

const NavBar = () => {
  return (
    <nav>
      <div className='btn-container'>
        <Router>
        <Link to='/'><button 
          className='btn-in-nav'
          >Home
        </button></Link>
      
        
        <Link to='/Carbon-Dioxide-Levels'><button 
          className='btn-in-nav'
          >CO2
        </button></Link>
      
        
        <Link to='/Temperature'><button 
          className='btn-in-nav'
          >Surface Temp
        </button></Link>
      
        
        <Link to='/Arctic-Ice-Melt'><button 
          className='btn-in-nav'
          >Glacial Melt
        </button></Link>

        <Link to='/Sustainable-Life-Tips'><button 
          className='btn-in-nav'
          >Sustainable Tips
        </button></Link>

        <Link to='/Reminder'><button 
          className='btn-in-nav'
          >This Planet
        </button></Link>
      </Router>
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

