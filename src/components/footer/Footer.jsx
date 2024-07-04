import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Nextjs Blog Website</div>
      <div className={styles.text}>
        This is a personal project.
      </div>
    </div>
  )
}

export default Footer