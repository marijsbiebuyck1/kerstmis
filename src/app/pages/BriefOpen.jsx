'use client'

import React from 'react'
import styles from '../page.module.css'
import Button from '../../components/Button.jsx'
import BriefCard from '../../components/BriefCard.js'

export default function Brief() {
  return (
    <div className={`${styles.hero} ${styles.memoryPage}`}>
      <div className={styles.heroInner}>
        <h2 className={styles.subtitle}>Je hebt post!</h2>

        <BriefCard />

        {/* show the footer button already present */}
        <div className={styles.memoryFooter}>
          <Button label="Volgende" onClick={() => {
            window.history.pushState({}, '', '/')
            window.dispatchEvent(new Event('popstate'))
          }} />
        </div>
      </div>
    </div>
  )
}
