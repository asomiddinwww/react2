import React from 'react'
import Comimg from '../assets/img/comimg.png'
import Comimg2 from '../assets/img/comimg2.png'
import Comimg3 from '../assets/img/comimg3.png'

const Comment = () => {
    return (
        <div className='comment'>
            <div className="nickname4"><h1>We have millions of best wishers</h1></div>
            <div className="comments">
                <div className="com-item"><img src={Comimg} alt="" /></div>
                <div className="com-item"><img src={Comimg2} alt="" /></div>
                <div className="com-item"><img src={Comimg3} alt="" /></div>
                <div className="com-item"><img src={Comimg} alt="" /></div>
                <div className="com-item"><img src={Comimg2} alt="" /></div>
                <div className="com-item"><img src={Comimg3} alt="" /></div>
                <div className="com-item"><img src={Comimg} alt="" /></div>
            </div>
        </div>
    )
}

export default Comment