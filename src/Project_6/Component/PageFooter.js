import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/PageFooter.css'

const PageFooter = () => {
    const Navigator = useNavigate()
  return (
    <footer>
    <div className='Footer_Body'>
        <div className='Footer_Body_Left'>
            <div onClick={()=>Navigator('/')} className="Logo">
                <span className="left">The </span> 
                <span className='right'>Siren</span>
            </div>
            <p>The Siren is a Blog website where people can share their views and view other people thoughts.</p>
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
                    <div onClick={()=>Navigator('/bollywood') }> Bollywood</div>
                    <div onClick={()=>Navigator('/technology')}> Technology</div>
                    <div onClick={()=>Navigator('/hollywood') }> Hollywood</div>
                    <div onClick={()=>Navigator('/fitness')   }> Fitness</div>
                    <div onClick={()=>Navigator('/food')      }> Food</div>
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
            <h1>Ready to get started ?</h1>
            <p>+91-7987715253</p>
            <p>support@siren.com</p>
        </div>
    </div>
    <div className='Copyright'>
        <p>© 2023 THE SIREN - A Blog Website</p>
        <div>
            <p>Privacy Policy</p>
            <p>Terms of service</p>
        </div>
    </div>
    </footer>
  )
}

export default PageFooter

// import React, { useState } from 'react'
// import "./Footer.css"
// import { useNavigate } from 'react-router-dom'
// import send from "./Icons/send.png"
// import smrphone from "./Icons/smartphone.png"
// import ln from "./Icons/linkedin.png"
// import fb from './Icons/facebook.png'
// import twitter from './Icons/twitter.png'
// import insta from './Icons/instagram.png'
// import add from "./Icons/add.png"

// const Footer = () => {
//     const [togle , settogle] = useState(true)
//     const [togle2 , settogle2] = useState(true)
//     const [togle3 , settogle3] = useState(true)
    
//   return (
//     <>
//   )
// }

// export default Footer