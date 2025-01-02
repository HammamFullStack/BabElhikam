import React from 'react'
import authorImg2 from '../../assets/authorImg2.jpg'
import styles from './QuoteCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export const QuoteCard = () => {
  return (
    <div className={styles.card}>
        <img src={authorImg2} alt="" className={styles.authorImg} />
        <div className={styles.container}>
            <p className={styles.authorName}>-- Mark Twain --</p>
            <div className={styles.badgeContainer}>
                <p className={styles.badge}>Love</p>
                <p className={styles.badge}>Life</p>
            </div>
            <div className={styles.quoteContainer}>
                <q className={styles.quote}>A successful book is not made of what is in it, but what is left out of it.</q>
            </div>
            <div className={styles.actions}>
                <button className={styles.loveBtn}>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
                <p className={styles.loveNumbers}>500</p>
            </div>
        </div>
    </div>
  )
}
