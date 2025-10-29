import React from 'react'
import Flexicardimg from '../assets/img/flexicardimg.png'
import Flexicardimg2 from '../assets/img/flexi2.png'
import Flexicardimg3 from '../assets/img/flexi3.png'


const Flexi = () => {
  return (
    <div className='flexi'>
        <div className="content">
            <div className="nickname3"><h1>Choose your flexible plan.</h1></div>
            <div className="flexi-cards">
                <div className="flexi-card-item">
                    <div className="flexi-card-img"><img src={Flexicardimg} alt="" /></div>
                    <div className="flexi-card-name"><h1>Starter Plan</h1></div>
                    <div className="flexi-card-infor">
                        <p>Store unlimited data</p>
                        <p>Export to pdf, xls, csv</p>
                        <p>Cloud server support</p>
                    </div>
                    <div className="flexi-card-buy">
                        <p><span>$9.99</span>/year</p>
                        <p className='min'>up to 3 user + 1.99 per user</p>
                    </div>
                    <div className="flexi-card-btn"><button className='fliexi-btn'>Get this</button></div>
                </div>
                 <div className="flexi-card-item">
                    <div className="flexi-card-img"><img src={Flexicardimg2} alt="" /></div>
                    <div className="flexi-card-name"><h1>Sliver Plan</h1></div>
                    <div className="flexi-card-infor">
                        <p>Store unlimited data</p>
                        <p>Export to pdf, xls, csv</p>
                        <p>Cloud server support</p>
                    </div>
                    <div className="flexi-card-buy">
                        <p><span>$19.99</span>/year</p>
                        <p className='min'>up to 3 user + 1.99 per user</p>
                    </div>
                    <div className="flexi-card-btn"><button className='fliexi-btn'>Get this</button></div>
                </div>
                 <div className="flexi-card-item">
                    <div className="flexi-card-img"><img src={Flexicardimg3} alt="" /></div>
                    <div className="flexi-card-name"><h1>Diamond Plan</h1></div>
                    <div className="flexi-card-infor">
                        <p>Store unlimited data</p>
                        <p>Export to pdf, xls, csv</p>
                        <p>Cloud server support</p>
                    </div>
                    <div className="flexi-card-buy">
                        <p><span>$29.99</span>/year</p>
                        <p className='min'>up to 3 user + 1.99 per user</p>
                    </div>
                    <div className="flexi-card-btn"><button className='fliexi-btn'>Get this</button></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Flexi