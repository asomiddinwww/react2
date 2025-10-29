import React from 'react'
import Logo from '../assets/img/Logo.png'

const Header = () => {
  return (
    <div className='header'>
        <div className="content">
            <a href="/"><img src={Logo} alt="logo"/></a>
            <div className="header-menu">
                <ul className="hed-ul">
                    <li className="li-item-hed"><a href="/">Features</a></li>
                    <li className="li-item-hed"><a href="/">About us</a></li>
                    <li className="li-item-hed"><a href="/">Pricing</a></li>
                    <li className="li-item-hed"><a href="/">Feedback</a></li>
                </ul>
            </div>
            <button className="hed-btn">Request a demo</button>
        </div>
    </div>
  )
}

export default Header