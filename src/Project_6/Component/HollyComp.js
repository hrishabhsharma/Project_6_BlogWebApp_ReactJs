import React, { useContext } from 'react'
import { Store } from '../DataStorage'

const HollyComp = () => {
  const Data = useContext(Store)
  return (
    <div>
    <div>HollyComp</div>
    {
        Data.filter((i)=>i.cat==='holly').map((item,index)=>{
          return(
            <div key={index} className={item.id}>
            <div>
              <img src={item.img} alt='none'/>
            </div>
            <div>
              <h1>{item.heading}</h1>
              <p>{item.subheading}</p>
              <p>{item.date}</p>
            </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default HollyComp