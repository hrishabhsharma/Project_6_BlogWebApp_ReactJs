import React , {useContext} from 'react'
import { DataStorage } from '../DataStorage';
import Cards from './Cards';
import '../css/Pages.css'
import HeadNavbar from './HeadNavbar';

const Pages = ({category}) => {
  const Api = useContext(DataStorage);
  return (
    <>
    <HeadNavbar/>
    <div className='Main-Body'>
      <div className='Left-Tile'>
        <div className='Tile-Head'>{category}</div>
        <div className="bottom-line"></div>
        <div className='All-Cards'>
            {Api && Api
              .filter((data)=>data.genre===category)
              .map((item,index)=>
                  <Cards
                        key={index}
                        type='main'
                        wholecard={item}
                        id={item.id}
                        image={item.image}
                        heading={item.heading}
                        subheading={item.subheading}
                        date={item.date}
                        genre={item.genre}
            />)}
        </div>
      </div>

      <div className='Right-Tile'>
        <div className='Tile-Head'>Top Post</div>
        <div className="bottom-line"></div>
        <div className='Top-Cards'>
            {Api && Api
              .filter((data)=>(data.genre===category) && (data.id%4===0))
              .map((item,index)=> 
                  <Cards
                        key={index}
                        type='top'
                        wholecard={item}
                        id={item.id}
                        image={item.image}
                        heading={item.heading}
                        date={item.date}
                        genre={item.genre}
                  />)}
        </div>
        {/* <div className='advertise'>Advertisement</div> */}
      </div>
    </div>
    </>

  )
}

export default Pages