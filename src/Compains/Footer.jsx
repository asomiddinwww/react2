import React from 'react'
import Fotlogo from '../assets/img/fotlogo.png'
import botimg1 from '../assets/img/botimg1.png'
import botimg2 from '../assets/img/botimg2.png'
import botimg3 from '../assets/img/botimg3.png'

const Footer = () => {
  return (
    <footer>
        <div className="content">
            <div className="fot-top">
                <ul className='fot-ul'>
                    <li className='fot-li-item bold'><img src={Fotlogo} alt="" /></li>
                </ul>
                 <ul className='fot-ul'>
                    <li className='fot-li-item bold'>Links</li>
                    <li className='fot-li-item'><a href="/">Home</a></li>
                    <li className='fot-li-item'><a href="/">About us</a></li>
                    <li className='fot-li-item'><a href="/">Careers</a></li>
                    <li className='fot-li-item'><a href="/">Pricing</a></li>
                    <li className='fot-li-item'><a href="/">Features</a></li>
                    <li className='fot-li-item'><a href="/">Blog</a></li>
                </ul>
                 <ul className='fot-ul'>
                    <li className='fot-li-item bold'>Legal</li>
                    <li className='fot-li-item'><a href="/">Legal</a></li>
                    <li className='fot-li-item'><a href="/">Terms of conditions</a></li>
                    <li className='fot-li-item'><a href="/">Terms of conditions</a></li>
                    <li className='fot-li-item'><a href="/">Cookie policy</a></li>
                </ul>
                 <ul className='fot-ul'>
                    <li className='fot-li-item bold'>Newsletter</li>
                    <li className='fot-li-item'><p>Over 25000 people have subscribed</p></li>
                    <li className='fot-li-item boxx'><input type="text" placeholder='Enter your email'/><button>Subcribe</button></li>
                    <li className='fot-li-item'><p className="p2">We don’t sell your email and spam</p></li>
                </ul>
            </div>
            <hr />
            <div className="fot-bot">
                <div className="bot-left">
                    <p>Privacy & Terms</p>
                    <p>Contact Us</p>
                </div>
                <div className="bot-centr"><p>Copyright @ 2022 xpence</p></div>
                <div className="bot-right">
                    <a href="/"><img src={botimg1} alt="" /></a>
                    <a href="/"><img src={botimg2} alt="" /></a>
                    <a href="/"><img src={botimg3} alt="" /></a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer