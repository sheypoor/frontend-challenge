import React from 'react'
import Routes from './Routes'
import styles from './index.module.scss'

const Application: React.FC = () => {
  return (
    <div className={styles.container}>
      <Routes />
    </div>
  )
}

export default Application