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
                <QuoteCard  quote="The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle."/>
                <QuoteCard  quote="Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. Remember, the journey of a thousand miles begins with a single step. It’s not about how fast you go but how steady you are in pursuing your goals and dreams to create a better future."/>
                <QuoteCard  quote="The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle."/>
                <QuoteCard  quote='A successful book is not made of what is in it, but what is left out of it.'/>
                <QuoteCard  quote="The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle."/>
                <QuoteCard  quote='A successful book is not made of what is in it, but what is left out of it.'/>
                <QuoteCard  quote="The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle."/>
                <QuoteCard  quote='A successful book is not made of what is in it, but what is left out of it.'/>
            </section>
        </div>
        
    </main>
  )
}
