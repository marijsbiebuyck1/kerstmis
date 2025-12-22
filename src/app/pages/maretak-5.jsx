'use client'

import React from 'react'
import styles from '../page.module.css'
import Button from '../../components/Button.jsx'

export default function Maretak() {
	return (
		<div className={`${styles.hero} ${styles.memoryPage}`}>
			<div className={styles.heroInner}>
				<h2 className={styles.subtitle}>Joepie</h2>
				<p className={styles.lead}>We zijn terug samen, <br></br>kus en knuf xxx!</p>

				<div className={styles.maretakPeople}>
					{/* Combined illustration: replace separate characters + mistletoe */}
					<img src="/illustratie-samen.svg" alt="Samen illustratie" className={styles.maretTogether} />
				</div>

				<div className={styles.memoryFooter}>
					<Button label="Naar einde" onClick={() => {
						window.history.pushState({}, '', '/Einde')
						window.dispatchEvent(new Event('popstate'))
					}} />
				</div>
			</div>
		</div>
	)
}
