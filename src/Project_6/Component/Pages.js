import React , {useContext, useState} from 'react'
import { DataStorage } from '../DataStorage';
import Cards from './Cards';
import '../css/Pages.css'
import HeadNavbar from './HeadNavbar';
import Advertise from '../assets/3573754.jpg'
import DownArrow from '../assets/arrow.svg'
import RightArrow from '../assets/arrow-1.svg'
import { ScrollToTop } from './HelpingFunction';
import PageFooter from './PageFooter';

const Pages = ({category}) => {
  const Api = useContext(DataStorage);
  const [LoadMore , setLoadMore] = useState(false)
  const ToggleLoadMore = ()=>{
      setLoadMore(!LoadMore);
      if(LoadMore){
      ScrollToTop();
      }
  }
  return (
    <>
    <HeadNavbar/>
    <div className='Main-Body'>
      <div className='Left-Tile'>
        <div className='Tile-Head'>{category}</div>
        <div className="bottom-line"></div>
        <div className='All-Cards'>
            {Api && Api
              .filter((data)=>(data.genre===category && data.id%3===0))
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
            {Api && Api
              .filter((data)=>(data.genre===category && data.id%3!==0))
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
                        Toggle={LoadMore ? '' : 'Hide'}
            />)}
        </div>
        <div className='Toggle_Button' onClick={ToggleLoadMore}>
          <img src={LoadMore ? RightArrow : DownArrow} alt='icon not found'/>
          <span>{LoadMore ? 'LOAD LESS' : 'LOAD MORE'}</span>
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
                        count={index+1}
                        type='top'
                        wholecard={item}
                        id={item.id}
                        image={item.image}
                        heading={item.heading}
                        date={item.date}
                        genre={item.genre}
                  />)}
        <img className='advertise' src={Advertise} alt='add not found'/>
        </div>
      </div>
    </div>
    <PageFooter/>
    </>

  )
}

export default Pages