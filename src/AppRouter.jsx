import React, { useEffect, useState } from 'react'
import Page from './app/page.jsx'
import NietOpendoen from './app/pages/NietOpendoen.jsx'
import MemoryGame from './app/pages/MemoryGame.jsx'
import Brief from './app/pages/brief.jsx'
import BriefOpen from './app/pages/BriefOpen.jsx'
import Maretak from './app/pages/maretak.jsx'
import MaretakOne from './app/pages/maretak-1.jsx'
import MaretakTwo from './app/pages/maretak-2.jsx'
import MaretakThree from './app/pages/maretak-3.jsx'  
import MaretakFour from './app/pages/maretak-4.jsx'
import MaretakFive from './app/pages/maretak-5.jsx'
import Einde from './app/pages/Einde.jsx'


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
  if (path === '/brief') return <Brief />
  if (path === '/BriefOpen' || path === '/briefopen' || path === '/brief-open') return <BriefOpen />
  if (path === '/maretak' || path === '/Maretak') return <Maretak />
  if (path === '/maretak-1' || path === '/Maretak-1') return <MaretakOne />
  if (path === '/maretak-2' || path === '/Maretak-2') return <MaretakTwo />
  if (path === '/maretak-3' || path === '/Maretak-3') return <MaretakThree />
  if (path === '/maretak-4' || path === '/Maretak-4') return <MaretakFour />
  if (path === '/maretak-5' || path === '/Maretak-5') return <MaretakFive />
  if (path === '/Einde' || path === '/Einde') return <Einde />
  return <Page />
}
