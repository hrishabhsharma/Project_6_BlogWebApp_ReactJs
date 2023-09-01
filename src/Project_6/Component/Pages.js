import React , {useContext, useState} from 'react'
import { DataStorage } from '../DataStorage';
import '../css/Pages.css'
import '../css/Cards.css'
import HeadNavbar from './HeadNavbar';
import Advertise from '../assets/3573754.jpg'
import DownArrow from '../assets/arrow.svg'
import RightArrow from '../assets/arrow-1.svg'
import { ScrollToTop } from './HelpingFunction';
import PageFooter from './PageFooter';
import { Link } from 'react-router-dom';

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
                  <Link   key={index}
                          to={"/"+item.genre+"/"+item.id} 
                          onClick={ScrollToTop} 
                          className={`All_Card`}
                          state={{SingleCard:item}}
                  >
                    <div className='All_Card_left_side'>
                        <img src={item.image} alt='not found'/>
                    </div>
                    <div className='All_Card_right_side'>
                        <p className='All_Card_Head'>{item.heading}</p>
                        <p className='All_Card_Subhead'>{item.subheading}</p>
                        <p className='All_Card_Foot'><span>{item.genre}</span> / {item.date}</p>
                    </div>
                  </Link>
            )}
            {Api && Api
              .filter((data)=>(data.genre===category && data.id%3!==0))
              .map((item,index)=>
                  <Link   key={index}
                          to={"/"+item.genre+"/"+item.id} 
                          onClick={ScrollToTop} 
                          className={`All_Card ${LoadMore ? '' : 'Hide'}`}
                          state={{SingleCard:item}}
                  >
                    <div className='All_Card_left_side'>
                        <img src={item.image} alt='not found'/>
                    </div>
                    <div className='All_Card_right_side'>
                        <p className='All_Card_Head'>{item.heading}</p>
                        <p className='All_Card_Subhead'>{item.subheading}</p>
                        <p className='All_Card_Foot'><span>{item.genre}</span> / {item.date}</p>
                    </div>
                  </Link>
            )}
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
                  <Link key={index}
                        to={"/"+item.genre+"/"+item.id} 
                        onClick={ScrollToTop} 
                        className='Top_Card' 
                        state={{SingleCard:item}}
                  >
                    <div className='Top_Card_left_side'>
                        <img src={item.image} alt='not found'/>
                    </div>
                    <div className='Top_Card_right_side'>
                        <p className='Top_Card_Head'>{item.heading}</p>
                        <p className='Top_Card_Foot'><span>{item.genre}</span> / {item.date}</p>
                    </div>
                    <div className='Top_Card_Count'>
                      <p>{index+1}</p>
                    </div>
                  </Link>
              )}
        <img className='advertise' src={Advertise} alt='add not found'/>
        </div>
      </div>
    </div>
    <PageFooter/>
    </>

  )
}

export default Pages