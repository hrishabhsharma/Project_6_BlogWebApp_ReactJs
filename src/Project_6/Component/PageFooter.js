import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/PageFooter.css'
import { ScrollToTop } from './HelpingFunction'

const PageFooter = () => {
    const Navigator = useNavigate()
  return (
    <footer>
    <div className='Footer_Body'>
        <div className='Footer_Body_Left'>
            <div onClick={()=>Navigator('/')} className="Logo">
                <span className="left">The </span> 
                <span className='right'>Prep</span>
            </div>
            <p>The Prep is a Blog website where people can share their views and view other people thoughts.</p>
            <div className='Icons'>
                <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/linkedin-circled--v1.png" alt="linkedin-circled--v1"/>
                <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/twitter-circled--v1.png" alt="twitter-circled--v1"/>
                <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="facebook-new"/>
                <img width="40" height="40" src="https://img.icons8.com/ios-glyphs/60/instagram-circle.png" alt="instagram-circle"/>
            </div>
        </div>
        <div className='Footer_Body_Middle'>
            <div className='Blog'>
                <h2>Blog</h2>
                <div>
                    <div onClick={()=>{Navigator('/bollywood') ; ScrollToTop()}}> Bollywood</div>
                    <div onClick={()=>{Navigator('/technology'); ScrollToTop()}}> Technology</div>
                    <div onClick={()=>{Navigator('/hollywood') ; ScrollToTop()}}> Hollywood</div>
                    <div onClick={()=>{Navigator('/fitness')   ; ScrollToTop()}}> Fitness</div>
                    <div onClick={()=>{Navigator('/food')      ; ScrollToTop()}}> Food</div>
                </div>
            </div>
            <div className='Resources'>
                <h2>Resources</h2>
                <div>
                    <div>Help Center</div>
                    <div>Careers</div>
                    <div>Contact Us</div>
                </div>
            </div>
            <div className='Partners'>
                <h2>Partners</h2>
                <div>
                    <div>Become a Partner</div>
                    <div>Step to Integrate</div>
                    <div>Partner List</div>
                </div>
            </div>
        </div>
        <div className='Footer_Body_Right'>
            <h1>Generate Your Querry ?</h1>
            <p>+91-7987715253</p>
            <p>support@prep.com</p>
        </div>
    </div>
    <div className='Copyright'>
        <p>© 2023 THE PREP - A Blog Website</p>
        <div>
            <p>Privacy Policy</p>
            <p>Terms of service</p>
        </div>
    </div>
    </footer>
  )
}

export default PageFooter