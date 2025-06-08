"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function TermoUso() {
  const [step, setStep] = useState(0);
  const router = useRouter();

  const nextStep = () => {
    if (step === 0) {
      setStep(1);
    } else {
      router.push("/Cadastro"); // redireciona para a página Cadastro
    }
  };

  const backgroundSvg = step === 0 ? "/BackgroundVermelhoTermo.png" : "/BackgroundPretoTermo.png";
  const backgroundMobileSvg = step === 0 ? "/BackgroundVermelhoTermoMobile.svg" : "/BackgroundPretoTermoMobile.svg";
  const backgroundBase = step === 0 ? "/FundoVermelhoTermo.svg" : "/FundoPretoTermo.svg";

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-black font-poppins">
      <Image
        src={backgroundBase}
        alt="Fundo base"
        fill
        className="absolute object-cover w-full h-full z-0"
        priority
      />

      <picture className="absolute inset-0 w-full h-full z-10 flex items-center justify-center">
        <source srcSet={backgroundMobileSvg} media="(max-width: 640px)" />
        <img
          src={backgroundSvg}
          alt="Fundo"
          className="w-[90%] max-w-[1070px] h-auto object-contain"
        />
      </picture>

      <div className="relative z-20 w-full max-w-[700px] text-white text-center px-5 sm:px-6 py-6 sm:py-10 flex flex-col items-center justify-start">
        <div className="mb-6 w-full flex justify-center">
          <Image
            src="/LogoGeoResgate.svg"
            alt="Logo"
            width={560}
            height={100}
            className="sm:w-[250px] w-[380px] object-contain"
          />
        </div>

        {step === 0 ? (
          <div className="flex flex-col items-center space-y-6 text-pretty">
            <p className="text-[26px] font-medium">
              Antes de prosseguir, <span className="font-bold">leia com atenção</span>:
            </p>
            <p className="text-[18px] font-light leading-relaxed max-w-[660px] mx-auto">
              Este sistema é exclusivo para situações de emergência real, especialmente em casos de enchentes,
              deslizamentos ou isolamento em áreas de risco
            </p>
            <p className="text-[17px] font-semibold leading-relaxed max-w-[680px] mx-auto">
              Ao acionar o botão de emergência, suas informações e localização exata serão enviadas para uma
              central de apoio, que poderá acionar equipes de resgate.
            </p>
            <p className="text-[17px] font-light leading-relaxed max-w-[680px] mx-auto">
              O uso indevido deste recurso — por brincadeira ou em situações sem risco real — pode causar
              prejuízos graves, além de comprometer o atendimento de quem realmente precisa.
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-6 text-pretty">
            <p className="text-[24px] font-medium leading-tight">
              Ao prosseguir com o cadastro, <span className="font-bold">você declara estar ciente de que:</span>
            </p>
            <p className="text-[18px] font-semibold">O botão deve ser utilizado somente em caso de risco de vida;</p>
            <p className="text-[18px] font-semibold">Informações falsas ou alertas indevidos poderão ser investigados;</p>
            <p className="text-[18px] font-semibold">O uso consciente do sistema pode salvar vidas.</p>
            <p className="text-[15px] font-light text-gray-200 leading-snug max-w-[660px] mx-auto mt-3">
              Ao prosseguir com o cadastro, o usuário concorda com estes termos de uso e reconhece sua
              responsabilidade sobre a veracidade das informações prestadas e o uso consciente da plataforma.
            </p>
          </div>
        )}

        <div className="w-full max-w-[240px] mx-auto mt-10">
          <button
            onClick={nextStep}
            style={{
              backgroundImage: `url(${step === 0 ? "/BotaoProximo.png" : "/BotaoConcordo.png"})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "50px",
              border: "none",
              outline: "none",
              color: "transparent",
              fontSize: 0,
              cursor: "pointer",
            }}
            aria-label={step === 0 ? "Próximo" : "Eu concordo"}
          >
            {step === 0 ? "Próximo" : "Eu concordo"}
          </button>
        </div>
      </div>
    </div>
  );
}
