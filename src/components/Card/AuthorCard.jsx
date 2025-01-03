import React from 'react'
import authorImg3 from '../../assets/authorImg3.jpg'
import authorImg4 from '../../assets/authorImg4.jfif'
import styles from './AuthorCard.module.css'

export const AuthorCard = () => {
  return (
    <div className={styles.card}>
        <div className={styles.container}>
            <img src={authorImg3} alt="jack london" className={styles.authorImg} />
            <p className={styles.authorName}>Jack London</p>
            <div className={styles.badgeContainer}>
                <span className={styles.authorQuotes}>4854 quotes</span>
                <span className={styles.authorLikes}>54000 likes</span>
            </div>
        </div>
    </div>
  )
}
