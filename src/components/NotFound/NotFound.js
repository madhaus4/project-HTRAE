import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import logo from '../../htraeLogo.png';
import './NotFound.css';


const NotFound = () => {
  const rollingLogo = useRef(null)

  useEffect(() => {
    gsap.to(rollingLogo.current, {rotation: 1360, x: 1070, duration: 30})
  })

  return (
    <div className='not-found-container'>
      <p></p>
      <div>
        <h1>If you're here that means you've stumbled somewhere evaporated and depopulated...</h1>
        <p>Click <Link to='/' className='link-to-home'>HERE</Link> to be directed back to the main page</p>
      </div>
      <img className='not-found-logo' src={logo} alt='' ref={rollingLogo} />
    </div>
  )
}


export default NotFound;