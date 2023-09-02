import React, { useContext } from 'react'
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareInstagram, faSquareTwitter, faSquareYoutube } from '@fortawesome/free-brands-svg-icons';
import {ShuffleCardsFooter , ScrollToTop} from './HelpingFunction'
import { DataStorage } from '../DataStorage'
import PageFooter from './PageFooter';
import '../css/CardDetail.css'
import '../css/CardFooter.css'
import user from '../assets/Mask Group 16.png'
import clap from '../assets/rythm.svg'
import sharing from '../assets/share.svg'

const CardDetail = () => {
  const SingleCard = useLocation().state.SingleCard
  const para = SingleCard.content.split("  ")
  const Api = useContext(DataStorage)
  const RandomCards = ShuffleCardsFooter(SingleCard.id)
  const Navigator = useNavigate()
  // console.log(SingleCard)
  // console.log(para)

  return (
        <>
          <div className='Card_Header'>
                <Link to={"/"} className='Logo'>
                    <div className='left'>The</div>
                    <div className='right'>Hrep</div>
                </Link>
                <div className="CardHeader_Logo_GetStarted">
                    Get Started
                </div>
          </div >
          <div className="Floating_Section">
                <div className="Like_Box">
                  <img src={clap} alt="not found" />
                  <span>9.3K</span>
                </div>
                <div className="Share_Box">
                  <img src={sharing} alt="not found" />
                  <span>Share this article</span>
                </div>
          </div>
          <div className='Card_Main_Body'>
            <button className="Back_Button_Sliding" onClick={()=>{Navigator(-1)}} >
                Go Back
            </button>
            <div className='Content'>
                <div className='Content_Title'>{SingleCard.heading}</div>
                <div className='Author'>
                  <div className='Author_Details'>
                    <img src={user} alt='not found'/>
                    <span><p>Hrishabh Sharma</p>{SingleCard.date}</span>
                  </div>
                  <div className="Social_Sites">
                      <FontAwesomeIcon icon={faSquareFacebook} size="xl" style={{ color: "#b3b3b3", }} />
                      <FontAwesomeIcon icon={faSquareTwitter} size="xl" style={{ color: "#b3b3b3", }} />
                      <FontAwesomeIcon icon={faSquareInstagram} size="xl" style={{ color: "#b3b3b3", }} />
                      <FontAwesomeIcon icon={faSquareYoutube} size="xl" style={{ color: "#b3b3b3", }} />
                  </div>
                </div>
                <div><img className='Content_Image' src={SingleCard.image} alt='not found'/></div>
                <div className='Content_Desc'>
                    {para && para.map((item, index) => (
                      <p key={index} className='para'>
                        {item}
                      </p>
                    ))}
                </div>
                <div className="Lang_Tag">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>Animation</span>
                </div>
                <div className="Like_Box">
                  <img src={clap} alt="not found" />
                  <span>9.3K claps</span>
                </div>
                <div className='Author_Details Bottom_Author'>
                    <img src={user} alt='not found'/>
                    <span>Written By<p>Hrishabh Sharma</p>{SingleCard.date}</span>
                </div>
            </div>
          </div>
          <div className='Card_Footer'>
            <div className='Footer_Cards_Title'>More From the Hrep</div>
            <div  className='Footer_Cards'>
            {Api && Api.filter((data)=>RandomCards.find((j)=> j===data.id)===data.id)
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
          <PageFooter/>
        </>
  )
}

export default CardDetail