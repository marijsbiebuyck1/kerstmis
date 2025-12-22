'use client'

import React from 'react'
import styles from '../page.module.css'
import Button from '../../components/Button.js'

export default function NietOpendoen() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.title}>hehe</h1>

        <p className={styles.lead}>
          Me waiting for a kiss...
        </p>

        {/* Put sip.jpeg in your `public/` folder so it's served from /sip.jpeg */}
        <img src="/monkey.jpeg" alt="kiss" style={{ display: 'block', margin: '18px auto', maxWidth: '320px', width: '70%' }} />

        <div style={{ marginTop: 18 }}>
          <Button label="Terug" onClick={() => window.history.back()} />
        </div>

      </div>
    </div>
  )
}
