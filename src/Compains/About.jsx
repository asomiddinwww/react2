import React from 'react'
import Abotimg from '../assets/img/about-img.png'

const About = () => {
    return (
        <div className='about'>
            <div className="content">
                <div className="abot-text">
                    <h1>Track your Expenses & Save Money</h1>
                    <p>Helps you to organize your income and expenses</p>
                    <div className="btns">
                        <button className="btn-abot">Try free demo</button>
                        <p>— Web, iOS and Android</p>
                    </div>
                </div>
                <div className="abot-img"><img src={Abotimg} alt="" /></div>
            </div>
        </div>
    )
}

export default About