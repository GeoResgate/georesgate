"use client";

import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [pedidoEnviado, setPedidoEnviado] = useState(false);

  const handleClick = () => {
    setPedidoEnviado(true);
  };

  const handleCancelar = () => {
    setPedidoEnviado(false);
  };

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center font-poppins"
      style={{ backgroundImage: "url('/background-principal.png')" }}
    >
      {/* Topo com logo e acessar conta */}
      <div className="flex justify-between items-center px-6 py-4">
        <Image
          src="/logo-principal.png"
          alt="Logo GeoResgate"
          width={180}
          height={50}
        />
        <Image
          src="/acessar-conta.png"
          alt="Acessar Conta"
          width={40}
          height={40}
          className="cursor-pointer"
        />
      </div>

      {/* Alerta sempre visível */}
      <div className="flex flex-col items-center justify-center mt-12 text-center px-4">
        <Image
          src="/icone-atencao.png"
          alt="Ícone de Atenção"
          width={40}
          height={40}
          className="mb-2"
        />
        <p className="text-white text-lg sm:text-xl font-medium max-w-[600px]">
          Apenas use este botão em <br />
          <span className="font-bold">caso de risco real à sua vida.</span>
        </p>
      </div>

      {/* Botão de emergência */}
      {!pedidoEnviado && (
        <div className="flex flex-col items-center justify-center mt-12 relative z-10">
          <button
            onClick={handleClick}
            className="relative transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/botao-emergencia.png"
              alt="Botão de Emergência"
              width={420}
              height={420}
            />
            <span className="absolute inset-0 flex items-center justify-center text-white text-xl sm:text-3xl font-bold text-center px-6">
              PRECISO DE AJUDA AGORA
            </span>
          </button>
        </div>
      )}

      {/* Pedido enviado + Cancelar */}
      {pedidoEnviado && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 gap-6 mt-10">
          <div className="animate-fadeZoomIn">
            <Image
              src="/pedido-enviado.png"
              alt="Pedido Enviado"
              width={420}
              height={420}
            />
          </div>
          <button
            onClick={handleCancelar}
            className="text-white text-base hover:opacity-80 transition-all duration-200"
          >
            Cancelar
          </button>
        </div>
      )}

      {/* Animação fade + zoom */}
      <style jsx global>{`
        @keyframes fadeZoomIn {
          0% {
            opacity: 0;
            transform: scale(0.6);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeZoomIn {
          animation: fadeZoomIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
