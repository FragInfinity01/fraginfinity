import { Link } from 'react-router-dom'
import fraglogo from '.././assets/img/logo.png'

function Navbar() {
  return (
    <nav className='nav'>
        <Link to='/' className='navbar-logo'><img src={fraglogo} className="logo" alt="Vite logo" /></Link>
        <ul>
            <li className='active'>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/'>Teams</Link>
            </li>
            <li>
              <Link to='/'>Let&#39;s Connect</Link>
            </li>
            {/* <li>
              <Link to='/contact'>Contact</Link>
            </li> */}
        </ul>
        </nav>
  )
}

export default Navbar