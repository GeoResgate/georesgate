"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import TermoUso from "./TermoUso";

export default function IntroAnimation() {
  const [step, setStep] = useState(0);
  const [mostrarTermo, setMostrarTermo] = useState(false);

  useEffect(() => {
    if (step < 3) {
      const timer = setTimeout(() => setStep((prev) => prev + 1), 3000);
      return () => clearTimeout(timer);
    } else {
      // Espera mais 3 segundos após o último slide para mostrar o termo
      const delay = setTimeout(() => setMostrarTermo(true), 3000);
      return () => clearTimeout(delay);
    }
  }, [step]);

  const backgrounds = [
    "bg-[url('/background-preto.png')]",
    "bg-[url('/background-preto.png')]",
    "bg-[url('/background-preto.png')]",
    "bg-[url('/background-vermelho.png')]",
  ];

  const images = [
    {
      src: "/carregamento-1.svg",
      alt: "Ícone",
      className: "w-24 sm:w-28 md:w-32 lg:w-40 animate-custom-spin",
    },
    {
      src: "/carregamento-3.svg",
      alt: "Logo Ícone",
      className: "w-24 sm:w-28 md:w-32 lg:w-40 animate-fade-in-up",
    },
    {
      src: "/logo-escrita.svg",
      alt: "GeoResgate",
      className: "w-[300px] sm:w-[400px] md:w-[500px] animate-fade-in-up",
    },
    {
      src: "/bem-vindo.svg",
      alt: "Bem-vindo!",
      className: "w-[400px] sm:w-[500px] md:w-[600px] animate-fade-in-up",
    },
  ];

  if (mostrarTermo) {
    return <TermoUso onContinue={() => console.log("✅ Termo aceito!")} />;
  }

  return (
    <div
      className={`w-full h-screen flex items-center justify-center bg-cover bg-no-repeat transition-all duration-700 ease-in-out ${backgrounds[step]}`}
    >
      {step < images.length && (
        <Image
          src={images[step].src}
          alt={images[step].alt}
          width={800}
          height={800}
          className={images[step].className}
          priority
        />
      )}
    </div>
  );
}
