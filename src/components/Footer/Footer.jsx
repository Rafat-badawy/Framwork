import React, { Component } from 'react'
import styles from '../Footer/Footer.module.css'
export default class Footer extends Component {
  render() {
    return (
      <>
     <div className={`${styles.bgFoot} py-5 text-center text-white`}>
      <div className={`container`}>
        <div className='row g-5'>
          <div className='col-mg-4  col-md-4'>
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className='col-mg-4  col-md-4'>
            <h2>AROUND THE WEB</h2>
           <ul className='ms-5'>
            <li>
            <i class="fa-brands fa-facebook fa-lg"></i>
            </li>
            <li>
            <i class="fa-brands fa-twitter fa-lg"></i>            </li>
            <li>
            <i class="fa-brands fa-linkedin-in fa-lg"></i>            </li>
            <li>
            <i class="fa-solid fa-globe fa-lg"></i>            </li>
            <div className={styles.clear}></div>
           </ul>
          </div>
          <div className='col-mg-4  col-md-4'>
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
     </div>
     <div className='bg-dark py-3 text-center text-white'>
      <p className='my-2'>Copyright © Your Website 2021</p>
     </div>
      </>
    )
  }
}
