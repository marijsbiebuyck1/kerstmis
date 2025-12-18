import React, { useEffect, useState } from 'react'
import Page from './app/page.jsx'
import NietOpendoen from './app/pages/NietOpendoen.jsx'
import MemoryGame from './app/pages/MemoryGame.jsx'

export default function AppRouter() {
  const normalize = p => (p || '/').replace(/\/+$|^\/+/g, '/').replace(/\/$/, '') || '/'
  const [path, setPath] = useState(typeof window !== 'undefined' ? normalize(window.location.pathname) : '/')

  useEffect(() => {
    const onPop = () => setPath(normalize(window.location.pathname))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  if (path === '/niet-opendoen') return <NietOpendoen />
  if (path === '/memory') return <MemoryGame />
  return <Page />
}
