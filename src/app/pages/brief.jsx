'use client'

import React from 'react'
import styles from '../page.module.css'
import Button from '../../components/Button.jsx'

export default function Brief() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.title}>Brief</h1>
  <p className={styles.lead}>Dit is je brief — lees het rustig en klik op Volgende wanneer je klaar bent.</p>

  <img src="/brief.svg" alt="Brief illustratie" className={styles.briefIllustration} />

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
