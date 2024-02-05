import React from 'react'
import  framwork  from "./../../assets/avataaars.svg";
import fram from '../Startframwork/Startfram.module.css'
export default function Startframwork() {
  return (
    <div className={fram.bgFram}>
          <div className={fram.imgCenter}>
          <img src={framwork} alt=''></img>
          <h1 className='text-center text-white py-4'>START FRAMEWORK</h1>
      <div className='d-flex align-items-center justify-content-center mb-3'>
      <div className={`${fram.line} me-3`} style={{backgroundColor : "#fff"}}></div>
          <i class="fa-solid fa-star" style={{color : "#fff"}}></i>
          <div className={`${fram.line} ms-3`} style={{backgroundColor : "#fff"}}></div>
      </div>
      <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
          </div>
    </div>

    )
}

