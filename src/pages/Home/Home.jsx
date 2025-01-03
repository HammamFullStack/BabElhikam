import React from 'react'
import homeBackground from '../../assets/homeBackground.jpeg'
import introImg from '../../assets/introImg.jpeg'
import authorImg from '../../assets/authorImg.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faQuoteLeft, faPenNib, faUserGroup, faComment, faCloud } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import styles from './Home.module.css'

export const Home = () => {
  return (
    <>
        <main>
        <section className={styles.hero}>
            <h1 className={styles.heroTitle}>Find Inspiration in Every Word</h1>
            <form className={styles.inputGroup}>
                <input className={styles.heroSearch} type="text" placeholder="Search for quotes, authors, or topics..." />
                <button className={styles.heroBtn} type='submit'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </form>
            <img src={homeBackground} alt="home background" className={styles.homeBackgroundImg}/>
        </section>
        <section className={styles.intro}>
            <div className={styles.introImgContainer}>
                <img src={introImg} alt="Intro img" className={styles.introImg}/>
            </div>
            <div className={styles.introTextContainer}>
                <h1 className={styles.introTitle}>A world of <span>wisdom</span>, inspiration, and timeless <span>quotes</span>. Explore our collection and find the words that move you</h1>
                <NavLink className={`${styles.introBtn} navLink`}>Explore now</NavLink>
            </div>
        </section>
        <section className={styles.numbers}>
            <div className={styles.numbersContainer}>
                <div className={styles.numberCard}>
                    <FontAwesomeIcon icon={faQuoteLeft} className={styles.numberIcon}/>
                    <div className={styles.numberText}>
                        <h3>800,000+</h3>
                        <p>Quotes</p>
                    </div>
                </div>
                <div className={styles.numberCard}>
                    <FontAwesomeIcon icon={faPenNib} className={styles.numberIcon}/>
                    <div className={styles.numberText}>
                        <h3>10,000+</h3>
                        <p>Wisdom's</p>
                    </div>
                </div>
                <div className={styles.numberCard}>
                    <FontAwesomeIcon icon={faUserGroup} className={styles.numberIcon}/>
                    <div className={styles.numberText}>
                        <h3>20,000+</h3>
                        <p>Authors</p>
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.quoteOfTheDay}>
            <div className={styles.quoteTextContainer}>
                <h1>Quote of the day</h1>
                <blockquote><q className={styles.quoteText}>The best way to predict the future is to create it.</q></blockquote>
                <i>-Peter Drucker</i>
            </div>
            <div className={styles.authorImgContainer}>
                <img src={authorImg} alt="author image" className={styles.authorImg}/>
                <FontAwesomeIcon icon={faComment} className={styles.authorIconComment}/>
                <FontAwesomeIcon icon={faCloud} className={styles.authorIconCloud}/>
            </div>
        </section>
        </main>
    </>
  )
}
