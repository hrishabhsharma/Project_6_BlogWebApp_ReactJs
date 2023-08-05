import React , {useContext} from 'react'
import { Store } from '../DataStorage';
import { Link} from 'react-router-dom';
import GenericComp from './GenericComp';
import '../css/style.css'

const BollyComp = () => {
  const Data = useContext(Store);
  return (
    <div className='SideMargin'>
      <div>
      <p className='HeadTag'>Bollywood</p>
      <hr className='HeadUnderline'/>
      <div className='main'>
      {
        Data.filter((i)=>i.cat==='bolly').map((item,index)=>{
          return(
            <div key={index}>
            <Link to={"/bollywood/"+item.id} state={{data:item.heading,id:item.id}}>
              <GenericComp img={item.img} heading={item.heading} subheading={item.subheading} date={item.date} />
              {/* <div className='cards'>
                <img src={item.img} alt='none'/>
                <p className='CardsHead'>{item.heading}</p>
                <p className='CardsSubhead'>{item.subheading}</p>
                <p className='CardsDate'>{item.date}</p>
              </div> */}
            </Link>
              <hr className='CardsHr'/>
            </div>
          )
        })
      }
      </div>
      </div>
      <div>
        <p className='HeadTag'>Top Post</p>
        <hr className='HrTag'/>
        <div className='TopMain'>
        {
          Data.filter((i)=>i.cat==='bolly').map((item,index)=>{
            return(
              <div key={index} className='TopCard'>

                <img src={item.img} alt='none'/>
                <p className='TopHead'>{item.heading}</p>
                <p className='TopId'>{item.id}</p>
                <p className='TopDate'>{item.date}</p>
                <hr className='TopHr'/>
              </div>
            )
          })
        }
        </div>
        <div className='advertise'>Advertisement</div>
      </div>
    </div>

  )
}

export default BollyComp