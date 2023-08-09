import React, { useContext, useState } from 'react'
import { DataStorage } from '../DataStorage'
import HeadNavbar from './HeadNavbar'
import { Random_Number } from './ShufflingFunction'
import { Link } from 'react-router-dom'
import '../css/Home.css'
import { ScrollToTop } from './ScrollToTop'
import Cards from './Cards'
import Advertise from '../assets/3573754.jpg'
import DownArrow from '../assets/arrow.svg'
import RightArrow from '../assets/arrow-1.svg'

const HomeComp = () => {
  const Api = useContext(DataStorage)
  const Top_Thumbnails = Random_Number(3,1,100)
  const The_Latest = Random_Number(3,1,100)
  const Latest_Article = Random_Number(10,1,100)
  const Top_Article = Random_Number(5,1,100)
  const Bottom_Thumbnails = Random_Number(1,1,100)
  const [LoadMore , setLoadMore] = useState(false)
  const ToggleLoadMore = ()=>{
      setLoadMore(!LoadMore);
  }
  // console.log(Api)
  return (
    <>
    <HeadNavbar/>
    <div className='Home'>
      <div className='Thumbnails' >
        {
         Api.filter((data)=>Top_Thumbnails.find((j)=> j===data.id)===data.id)
         .map((item,index)=>{
          return(
            <Link key={index} 
                  to={"/"+item.genre+"/"+item.id}
                  state={{SingleCard:item}}
                  onClick={ScrollToTop}
                  className={`Thumb Thumb${index+1}`}
                  style={{backgroundImage:`url(${item.image})`}}>
                      <p className='head'>{item.heading}</p>
                      <p className='foot'><span>{item.genre}</span> / {item.date}</p>
            </Link>
          )})}
      </div>
      <div>
        <h1 className='Latest_Head'>The Latest</h1>
        <div className='Latest'>
          {
            Api.filter((data)=>The_Latest.find((j)=> j===data.id)===data.id)
            .map((item,index)=>{
             return(
              <Link key={index} 
                    to={"/"+item.genre+"/"+item.id}
                    state={{SingleCard:item}} 
                    className='Latest_Card' 
                    onClick={ScrollToTop}>
                  <img src={item.image} alt='not found'/>
                  <div className='Latest_Card_Overview'>
                      <p className='Latest_Card_Head'>{item.heading}</p>
                      <p className='Latest_Card_Subhead'>{item.subheading}</p>
                      <p className='Latest_Card_Foot'><span>{item.genre}</span> / {item.date}</p>
                  </div>
              </Link>
             )})
          }
        </div>
      </div>
      <h1 className='Latest_Article_Head'>Latest Articles</h1>
      <div className='Latest_Article'>
          <div className='section_1'>
            {Api && Api.filter((data)=>Latest_Article.slice(0,5).find((j)=> j===data.id)===data.id)
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
            {Api && Api.filter((data)=>Latest_Article.slice(5,10).find((j)=> j===data.id)===data.id)
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
            <div className='Toggle_Button' onClick={ToggleLoadMore}>
              <img src={LoadMore ? RightArrow : DownArrow} alt='icon not found'/>
              <span>{LoadMore ? 'LOAD LESS' : 'LOAD MORE'}</span>
            </div>
            {Api && Api.filter((data)=>Bottom_Thumbnails.find((j)=> j===data.id)===data.id)
                     .map((item,index)=>{
                     return(
                      <Link key={index} 
                            to={"/"+item.genre+"/"+item.id}
                            state={{SingleCard:item}}
                            onClick={ScrollToTop}
                            className={`Bottom_Thumb`}
                            style={{backgroundImage:`url(${item.image})`}}>
                                <p className='head'>{item.heading}</p>
                                <p className='foot'><span>{item.genre}</span> / {item.date}</p>
                      </Link>
            )})}
          </div>
          <div className='section_2'>
            <img className='Advertisement' src={Advertise} alt='add not found'/>
            <h1 className='Top_Posts_Head'>Top Posts</h1>
            {Api && Api.filter((data)=>Top_Article.find((j)=> j===data.id)===data.id)
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
          </div>
      </div>
      <h1 className='Latest_Stories_Head'>Latest Stories</h1>
      <div className='Latest_Stories'>
              
      </div>
    </div>
    </>
  )
}

export default HomeComp