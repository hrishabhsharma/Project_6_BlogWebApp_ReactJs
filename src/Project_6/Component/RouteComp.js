import React from 'react'
import { Routes , Route } from 'react-router-dom'
import HomeComp from './HomeComp'
import BollyComp from './BollyComp'
import TechComp from './TechComp'
import HollyComp from './HollyComp'
import FitComp from './FitComp'
import FoodComp from './FoodComp'
import DataStorage from '../DataStorage'
// import GenericComp from './GenericComp'

const RouteComp = () => {
  return (
    <>
    <DataStorage>
    <Routes>
        <Route  path='/' element={<HomeComp/>}/>
        <Route  path='/bollywood' element={<BollyComp/>}/>
        <Route  path='/technology' element={<TechComp/>}/>
        <Route  path='/hollywood' element={<HollyComp/>}/>
        <Route  path='/fitness' element={<FitComp/>}/>
        <Route  path='/food' element={<FoodComp/>}/>
        {/* <Route  path='/bollywood/:id' element={<GenericComp/>}/> */}
    </Routes>
    </DataStorage>
    </>
  )
}

export default RouteComp