import './NavBar.css';
import logo from '../../logo.png';

const NavBar = () => {
  return (
    <header>
      <div>
        <button>Home</button>
        <button>Carbon Dioxide</button>
        <button>Temperature</button>
        <button>Polar Ice Melt</button>
      </div>
      <img 
        className='logo-inHeader'
        src={logo} 
        alt='project HTRAE logo: triangle with black text, black border, inside triangle is light blue, inside triangle is green, inside triangle is yellow, inside triangle is a deep pink' 
      />
    </header>
  )
}


export default NavBar;

