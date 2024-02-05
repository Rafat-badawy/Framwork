import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from "../Navbar/Navbar.module.css"

export default class Navbar extends Component {
  render() {
    return (
      <>
      <nav className={`navbar navbar-expand-lg navbar-dark ${styles.bgNav} py-3 position-fixed z-3 w-100`}>
  <div className="container">
    <Link className="navbar-brand"to={""}><h2>START FRAMEWORK</h2></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"about"}><h6>ABOUT</h6></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"profolio"}><h6>PROFOLIO</h6></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"contact"}><h6>CONTACT</h6></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </>
    )
  }
}
