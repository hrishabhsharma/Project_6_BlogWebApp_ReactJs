import React from 'react'
import { useLocation } from 'react-router-dom';
import '../css/CardDetail.css'

const CardDetail = () => {
  const wholecard = useLocation().state.wholecard

  return (
    <div>
            <div className='Content'>
                <div className='heading'>{wholecard.heading}</div>
                <div><img className='image' src={wholecard.image} alt='not found'/></div>
                <div>{wholecard.content}</div>
            </div>
    </div>
  )
}

export default CardDetail