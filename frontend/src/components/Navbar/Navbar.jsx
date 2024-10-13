import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className='nav'>
        <h3>Stock Management</h3>
        <ul>
          <li><Link to='/'>View</Link></li>  
           <li> <Link to='/add'>Add Product</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar