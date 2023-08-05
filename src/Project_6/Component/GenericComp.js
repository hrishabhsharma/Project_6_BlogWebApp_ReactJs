import React from 'react'



const GenericComp = ({img,heading,subheading,date}) => {

  return (
    <div className='cards'>
                <img src={img} alt='none'/>
                <p className='CardsHead'>{heading}</p>
                <p className='CardsSubhead'>{subheading}</p>
                <p className='CardsDate'>{date}</p>
    </div>
  )
}

export default GenericComp