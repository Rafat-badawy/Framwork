import React from 'react'
import img1 from "./../../assets/poert1.png"
import img2 from "./../../assets/port2.png"
import img3 from "./../../assets/port3.png"
import styles from "./Profolio.module.css"
export default function Profolio() {
  return (
    <>
    <div className={styles.profolio}>
      <div className={styles.center}>
      <h1 className='text-center text-#000 py-4'>PORTFOLIO COMPONENT</h1>
      <div className='d-flex align-items-center justify-content-center mb-3'>
      <div className={`${styles.line} me-3`} style={{backgroundColor : "#000"}}></div>
          <i class="fa-solid fa-star" style={{color : "#000"}}></i>
          <div className={`${styles.line} ms-3`} style={{backgroundColor : "#000"}}></div>
      </div>
      </div>
      <div className={`${styles.container} `} >
       <div className='row g-5'>
        <div className='col-lg-4 col-md-6'>
          <div className='rounded-3 overflow-hidden position-relative'>
            <img className='w-100 rounded-3' src={img1}/>
            <div className={`${styles.layer} position-absolute start-0 w-100 h-100 top-0 d-flex justify-content-center align-items-center`}>
              <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6'>
          <div className='rounded-3 overflow-hidden position-relative'>
            <img className='w-100 rounded-3' src={img2}/>
            <div className={`${styles.layer} position-absolute start-0 w-100 h-100 top-0 d-flex justify-content-center align-items-center`}>
              <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6'>
          <div className='rounded-3 overflow-hidden position-relative'>
            <img className='w-100 rounded-3' src={img3}/>
            <div className={`${styles.layer} position-absolute start-0 w-100 h-100 top-0 d-flex justify-content-center align-items-center`}>
              <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6'>
          <div className='rounded-3 overflow-hidden position-relative'>
            <img className='w-100 rounded-3' src={img1}/>
            <div className={`${styles.layer} position-absolute start-0 w-100 h-100 top-0 d-flex justify-content-center align-items-center`}>
              <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6'>
          <div className='rounded-3 overflow-hidden position-relative'>
            <img className='w-100 rounded-3' src={img2}/>
            <div className={`${styles.layer} position-absolute start-0 w-100 h-100 top-0 d-flex justify-content-center align-items-center`}>
              <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6'>
          <div className='rounded-3 overflow-hidden position-relative'>
            <img className='w-100 rounded-3' src={img3}/>
            <div className={`${styles.layer} position-absolute start-0 w-100 h-100 top-0 d-flex justify-content-center align-items-center`}>
              <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>
        </div>
       </div>
        
      </div>
    </div>
    </>
  )
}

