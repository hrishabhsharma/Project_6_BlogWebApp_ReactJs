import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareInstagram, faSquareTwitter, faSquareYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import '../css/CardDetail.css'
import user from '../assets/Mask Group 16.png'
import clap from '../assets/rythm.svg'
import sharing from '../assets/share.svg'
import CardFooter from './CardFooter';
import { ScrollToTop } from './ScrollToTop';

const CardDetail = () => {
  const wholecard = useLocation().state.wholecard
  const para = wholecard.content.split("  ")
  const Navigator = useNavigate()
  // console.log(para)

  return (
        <>
          <div className='Detail_Header'>
            <div className="Header_2">
                <Link to={"/"} className='Logo'>
                    <div className='left'>The</div>
                    <div className='right'>Siren</div>
                </Link>
                <div className="Logo_GetStarted">
                    Get Started
                </div>
            </div>
          </div >
          <div>
            <button className="Back_Button_Sliding" onClick={()=>{
              Navigator('/'+wholecard.genre);
               ScrollToTop();}} >
                Go Back
            </button>
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
            <div className='Content'>
                <div className='Content_Title'>{wholecard.heading}</div>
                <div className='Author'>
                  <div className='Author_Details'>
                    <img src={user} alt='not found'/>
                    <span><p>Hrishabh Sharma</p>{wholecard.date}</span>
                  </div>
                  <div className="Social_Sites">
                      <FontAwesomeIcon icon={faSquareFacebook} size="xl" style={{ color: "#b3b3b3", }} />
                      <FontAwesomeIcon icon={faSquareTwitter} size="xl" style={{ color: "#b3b3b3", }} />
                      <FontAwesomeIcon icon={faSquareInstagram} size="xl" style={{ color: "#b3b3b3", }} />
                      <FontAwesomeIcon icon={faSquareYoutube} size="xl" style={{ color: "#b3b3b3", }} />
                  </div>
                </div>
                <div><img className='Content_Image' src={wholecard.image} alt='not found'/></div>
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
                <div className='Author_Details Bottom'>
                    <img src={user} alt='not found'/>
                    <span>Written By<p>Hrishabh Sharma</p>{wholecard.date}</span>
                </div>
            </div>
          </div>
          <CardFooter Except_Card={wholecard.id}/>
        </>
  )
}

export default CardDetail