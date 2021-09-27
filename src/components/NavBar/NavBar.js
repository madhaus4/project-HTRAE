import { Link } from 'react-router-dom';
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
      
        
        <Link to='/Carbon-Dioxide-Levels'><button 
          className='btn-in-nav'
          >Carbon Dioxide
        </button></Link>
      
        
        <Link to='/Temperature'><button 
          className='btn-in-nav'
          >Temperature
        </button></Link>
      
        
        <Link to='/Arctic-Ice-Melt'><button 
          className='btn-in-nav'
          >Polar Ice Melt
        </button></Link>

        <Link to='/Sustainable-Life-Tips'><button 
          className='btn-in-nav'
          >Sustainable Tips
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

