import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../css/headNavbar.css'

const HeadNavbar = () => {
  const Navigator = useNavigate()
  const [Toggle , setToggle] = useState(false)
  const Dropdown = ()=>{
    setToggle(!Toggle);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <>
    <header>
      <div className='Responsive_Bar'>
        <div onClick={()=>Navigator('/')} className='Logo'>
          <div className='left'>The</div>
          <div className='right'>Hrep</div>
        </div>
        <img onClick={()=>setToggle(!Toggle)} className='Burger_Icon' width="50" height="50" src="https://img.icons8.com/ios/50/menu--v7.png" alt="icon not found"/>
      </div>
      <div className={Toggle ? 'DropDown' : 'Navbar'}>
          <NavLink onClick={Dropdown} activeClassName="active" exact to='/'>Home</NavLink>
          <NavLink onClick={Dropdown} activeClassName="active" exact to='/bollywood'>Bollywood</NavLink>
          <NavLink onClick={Dropdown} activeClassName="active" exact to='/technology'>Technology</NavLink>
          <NavLink onClick={Dropdown} activeClassName="active" exact to='/hollywood'>Hollywood</NavLink>
          <NavLink onClick={Dropdown} activeClassName="active" exact to='/fitness'>Fitness</NavLink>
          <NavLink onClick={Dropdown} activeClassName="active" exact to='/food'>Food</NavLink>
      </div>
    </header>
    </>
  )
}

export default HeadNavbar