import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './Home'
import Pages from './Pages'
import CardDetail from './CardDetail'

const RouteComp = () => {
  return (
    <>
    <Routes>
        <Route  path='/'           element={<Home/>}/>
        <Route  path='/bollywood'  element={<Pages category={'Bollywood'}/>}/>
        <Route  path='/technology' element={<Pages category={'Technology'}/>}/>
        <Route  path='/hollywood'  element={<Pages category={'Hollywood'}/>}/>
        <Route  path='/fitness'    element={<Pages category={'Fitness'}/>}/>
        <Route  path='/food'       element={<Pages category={'Food'}/>}/>
        <Route  path='/:comp/:id'  element={<CardDetail/>}/>
    </Routes>
    </>
  )
}

export default RouteComp