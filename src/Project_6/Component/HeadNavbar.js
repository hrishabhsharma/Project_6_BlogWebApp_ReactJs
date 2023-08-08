import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/headNavbar.css'

const HeadNavbar = () => {
  return (
    <>
    <header>
      <div className='Logo'>
        <div className='left'>The</div>
        <div className='right'>Siren</div>
      </div>
      <div className='Navbar'>
          <NavLink style={({isActive}) => ({color: isActive ? "crimson" : "black",})} to='/'>Home</NavLink>
          <NavLink style={({isActive}) => ({color: isActive ? "crimson" : "black",})} to='/bollywood'>Bollywood</NavLink>
          <NavLink style={({isActive}) => ({color: isActive ? "crimson" : "black",})} to='/technology'>Technology</NavLink>
          <NavLink style={({isActive}) => ({color: isActive ? "crimson" : "black",})} to='/hollywood'>Hollywood</NavLink>
          <NavLink style={({isActive}) => ({color: isActive ? "crimson" : "black",})} to='/fitness'>Fitness</NavLink>
          <NavLink style={({isActive}) => ({color: isActive ? "crimson" : "black",})} to='/food'>Food</NavLink>
      </div>
    </header>
    </>
  )
}

export default HeadNavbar