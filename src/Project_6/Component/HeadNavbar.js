import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/headNavbar.css'

const HeadNavbar = () => {
  return (
    <div>
    <header>
      <div className='Logo'>
        <div className='left'>The</div>
        <div className='right'>Siren</div>
        </div>
      <div className='Navbar'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/bollywood'>Bollywood</NavLink>
          <NavLink to='/technology'>Technology</NavLink>
          <NavLink to='/hollywood'>Hollywood</NavLink>
          <NavLink to='/fitness'>Fitness</NavLink>
          <NavLink to='/food'>Food</NavLink>
      </div>
    </header>
    </div>
  )
}

export default HeadNavbar