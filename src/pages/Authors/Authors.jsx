import React from 'react'
import styles from './Authors.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faBorderAll, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { AuthorCard } from '../../components/Card/AuthorCard'

export const Authors = () => {
  return (
    <main className={styles.container}>
            <header>
                <h1 className={styles.headerTitle}>Explore Authors</h1>
                <p className={styles.headerParagraph}>Discover the words that shaped minds and moved hearts, crafted by history's greatest authors.</p>
                <div className={styles.headerContent}>
                    <div className={styles.search}>
                        <p>Search</p>
                        <form className={styles.inputGroup}>
                            <input className={styles.heroSearch} type="text" placeholder="Search for quotes, authors, or topics..." />
                            <button className={styles.heroBtn} type='submit'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                        </form>
                    </div>
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
            <section className={styles.authors}>
                <AuthorCard />
                <AuthorCard />
                <AuthorCard />
                <AuthorCard />
                <AuthorCard />
                <AuthorCard />
                <AuthorCard />
                <AuthorCard />
                <AuthorCard />
                <AuthorCard />
            </section>
            
        </main>
  )
}
