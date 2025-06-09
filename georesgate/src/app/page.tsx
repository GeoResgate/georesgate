'use client'

import { useEffect, useState } from 'react'
import IntroLoader from './IntroLoader/IntroLoader'
import TermoUso from './Termo/TermoUso'
import TermoUsoMobile from './TermoMobile/TermoUsoMobile'

export default function Home() {
  const [showTermo, setShowTermo] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTermo(true)
    }, 9000)

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 640)
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  // Fase 1 — Animação de carregamento
  if (!showTermo) {
    return <IntroLoader />
  }

  // Fase 2 — Termo de uso (mobile ou desktop)
  return isMobile ? <TermoUsoMobile /> : <TermoUso />
}
