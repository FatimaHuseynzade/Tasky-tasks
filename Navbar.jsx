import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
 
  return (
<section>
<nav className='navbar'>
    <div className='text'>Tasty</div>
<ul>
    <li>Home</li>
    <li>Menu</li>
    <li>Specialities</li>
    <li>Reservation</li>
    <li>Blog</li>
    <li>About</li>
    <li>Contact</li>
    <li className='btn'><Link to ="/admin">Admin</Link></li>
</ul>

</nav>
</section>

  )
}

export default Navbar