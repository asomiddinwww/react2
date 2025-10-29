import React from 'react'
import Downimg from '../assets/img/downimg1.png'
import Downimg2 from '../assets/img/downimg2.png'

const Downloat = () => {
    return (
        <div className='download'>
            <div className="nickname5">
                <h1>20M+ downloaded from 32 diffrent countires</h1>
                <p>Try demo for 7 days with full features.</p>
            </div>
            <div className="demos">
                <div className="demos-img"><img src={Downimg} alt="" /></div>
                <div className="demos-btn"><button>Try free demo</button></div>
                <div className="demos-img"><img src={Downimg2} alt="" /></div>

            </div>
        </div>
    )
}

export default Downloat