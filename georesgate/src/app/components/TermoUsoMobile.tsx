"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function TermoUsoMobile() {
  const [step, setStep] = useState(0);
  const router = useRouter();

  const nextStep = () => {
    if (step === 0) {
      setStep(1);
    } else {
      router.push("/Cadastro"); // Redireciona para a página de cadastro
    }
  };

  const backgroundBase = step === 0 ? "/FundoVermelhoTermo.svg" : "/FundoPretoTermo.svg";
  const backgroundMobileSvg = step === 0 ? "/BackgroundVermelhoTermoMobile.svg" : "/BackgroundPretoTermoMobile.svg";

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-black font-poppins sm:hidden">
      {/* Fundo principal */}
      <Image
        src={backgroundBase}
        alt="Fundo base"
        fill
        className="absolute object-cover w-full h-full z-0"
        priority
      />

      {/* SVG Mobile */}
      <Image
        src={backgroundMobileSvg}
        alt="Fundo Mobile"
        fill
        className="object-contain z-10"
      />

      <div className="relative z-20 w-full text-white text-center px-6 py-6 flex flex-col items-center justify-start">
        {/* LOGO */}
        <div className="mb-6 w-full flex justify-center">
          <Image
            src="/LogoGeoResgate.svg"
            alt="Logo"
            width={240}
            height={80}
            className="object-contain"
          />
        </div>

        {/* TEXTO */}
        {step === 0 ? (
          <div className="flex flex-col items-center space-y-5 text-pretty max-w-[320px]">
            <p className="text-[20px] font-medium leading-tight">
              Antes de prosseguir, <span className="font-bold">leia com atenção</span>:
            </p>

            <p className="text-[15px] font-light leading-relaxed">
              Este sistema é exclusivo para situações de emergência real, especialmente em casos de enchentes,
              deslizamentos ou isolamento em áreas de risco.
            </p>

            <p className="text-[15px] font-medium leading-relaxed">
              Ao acionar o botão de emergência, suas informações e localização exata serão enviadas para uma
              central de apoio, que poderá acionar equipes de resgate.
            </p>

            <p className="text-[15px] font-light leading-relaxed">
              O uso indevido deste recurso — por brincadeira ou em situações sem risco real — pode causar prejuízos
              graves, além de comprometer o atendimento de quem realmente precisa.
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-5 text-pretty max-w-[320px]">
            <p className="text-[18px] font-medium leading-tight">
              Ao prosseguir com o cadastro, <span className="font-bold">você declara estar ciente de que:</span>
            </p>

            <p className="text-[15px] font-semibold leading-relaxed">
              O botão deve ser utilizado somente em caso de risco de vida;
            </p>
            <p className="text-[15px] font-semibold leading-relaxed">
              Informações falsas ou alertas indevidos poderão ser investigados;
            </p>
            <p className="text-[15px] font-semibold leading-relaxed">
              O uso consciente do sistema pode salvar vidas.
            </p>

            <p className="text-[13px] font-light leading-snug text-gray-200 mt-3">
              Ao prosseguir com o cadastro, o usuário concorda com estes termos de uso e reconhece sua responsabilidade
              sobre a veracidade das informações prestadas e o uso consciente da plataforma.
            </p>
          </div>
        )}

        {/* BOTÃO */}
        <div className="w-full max-w-[240px] mx-auto mt-10">
          <button
            onClick={nextStep}
            style={{
              backgroundImage: `url('${step === 0 ? "/BotaoProximo.png" : "/BotaoConcordo.png"}')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
              height: "50px",
              width: "100%",
              color: "transparent",
              border: "none",
              outline: "none",
              cursor: "pointer",
              fontSize: 0
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
