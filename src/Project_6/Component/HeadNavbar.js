import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../css/headNavbar.css'

const HeadNavbar = () => {
  const Navigator = useNavigate()
  const [Toggle , setToggle] = useState(false)
  const Dropdown = ()=>{
    setToggle(!Toggle)
  }
  return (
    <>
    <header>
      <div className='Responsive_Bar'>
        <div onClick={()=>Navigator('/bollywood')} className='Logo'>
          <div className='left'>The</div>
          <div className='right'>Siren</div>
        </div>
        <img onClick={Dropdown} className='Burger_Icon' width="50" height="50" src="https://img.icons8.com/ios/50/menu--v7.png" alt="icon not found"/>
      </div>
      <div className={Toggle ? 'Navbar' : 'Navbar DropDown'}>
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