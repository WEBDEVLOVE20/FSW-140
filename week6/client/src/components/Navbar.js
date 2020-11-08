import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar-container' >
      <ul className='navbar-links-container'>
        <Link className='navbar-links' to='/'> Enter Employee Info </Link>
        <Link className='navbar-links' to='employees'> Employee Badges </Link>
      </ul>
    </div>
  )
}

export default Navbar;