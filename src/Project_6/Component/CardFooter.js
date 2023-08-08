import React, { useContext } from 'react'
import { DataStorage } from '../DataStorage'
import '../css/CardFooter.css'
import user from '../assets/Mask Group 16.png'
import {ShuffleCardsFooter} from './ShufflingFunction'
import { Link } from 'react-router-dom'
import { ScrollToTop } from './ScrollToTop'

const CardFooter = ({Except_Card}) => {
    const RandomCards = ShuffleCardsFooter(Except_Card)
    const Api = useContext(DataStorage)
    console.log(RandomCards)

    return (
        <div className='Card_Footer'>
            <div className='Footer_Cards_Title'>More From the Siren</div>
            <div  className='Footer_Cards'>
            {   
                Api.filter((data)=>RandomCards.find((j)=> j===data.id)===data.id)
                .map((item,index)=>{
                return(
                        <Link   key={index} 
                                to={"/"+item.genre+"/"+item.id}
                                state={{SingleCard:item}} 
                                className='Footer_Card' 
                                onClick={ScrollToTop}>
                            <img src={item.image} alt='not found'/>
                            <p className='Footer_Card_Heading'>{item.heading}</p>
                            <div className='Footer_Card_Author_Details'>
                                <img src={user} alt='not found'/>
                                <span>Written By<p>Hrishabh Sharma</p>{item.date}</span>
                            </div>
                        </Link>
            )})}
            </div>
        </div>
    )
}

export default CardFooter