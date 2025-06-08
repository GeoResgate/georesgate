"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Processando() {
  const router = useRouter();
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // Fade-out antes de sair
    const fadeOutTimer = setTimeout(() => {
      setHide(true);
    }, 4800); // ativa 200ms antes da troca

    // Redireciona para a tela de confirmação
    const redirectTimer = setTimeout(() => {
      router.push("/Confirmado");
    }, 5000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <div
      className={`relative min-h-screen w-full bg-no-repeat bg-cover bg-center font-poppins transition-opacity duration-500 ${
        hide ? "opacity-0" : "opacity-100"
      }`}
      style={{ backgroundImage: "url('/background-processando.png')" }}
    >
      {/* Texto centralizado verticalmente */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-white text-5xl sm:text-6xl font-semibold animate-pulse">
          Processando...
        </h1>
      </div>

      {/* Logo bem embaixo */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Image
          src="/logo-processando.png"
          alt="Logo GeoResgate"
          width={250}
          height={60}
          className="w-[180px] sm:w-[250px]"
        />
      </div>
    </div>
  );
}
