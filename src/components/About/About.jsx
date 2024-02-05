import React from 'react'
import styles from '../About/About.module.css'
export default function About() {
  return (
  <div className={styles.about}>
     <div className={`${styles.center} d-flex justify-content-center align-items-start text-white`}>
    <div className="text-center pt-4" style={{color : "#fff"}}>
      <h1>ABOUT COMPONENT</h1>
      <div className='d-flex align-items-center justify-content-center mb-3'>
      <div className={`${styles.line} me-3`} style={{backgroundColor : "#fff"}}></div>
          <i class="fa-solid fa-star" style={{color : "#fff"}}></i>
          <div className={`${styles.line} ms-3`} style={{backgroundColor : "#fff"}}></div>
      </div>
      <div className='container'>
          <div className='row px-5'>
            <div className='col-md-6 ps-md-5'>
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className='col-md-6 pe-5'>
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>

          </div>
      </div>
    </div>
  </div>

   </div>
  )
}


