import React from 'react'
import BabElhikamLogo from '../../assets/BabElhikamLogo.png'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav>
        <div className={styles.navLeft}>
            <img src={BabElhikamLogo} alt="BabElhikam" className={styles.logoImg}/>
            <ul className='navList'>
                <NavLink to={'/'} className='navLink'>Home</NavLink>
                <NavLink to={'/quotes'} className='navLink'>Quotes</NavLink>
                <NavLink to={'/authors'} className='navLink'>Authors</NavLink>
                <NavLink to={'/'} className='navLink'>Categories</NavLink>
                <NavLink to={'/about'} className='navLink'>About</NavLink>
            </ul>
        </div>
        <div className={styles.navRight}>
            <NavLink to={'/login'} className={`${styles.loginBtn} navLink`}>Login</NavLink>
            <NavLink to={'/sign-up'} className={`${styles.signUpBtn} navLink`}>Sign up</NavLink>
        </div>
    </nav>
  )
}
