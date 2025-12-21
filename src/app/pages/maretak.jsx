 'use client'

 import React from 'react'
 import styles from '../page.module.css'
 import Button from '../../components/Button.jsx'

 export default function Maretak() {
  return (
  <div className={`${styles.hero} ${styles.maretakPage}`}>
      <div className={styles.heroInner}>
        <h2 className={styles.subtitle}>Oh ow een maretak</h2>
        <p className={styles.lead}>Zorg dat we terug samenkomen door op de knop te duwen!</p>

        <img src="/maretak.svg" alt="maretak" className={styles.maretakIllustration} />

        <div className={styles.maretakPeople}>
          <img src="/MARIJS.svg" alt="Marijs" className={styles.maretLeft} />
          <img src="/THIBAULT.svg" alt="Thibault" className={styles.maretRight} />
        </div>

        <div className={styles.memoryFooter}>
          <Button label="KUSSEN KUSSEN!" onClick={() => {
            window.history.pushState({}, '', '/')
            window.dispatchEvent(new Event('popstate'))
          }} />
        </div>
      </div>
    </div>
  )
 }
