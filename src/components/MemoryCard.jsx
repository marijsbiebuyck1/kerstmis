import React, { useState } from 'react'
import './MemoryCard.css'

/**
 * Interactive MemoryCard component that flips to show a back image when clicked.
 * Props:
 * - width, height: size (numbers or strings)
 * - fill: stroke/fill color for front SVG
 * - className: extra class names
 * - title: accessibility title for front
 * - backImages: array of image filenames (relative to public/, e.g. ['baby.jpeg','lebron.JPG'])
 * - randomize: boolean - if true pick a random back image on first flip
 */
export default function MemoryCard({
  // let the grid/container determine size by default; use 100% to fill the cell
  width = '100%',
  height = '100%',
  
  className = '',
  title = 'Memory card',
  backImage = null,
  isFlipped = undefined,
  onRequestFlip = undefined,
  ...props
}) {
  const [internalFlipped, setInternalFlipped] = useState(false)
  const flipped = typeof isFlipped === 'boolean' ? isFlipped : internalFlipped

  function handleFlip() {
    if (typeof onRequestFlip === 'function') return onRequestFlip()
    setInternalFlipped(s => !s)
  }

  const imgSrc = backImage ? (backImage.startsWith('/') ? backImage : `/${backImage}`) : null

  return (
    <button
      type="button"
      className={`mc-card ${flipped ? 'mc-card--flipped' : ''} ${className}`.trim()}
      onClick={handleFlip}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleFlip() } }}
      aria-pressed={flipped}
      {...props}
    >
      <div className="mc-card__inner" style={{ width, height }}>
        <div className="mc-card__face mc-card__face--front" style={{ position: 'relative' }}>
          <div style={{ width: '100%', height: '100%', background: '#222B62', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
          {/* centered heart overlay on the front blue face */}
          <img src="/hartje.svg" alt="hartje" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', pointerEvents: 'none' }} />
        </div>
        <div className="mc-card__face mc-card__face--back">
          {imgSrc ? (
            <img src={imgSrc} alt={title + ' back'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', padding: 8 }}>No image</div>
          )}
        </div>
      </div>
    </button>
  )
}
