import React from 'react'
import styles from "../Contacts/Contact.module.css"
export default function Contacts() {
  return (
    <>
    <div className={styles.Contacts}>
    <div className={`${styles.center}`}>
      <h1 className='text-center text-#000 py-4'>CONATCT SECTION</h1>
      <div className='d-flex align-items-center justify-content-center mb-3'>
      <div className={`${styles.line} me-3`} style={{backgroundColor : "#000"}}></div>
          <i class="fa-solid fa-star" style={{color : "#000"}}></i>
          <div className={`${styles.line} ms-3`} style={{backgroundColor : "#000"}}></div>
      </div>
      </div>
        
        <form className={styles.container}>
        <div class={styles.group}>
          <input placeholder='userName' required="" type="text" class={styles.input}/>
          <span class={styles.highlight}></span>
           <span class={styles.bar}></span>
         <label></label>
       </div>
        <div class={styles.group}>
          <input placeholder='userAge' required="" type="text" class={styles.input}/>
          <span class={styles.highlight}></span>
           <span class={styles.bar}></span>
         <label></label>
       </div>
        <div class={styles.group}>
          <input placeholder='userEmail' required="" type="text" class={styles.input}/>
          <span class={styles.highlight}></span>
           <span class={styles.bar}></span>
         <label></label>
       </div>
        <div class={styles.group}>
          <input placeholder='userPassword' required="" type="text" class={styles.input}/>
          <span class={styles.highlight}></span>
           <span class={styles.bar}></span>
         <label></label>
       </div>
       <button type='submit' className={`${styles.btn} bg-success rounded-3 border-0  mt-4`}>Send</button>

        </form>
      
      </div>
    </>
  )
}
