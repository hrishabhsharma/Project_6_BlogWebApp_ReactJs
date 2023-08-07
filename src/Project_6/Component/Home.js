import React, { useContext } from 'react'
import { DataStorage } from '../DataStorage'
import HeadNavbar from './HeadNavbar'

const HomeComp = () => {
  const Data = useContext(DataStorage)
  console.log(Data)
  return (
    <>
    <HeadNavbar/>
    <div id='Home'>
      <div className='homeMain'>
        <div className='a'>Ttile of gallery</div>
        <div className='b'>The Sound of You Loved</div>
        <div className='c'>The Sound is cloud</div>
      </div>
      <div>
        <h1>The Latest</h1>
        <hr/>
        
      </div>
    </div>
    </>
  )
}

export default HomeComp