import React from 'react'
import './Button.css'

/**
 * SecondaryButton: red outlined button with red text.
 * Props:
 * - label?: string - overrides children when provided
 * - children?: ReactNode - fallback content
 * - onClick?: () => void
 * - className?: string
 */
export default function SecondaryButton({ label, children = 'Sluiten', onClick, className = '', ...props }) {
  const content = label != null ? label : children

  return (
    <button
      type="button"
      className={`kc-button kc-button--secondary ${className}`.trim()}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  )
}
