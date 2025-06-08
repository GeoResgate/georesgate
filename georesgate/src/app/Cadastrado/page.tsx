"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function ContaCadastradaPage() {
  const router = useRouter()
  const [editando, setEditando] = useState(false)
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    nascimento: "",
    telefone: "",
    rua: "",
    cep: "",
    numero: "",
    familia: "",
  })

  const formatValue = (name: string, value: string) => {
    const onlyNums = value.replace(/\D/g, "")
    switch (name) {
      case "nascimento":
        return onlyNums.slice(0, 8)
          .replace(/(\d{2})(\d)/, "$1/$2")
          .replace(/(\d{2})(\d)/, "$1/$2")
      case "cpf":
        return onlyNums.slice(0, 11)
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
      case "telefone":
        return onlyNums.slice(0, 11)
          .replace(/(\d{2})(\d)/, "($1) $2")
          .replace(/(\d{5})(\d)/, "$1-$2")
      case "cep":
        return onlyNums.slice(0, 8).replace(/(\d{5})(\d)/, "$1-$2")
      case "numero":
        return onlyNums
      default:
        return value
    }
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    const formatted = formatValue(name, value)
    setFormData({ ...formData, [name]: formatted })
  }

  const handleConfirmar = () => {
    setEditando(false)
    console.log("Dados atualizados:", formData)
  }

  const handleExcluir = () => {
    setFormData({
      nome: "",
      cpf: "",
      nascimento: "",
      telefone: "",
      rua: "",
      cep: "",
      numero: "",
      familia: "",
    })
    router.push("/Cadastro")
  }

  const Input = ({ name, placeholder }: { name: string; placeholder: string }) => (
    <div className="relative w-full h-[50px]">
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={(formData as any)[name]}
        onChange={handleChange}
        readOnly={!editando}
        className={`w-full h-full pl-6 pr-4 text-white bg-[url('/fundo-cadastrado.png')] bg-no-repeat bg-cover rounded-md placeholder-white focus:outline-none ${
          !editando ? "opacity-60 cursor-not-allowed" : ""
        }`}
      />
    </div>
  )

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-start py-10 overflow-x-hidden">
      {/* Fundo */}
      <div className="absolute inset-0 flex justify-center items-start -z-10">
        <Image
          src="/background-conta-cadastrada.png"
          alt="Fundo"
          width={1920}
          height={1080}
          className="object-contain"
          priority
        />
      </div>

      {/* Header */}
      <div className="w-full max-w-6xl flex justify-between items-center px-6 sm:px-12">
        <Image src="/logo-cadastrada.png" alt="GeoResgate" width={200} height={50} />
        <button onClick={() => router.push("/TelaPrincipal")}> 
          <Image src="/icone-home.png" alt="Home" width={36} height={36} />
        </button>
      </div>

      {/* Card principal */}
      <div className="w-full max-w-[850px] bg-black/50 mt-12 p-8 sm:p-10 rounded-2xl text-white shadow-lg backdrop-blur-sm">
        <h1 className="text-3xl font-bold mb-8 text-center">Atualizar dados pessoais</h1>

        {/* Dados pessoais */}
        <h2 className="font-semibold mb-2">Dados pessoais</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <Input name="nome" placeholder="Nome completo" />
          <Input name="cpf" placeholder="CPF" />
          <Input name="nascimento" placeholder="Data de nascimento" />
          <Input name="telefone" placeholder="Telefone" />
        </div>

        {/* Endereço */}
        <h2 className="font-semibold mb-2">Endereço</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Input name="rua" placeholder="Rua" />
          <Input name="cep" placeholder="CEP" />
          <Input name="numero" placeholder="Número" />
          <Input name="familia" placeholder="Membros da família" />
        </div>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {!editando ? (
            <button
              onClick={() => setEditando(true)}
              className="text-black font-semibold bg-white py-2 px-6 rounded hover:brightness-90"
            >
              Editar
            </button>
          ) : (
            <button
              onClick={handleConfirmar}
              className="bg-red-700 text-white font-bold px-8 h-[50px] rounded transition hover:bg-red-800"
            >
              Confirmar
            </button>
          )}

          <button
            onClick={handleExcluir}
            className="text-black font-semibold bg-white py-2 px-6 rounded hover:brightness-90"
          >
            Excluir
          </button> 
        </div>
      </div>
    </div>
  )
}
