import React from 'react'
import styles from './Quotes.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faBorderAll, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { QuoteCard } from '../../components/Card/QuoteCard'

export const Quotes = () => {
  return (
    <main className={styles.container}>
        <header>
            <h1 className={styles.headerTitle}>Explore Quotes</h1>
            <div className={styles.headerContent}>
                <p className={styles.headerParagraph}>Discover the words that shaped minds and moved hearts, crafted by history's greatest authors.</p>
                <div className={styles.filters}>
                    <button className={styles.filterBtn}>
                        <FontAwesomeIcon icon={faList} />
                    </button>
                    <button className={styles.filterBtn}>
                        <FontAwesomeIcon icon={faBorderAll} />
                    </button>
                    <div className={styles.sortBy}>
                        <p>Sort By</p>
                        <select className={styles.select}>
                            <option selected>Most Popular</option>
                            <option>Latest</option>
                            <option>Oldest</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
        <div className={styles.content}>
            <aside>
                <div className={styles.search}>
                    <p>Search</p>
                    <form className={styles.inputGroup}>
                        <input className={styles.heroSearch} type="text" placeholder="Search for quotes, authors, or topics..." />
                        <button className={styles.heroBtn} type='submit'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    </form>
                </div>
                <div className={styles.categories}>
                    <p>Categories</p>
                    <div className={styles.categoriesList}>
                        <button className={styles.categoriesBtn}>Love</button>
                        <button className={styles.categoriesBtn}>Life</button>
                        <button className={styles.categoriesBtn}>Motivation</button>
                        <button className={styles.categoriesBtn}>Hope</button>
                        <button className={styles.categoriesBtn}>Happiness</button>
                        <button className={styles.categoriesBtn}>Friendship</button>
                        <button className={styles.categoriesBtn}>Success</button>
                        <button className={styles.categoriesBtn}>Wisdom</button>
                        <button className={styles.categoriesBtn}>Courage</button>
                        <button className={styles.categoriesBtn}>Humor</button>
                    </div>
                </div>
                
            </aside>
            <section className={styles.quotes}>
                <QuoteCard />
                <QuoteCard />
                <QuoteCard />
                <QuoteCard />
                <QuoteCard />
                <QuoteCard />
                <QuoteCard />
                <QuoteCard />
                <QuoteCard />
                <QuoteCard />
                <QuoteCard />
                <QuoteCard />
            </section>
        </div>
        
    </main>
  )
}
