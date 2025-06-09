"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function IntroLoader() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => prev + 1);
    }, 3000);

    if (step >= 2) clearInterval(interval);

    return () => clearInterval(interval);
  }, [step]);

  const background = step < 2 ? "/BackgroundPreto.svg" : "/BackgroundVermelho.svg";

  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="w-full h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center transition-all duration-500"
    >
      {step === 0 && (
        <div className="w-16 sm:w-20 md:w-24 lg:w-28 h-16 sm:h-20 md:h-24 lg:h-28 relative animate-custom-spin">
          <Image
            src="/Logo.svg"
            alt="Logo animada"
            fill
            className="object-contain"
            priority
          />
        </div>
      )}

      {step === 1 && (
        <div className="relative w-72 h-28">
          <Image
            src="/GeoResgate.svg"
            alt="GeoResgate"
            fill
            className="object-contain animate-fadein"
            priority
          />
        </div>
      )}

      {step === 2 && (
        <div className="relative w-72 sm:w-80 lg:w-96 h-24 sm:h-28 md:h-32 lg:h-36">
          <Image
            src="/BemVindo.svg"
            alt="Bem-vindo"
            fill
            className="object-contain animate-fadein"
            priority
          />
        </div>
      )}
    </div>
  );
}
