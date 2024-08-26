import { useRef } from 'react'
import { Link } from 'react-router-dom'
import fraglogo from '.././assets/img/logo.png'

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);

  if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
  }
}

function Navbar() {
  const navRef = useRef();

  const showNavbar = () =>{
    navRef.current.classList.toggle("responsive-nav")
  }

  const scrollTo = (sectionId) => {
      scrollToSection(sectionId);
  };

  return (
    <nav className='nav'>
        <Link to='/' className='navbar-logo'><img src={fraglogo} className="logo" alt="Vite logo" /></Link>
        <ul ref={navRef}>
            <li className='active'>
              <Link to='/' onClick={showNavbar}>Home</Link>
            </li>
            <li>
              <Link to='/' onClick={() =>{showNavbar(); scrollTo('streamSection')}}>Streams</Link>
            </li>
            <li>
              <Link to='/' onClick={() =>{showNavbar(); scrollTo('teamSection')}}>Team</Link>
            </li>
            <li>
              <Link to='/' onClick={() =>{showNavbar(); scrollTo('connectSection')}}>Let&#39;s Connect</Link>
            </li>
            {/* <li>
              <Link to='/contact'>Contact</Link>
            </li> */}
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
              <i className="fa fa-times"></i>
            </button>
        </ul>
        <button className='nav-btn' onClick={showNavbar}>
          <i className="fas fa-bars"></i>
        </button>
        </nav>
  )
}

export default Navbar