"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [pedidoEnviado, setPedidoEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    setEnviando(true);

    try {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const alerta = {
          usuario: { id: 1 }, // 🔁 Substitua pelo ID real do usuário
          localizacao: `Lat: ${latitude}, Lon: ${longitude}`,
          status: "EMERGENCIA",
          dataHora: new Date().toISOString(),
        };

        const response = await fetch("https://java-6mlo.onrender.com/alerta", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(alerta),
        });

        if (response.ok) {
          setPedidoEnviado(true);
        } else {
          console.error(await response.text());
          alert("Erro ao enviar alerta.");
        }
      }, (err) => {
        console.error(err);
        alert("Erro ao obter localização.");
      });
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar alerta.");
    } finally {
      setEnviando(false);
    }
  };

  const handleCancelar = () => {
    setPedidoEnviado(false);
  };

  const handleAcessarConta = () => {
    router.push("/Cadastrado");
  };

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center font-poppins"
      style={{ backgroundImage: "url('/background-principal.png')" }}
    >
      {/* Topo */}
      <div className="flex justify-between items-center px-6 py-4">
        <Image src="/logo-principal.png" alt="Logo GeoResgate" width={180} height={50} />
        <Image
          src="/acessar-conta.png"
          alt="Acessar Conta"
          width={40}
          height={40}
          className="cursor-pointer"
          onClick={handleAcessarConta}
        />
      </div>

      {/* Alerta */}
      <div className="flex flex-col items-center justify-center mt-12 text-center px-4">
        <Image src="/icone-atencao.png" alt="Ícone de Atenção" width={40} height={40} className="mb-2" />
        <p className="text-white text-lg sm:text-xl font-medium max-w-[600px]">
          Apenas use este botão em <br />
          <span className="font-bold">caso de risco real à sua vida.</span>
        </p>
      </div>

      {/* Botão Emergência */}
      {!pedidoEnviado && !enviando && (
        <div className="flex flex-col items-center justify-center mt-12 relative z-10">
          <button onClick={handleClick} className="relative transition-transform duration-300 hover:scale-105">
            <Image src="/botao-emergencia.png" alt="Botão de Emergência" width={420} height={420} />
            <span className="absolute inset-0 flex items-center justify-center text-white text-xl sm:text-3xl font-bold text-center px-6">
              PRECISO DE AJUDA AGORA
            </span>
          </button>
        </div>
      )}

      {/* Confirmação */}
      {pedidoEnviado && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 gap-6 mt-10">
          <div className="animate-fadeZoomIn">
            <Image src="/pedido-enviado.png" alt="Pedido Enviado" width={420} height={420} />
          </div>
          <button onClick={handleCancelar} className="text-white text-base hover:opacity-80 transition-all duration-200">
            Cancelar
          </button>
        </div>
      )}

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
