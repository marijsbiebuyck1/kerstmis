'use client'

import React from 'react'
import styles from '../page.module.css'
import Button from '../../components/Button.jsx'

export default function Maretak() {
	return (
		<div className={`${styles.hero} ${styles.memoryPage}`}>
			<div className={styles.heroInner}>
				<h2 className={styles.subtitle}>Oh ow een maretak</h2>
				<p className={styles.lead}>Zorg dat we terug samenkomen door op de knop te duwen!</p>

				<div className={styles.maretakPeople}>
					<img src="/MARIJS.svg" alt="Marijs" className={styles.maretLeft3} />
					<img src="/maretak.jpg.svg" alt="maretak" className={styles.maretakIllustration} />
					<img src="/THIBAULT.svg" alt="Thibault" className={styles.maretRight3} />
				</div>

				<div className={styles.memoryFooter}>
					<Button label="KUSSEN!!" onClick={() => {
						window.history.pushState({}, '', '/maretak-4')
						window.dispatchEvent(new Event('popstate'))
					}} />
				</div>
			</div>
		</div>
	)
}
