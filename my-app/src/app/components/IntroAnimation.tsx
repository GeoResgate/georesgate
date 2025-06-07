"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function IntroAnimation() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const images = [
    {
      src: "/carregamento-1.svg",
      background: "/background-preto.png",
      alt: "Logo 1",
      animation: "spin-animation",
    },
    {
      src: "/carregamento-2.svg",
      background: "/background-preto.png",
      alt: "Logo 2",
      animation: "fade-in",
    },
    {
      src: "/carregamento-3.svg",
      background: "/background-preto.png",
      alt: "Logo 3",
      animation: "fade-in",
    },
    {
      src: "/logo-escrita.svg",
      background: "/background-preto.png",
      alt: "Logo Escrita",
      animation: "fade-in",
    },
    {
      src: "/bem-vindo.svg",
      background: "/background-vermelho.png",
      alt: "Bem-vindo",
      animation: "fade-in",
    },
  ];

  if (step >= images.length) return null;

  const current = images[step];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fundo dinâmico */}
      <Image
        src={current.background}
        alt="Fundo"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Imagem central animada */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <Image
          src={current.src}
          alt={current.alt}
          width={300}
          height={300}
          priority
          className={current.animation}
        />
      </div>
    </div>
  );
}
