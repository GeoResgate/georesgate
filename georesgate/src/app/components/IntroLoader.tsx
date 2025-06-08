'use client'

import { useEffect, useState } from 'react'

export default function IntroLoader() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => prev + 1)
    }, 3000)

    if (step >= 2) clearInterval(interval)

    return () => clearInterval(interval)
  }, [step])

  const background = step < 2 ? '/BackgroundPreto.svg' : '/BackgroundVermelho.svg'

  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="w-full h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center transition-all duration-500"
    >
      {step === 0 && (
        <div className="w-16 sm:w-20 md:w-24 lg:w-28 animate-custom-spin">
          <img
            src="/Logo.svg"
            alt="Logo animada"
            className="w-full h-auto"
          />
        </div>
      )}

      {step === 1 && (
        <img
          src="/GeoResgate.svg"
          alt="GeoResgate"
          className="w-72 sm:w-80 lg:w-96 h-auto animate-fadein"
        />
      )}

      {step === 2 && (
        <img
          src="/BemVindo.svg"
          alt="Bem-vindo"
          className="w-72 sm:w-80 lg:w-96 h-auto animate-fadein"
        />
      )}
    </div>
  )
}
