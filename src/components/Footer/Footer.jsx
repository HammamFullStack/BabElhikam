import React from 'react'
import BabElhikamLogo from '../../assets/BabElhikamLogo.png'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer>
            <div className={styles.footerContainer}>
                <div className={styles.footerLogo}>
                    <img src={BabElhikamLogo} alt="BabElhikam" className={styles.footerLogoImg}/>
                </div>
                <div className={styles.footerLinks}>
                    <h3>Quick Links</h3>
                </div>
                <div className={styles.footerContact}>
                    <h3>Contact</h3>
                </div>
                <div className={styles.footerLogoText}>
                    <p>BabElhikam-Your gateway to timeless wisdom and inspiration.</p>
                </div>
                <div className={styles.footerLinksList}>
                    <ul className='navList'>
                        <NavLink to={'/'} className='navLink'>Home</NavLink>
                        <NavLink to={'/quotes'} className='navLink'>Quotes</NavLink>
                        <NavLink to={'/authors'} className='navLink'>Authors</NavLink>
                        <NavLink to={'/'} className='navLink'>Categories</NavLink>
                        <NavLink to={'/about'} className='navLink'>About</NavLink>
                    </ul>
                </div>
                <div className={styles.footerContactList}>
                    <ul className='List'>
                        <li><FontAwesomeIcon icon={faFacebook} /></li>
                        <li><FontAwesomeIcon icon={faInstagram} /></li>
                        <li><FontAwesomeIcon icon={faLinkedin} /></li>
                    </ul>
                </div>
                <div className={styles.footerCopyRight}>
                    <p><b>&copy; 2024 BabElhikam. All rights reserved.</b></p>
                </div>
            </div>
        </footer>
  )
}
