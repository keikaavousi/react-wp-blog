import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Navigation.module.css'

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/search">Search</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;
