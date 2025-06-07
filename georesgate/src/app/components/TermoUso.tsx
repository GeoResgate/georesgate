"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  onContinue?: () => void;
};

export default function TermoUso({ onContinue }: Props) {
  const [step, setStep] = useState(0);
  const router = useRouter();

  const nextStep = () => {
    if (step === 0) {
      setStep(1);
    } else {
      router.push("/cadastro"); // substitua por sua rota final desejada
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-black font-poppins text-white">
      {/* 🔴 Fundo Vermelho */}
      <Image
        src="/background-vermelho-termo.png"
        alt="Fundo"
        fill
        className="absolute object-cover w-full h-full z-0"
        priority
      />

      {/* ⚫️ Container preto (imagem responsiva) */}
      <Image
        src="/container-preto-termo.png"
        alt="Container"
        width={912}
        height={768}
        className="absolute z-10 w-[90%] max-w-[912px] h-auto object-contain"
        priority
      />

      {/* Logo */}
      <div className="absolute top-[155px] sm:top-[70px] left-1/2 transform -translate-x-1/2 z-30">
        <Image
          src="/logo-termo.svg"
          alt="Logo GeoResgate"
          width={280}
          height={100}
          className="w-auto h-[44px] sm:h-[48px] object-contain"
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-20 w-full max-w-[680px] text-center px-6 pt-[140px] sm:pt-[155px] flex flex-col items-center">
        {step === 0 ? (
          <div className="flex flex-col items-center space-y-6">
            <p className="text-[18px] sm:text-[20px] font-semibold leading-snug text-white">
              Antes de prosseguir, <span className="font-bold">leia com atenção:</span>
            </p>

            <p className="text-white text-center text-[15px] sm:text-[16px] md:text-[17px] font-normal leading-relaxed max-w-[660px]">
              Este sistema é exclusivo para situações de emergência real, especialmente em casos de enchentes,
              deslizamentos ou isolamento em áreas de risco.
            </p>

            <ul className="text-left font-medium text-[15px] sm:text-[16px] text-white leading-relaxed space-y-5 max-w-[660px]">
              <li className="flex gap-2 items-start">
                <span className="text-xl font-bold text-white">•</span>
                <span>
                  Ao acionar o botão de emergência, suas informações e localização exata serão enviadas para uma
                  central de apoio, que poderá acionar equipes de resgate.
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-xl font-bold text-white">•</span>
                <span>
                  O uso indevido deste recurso — por brincadeira ou em situações sem risco real — pode causar
                  prejuízos graves, além de comprometer o atendimento de quem realmente precisa.
                </span>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-6">
            <p className="text-[18px] sm:text-[20px] font-semibold leading-snug text-white">
              Ao prosseguir com o cadastro, você declara estar ciente de que:
            </p>

            <ul className="text-left font-medium text-[15px] sm:text-[16px] text-white leading-relaxed space-y-5 max-w-[660px]">
              <li className="flex gap-2 items-start">
                <span className="text-xl font-bold text-white">•</span>
                <span>O botão deve ser utilizado somente em caso de risco de vida;</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-xl font-bold text-white">•</span>
                <span>Informações falsas ou alertas indevidos poderão ser investigadas;</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-xl font-bold text-white">•</span>
                <span>O uso consciente do sistema pode salvar vidas.</span>
              </li>
            </ul>

            <p className="text-[15px] sm:text-[15px] text-white leading-relaxed max-w-[640px] mt-2">
              Ao prosseguir com o cadastro, o usuário concorda com estes termos de uso e reconhece sua
              responsabilidade sobre a veracidade das informações prestadas e o uso consciente da plataforma.
            </p>
          </div>
        )}

        {/* Botão */}
        <div className="w-full max-w-[220px] mx-auto mt-12 sm:mt-16">
          <button
            onClick={nextStep}
            className="w-full h-[50px] bg-[url('/botao-proximo.svg')] bg-contain bg-center bg-no-repeat text-white text-[18px] font-bold font-poppins"
            style={{ backgroundColor: "transparent", border: "none", outline: "none" }}
          >
            {step === 0 ? "Próximo" : "Eu concordo"}
          </button>
        </div>
      </div>
    </div>
  );
}
