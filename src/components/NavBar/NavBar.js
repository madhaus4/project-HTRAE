import './NavBar.css';
import logo from '../../logo.png';

const NavBar = () => {
  return (
    <nav>
      <div>
        <button className='btn-in-nav'>Home</button>
        <button className='btn-in-nav'>Carbon Dioxide</button>
        <button className='btn-in-nav'>Temperature</button>
        <button className='btn-in-nav'>Polar Ice Melt</button>
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

