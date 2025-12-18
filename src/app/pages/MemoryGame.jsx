'use client'

import React, { useState, useEffect } from 'react'
import styles from '../page.module.css'
import MemoryCard from '../../components/MemoryCard.js'
import Button from '../../components/Button.jsx'

const IMAGES = ['baby.jpeg','lebron.JPG','locals.JPG','muis.jpeg','voorlinden.JPG','zee.jpg']

function shuffle(array) {
  const a = array.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function MemoryGame({ onFinish } = {}) {
  // create doubled array of 12
  const [cards, setCards] = useState(() => {
    const pairs = IMAGES.concat(IMAGES)
    return shuffle(pairs).map((img, idx) => ({ id: idx, image: img, flipped: false, matched: false }))
  })

  const [first, setFirst] = useState(null)
  const [second, setSecond] = useState(null)
  const [locked, setLocked] = useState(false)

  useEffect(() => {
    if (first == null || second == null) return
    // read current cards to avoid effect dependency on cards
    const c1 = cards[first]
    const c2 = cards[second]
    if (c1.image === c2.image) {
      // mark matched
      setTimeout(() => {
        setCards(prev => prev.map((c, i) => i === first || i === second ? { ...c, matched: true } : c))
        setFirst(null)
        setSecond(null)
      }, 0)
      return
    }
    // lock via a timeout tick to avoid synchronous setState during effect
    const lockT = setTimeout(() => setLocked(true), 0)
    const t = setTimeout(() => {
      setCards(prev => prev.map((c,i) => i===first||i===second ? { ...c, flipped: false } : c))
      setFirst(null)
      setSecond(null)
      setLocked(false)
    }, 800)
    return () => { clearTimeout(lockT); clearTimeout(t) }
  }, [first, second, cards])

  function handleCardClick(index) {
    if (locked) return
    const card = cards[index]
    if (card.flipped || card.matched) return
    setCards(prev => prev.map((c,i) => i===index ? { ...c, flipped: true } : c))
    if (first == null) setFirst(index)
    else if (second == null) setSecond(index)
  }

  return (
    <div className={`${styles.hero} ${styles.memoryPage}`}>
      <div className={styles.heroInner}>
  <h2 className={styles.subtitle}>Memory tijd</h2>
        <p className={styles.lead}>Vind de juiste paren en denk nog eens terug aan de leuke dingen die we al samen hebben gedaan xoxo</p>

        <div className={styles.memoryGrid}>
          {cards.map((card, i) => (
            <div className={styles.memoryCardContainer} key={card.id}>
              <MemoryCard
                width={'100%'}
                height={100}
                backImage={card.image}
                isFlipped={card.flipped || card.matched}
                onRequestFlip={() => handleCardClick(i)}
              />
            </div>
          ))}
        </div>
        {cards.every(c => c.matched) && (
          <div className={styles.memoryFooter}>
            <Button label="Volgende" onClick={() => {
              if (typeof onFinish === 'function') return onFinish()
              window.history.pushState({}, '', '/')
              window.dispatchEvent(new Event('popstate'))
            }} />
          </div>
        )}
      </div>
    </div>
  )
}
