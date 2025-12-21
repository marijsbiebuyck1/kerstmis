'use client'

import React from 'react'
import styles from '../page.module.css'
import Button from '../../components/Button.jsx'

export default function Brief() {
  return (
    <div className={`${styles.hero} ${styles.memoryPage}`}>
      <div className={styles.heroInner}>
        <h2 className={styles.subtitle}>Je hebt post!</h2>

  <img src="/brief.svg" alt="Brief illustratie" className={styles.briefIllustration} />

  {/* show the footer button already present */}
  <div className={styles.memoryFooter}>
          <Button label="Open de brief" onClick={() => {
            window.history.pushState({}, '', '/BriefOpen')
            window.dispatchEvent(new Event('popstate'))
          }} />
        </div>
      </div>
    </div>
  )
}
