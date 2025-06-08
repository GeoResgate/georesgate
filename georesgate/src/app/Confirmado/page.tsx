"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setShow(true);
    }, 200);

    const timeout2 = setTimeout(() => {
      router.push("/components/TelaPrincipal");
    }, 5000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [router]);

  return (
    <div
      className="relative min-h-screen w-full bg-no-repeat bg-cover bg-center font-poppins"
      style={{ backgroundImage: "url('/background-carregamento.png')" }}
    >
      {/* Texto animado com posição ajustada */}
      <div
        className={`absolute top-[40%] left-1/2 -translate-x-1/2 text-center transition-all duration-1000 ease-in-out ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-white text-4xl sm:text-6xl font-semibold leading-snug">
          Cadastro realizado <br /> com sucesso!
        </h1>
      </div>

      {/* Logo posicionada embaixo */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Image
          src="/logo-cadastro.png"
          alt="Logo GeoResgate"
          width={250}
          height={60}
          className="w-[200px] sm:w-[250px]"
        />
      </div>
    </div>
  );
}
