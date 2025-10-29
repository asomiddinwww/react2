import React from 'react'
import Onlineimg from '../assets/img/onlineimg.png'

const Online = () => {
  return (
    <div className='oninecont'>
      <div className="content">
          <div className="onliy-text">
            <p>Alwalys online</p>
            <h1>Real-time support with cloud</h1>
            <p>Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.</p>
            <button className='onlibtn'>Learn more</button>
          </div>
          <div className="onliy-img"><img src={Onlineimg} alt="" /></div>
      </div>
    </div>
  )
}

export default Online