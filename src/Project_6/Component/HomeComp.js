import React, { useContext } from 'react'
import { Store } from '../DataStorage'

const HomeComp = () => {
  const Data = useContext(Store)
  console.log(Data)
  return (
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
  )
}

export default HomeComp