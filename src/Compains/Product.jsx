import React from 'react'
import Proimg from '../assets/img/procardimg.png'
import Proimg2 from '../assets/img/costimg3.png'
import Proimg3 from '../assets/img/proimg.png'

const Product = () => {
  return (
    <div className='container product'>
        <div className="content">
            <div className="nick-name2">
                <h1>The Product we work with.</h1>
                <p>Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.</p>
            </div>
            <div className="pro-cards">
                <div className="pro-card-item1">
                    <img src={Proimg} alt="" />
                    <h3>Cross platform</h3>
                    <p>Elit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
                <div className="pro-card-item1">
                    <img src={Proimg2} alt="" />
                    <h3>Cloud server</h3>
                    <p>Elit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
                <div className="pro-card-item1">
                    <img src={Proimg3} alt="" />
                    <h3>Pure Javascript</h3>
                    <p>Elit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product