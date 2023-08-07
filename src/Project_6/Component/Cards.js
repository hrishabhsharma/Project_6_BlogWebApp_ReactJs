import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Cards.css'



const Cards = ({
                      id,
                      wholecard,
                      type,
                      image,
                      heading,
                      subheading,
                      date,
                      genre
                    }) => {  
  if(type === 'main'){
    return (
      <Link to={"/"+genre+"/"+id} className='All-Card' state={{wholecard:wholecard}}>
          <div className='All-Card-left-side'>
              <img src={image} alt='not found'/>
          </div>
          <div className='All-Card-right-side'>
              <p className='All-Card-Head'>{heading}</p>
              <p className='All-Card-Subhead'>{subheading}</p>
              <p className='All-Card-Foot'><span>{genre}</span> / {date}</p>
            </div>
      </Link>
    )
  }
  else{
    return (
      <Link to={"/"+genre+"/"+id} className='Top-Card' state={{wholecard:wholecard}}>
          <div className='Top-Card-left-side'>
              <img src={image} alt='not found'/>
          </div>
          <div className='Top-Card-right-side'>
              <p className='Top-Card-Head'>{heading}</p>
              <p className='Top-Card-Foot'><span>{genre}</span> / {date}</p>
            </div>
      </Link>
    )
  }
}

export default Cards