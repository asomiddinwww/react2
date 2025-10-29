import React from 'react'
import Onlineimg from '../assets/img/constimg.png'
import Onlineimg2 from '../assets/img/costimg2.png'

const Cost = () => {
  return (
    <div className="containerr">
 <div className='oninecont cost'>
      <div className="content">
         <div className="onliy-img"><img src={Onlineimg} alt="" /></div>
          <div className="onliy-text">
            <p>free some cost</p>
            <h1>Save cost for you and family</h1>
            <p>Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.</p>
            <button className='onlibtn'>Learn more</button>
          </div>
      </div>
    </div>
    <div className='oninecont cost'>
      <div className="content">
          <div className="onliy-text">
            <p>Use anytime</p>
            <h1>Use anytime when you need</h1>
            <p>Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.</p>
            <button className='onlibtn'>Learn more</button>
          </div>
           <div className="onliy-img"><img src={Onlineimg2} alt="" /></div>
      </div>
    </div>
    </div>
  )
}

export default Cost