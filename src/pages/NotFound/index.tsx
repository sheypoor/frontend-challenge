import React from 'react'
import styles from './NotFound.module.scss'

const NotFound: React.FC = () => {
    return (
        <div className={styles.container}>
            <span>404 - Page Not Found!</span>
        </div>
    )
}

export default NotFound