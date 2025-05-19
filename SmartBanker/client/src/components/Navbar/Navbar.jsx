import React from 'react'
import { assets } from '../../assets/assets'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    
        <div id='navbar' className={styles.navbar}>
            <img  src={assets.sblogo} alt="" />
            <div className={styles.navlist}>
              <div className={styles.products}>Products</div>
              <div className={styles.services}>Services</div>
              <button>Login</button>
            </div>
        </div>
    
  )
}

export default Navbar