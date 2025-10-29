import React from 'react'
import Overimg from '../assets/img/overimg.png'
import Branchimg1 from '../assets/img/branchimg1.png'
import Branchimg2 from '../assets/img/branchimg2.png'
import Branchimg3 from '../assets/img/branchimg3.png'
import Branchimg4 from '../assets/img/branchimg4.png'
import Branchimg5 from '../assets/img/branchimg5.png'


const Overview = () => {
  return (
    <div className="container">
    <div className='over'>
      <div className="content">
        <img src={Overimg} alt="" />
      </div>
    </div>
    <div className="branch">
      <div className="content">
        <div className="branchs">
          <div className="branch-item"><a href="/"><img src={Branchimg1} alt="" /></a></div>
          <div className="branch-item"><a href="/"><img src={Branchimg2} alt="" /></a></div>
          <div className="branch-item"><a href="/"><img src={Branchimg3} alt="" /></a></div>
          <div className="branch-item"><a href="/"><img src={Branchimg4} alt="" /></a></div>
          <div className="branch-item"><a href="/"><img src={Branchimg5} alt="" /></a></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Overview