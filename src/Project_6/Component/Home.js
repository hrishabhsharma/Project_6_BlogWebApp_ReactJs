import React, { useContext } from 'react'
import { DataStorage } from '../DataStorage'
import HeadNavbar from './HeadNavbar'
import { Random_Number } from './ShufflingFunction'
import { Link } from 'react-router-dom'
import '../css/Home.css'
import { ScrollToTop } from './ScrollToTop'

const HomeComp = () => {
  const Api = useContext(DataStorage)
  const Top_Thumbnails = Random_Number(3,1,100)
  const The_Latest = Random_Number(3,1,100)
  const Latest_Article = Random_Number(5,1,100)
  console.log(Api)
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
                  onClick={ScrollToTop}
                  className={`Thumb Thumb${index+1}`}
                  style={{backgroundImage:`url(${item.image})`}}>
                      <p className='head'>{item.heading}</p>
                      <p className='foot'><span>{item.genre}</span> / {item.date}</p>
            </Link>
            // <img src={item.image} alt='not found' className={'thumb'+(index+1)} key={index}/>
          )})}
      </div>
      <div>
        <h1>The Latest</h1>
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
    </div>
    </>
  )
}

export default HomeComp