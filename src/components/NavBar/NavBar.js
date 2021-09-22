import './NavBar.css';
import logo from '../../logo.png';

const NavBar = () => {
  return (
    <nav>
      <div>
        <button className='btn-in-header'>Home</button>
        <button className='btn-in-header'>Carbon Dioxide</button>
        <button className='btn-in-header'>Temperature</button>
        <button className='btn-in-header'>Polar Ice Melt</button>
      </div>
      <img 
        className='logo-in-header'
        src={logo} 
        alt='project HTRAE logo: triangle with black text, black border, inside triangle is light blue, inside triangle is green, inside triangle is yellow, inside triangle is a deep pink' 
      />
    </nav>
  )
}


export default NavBar;

