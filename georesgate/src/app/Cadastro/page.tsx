"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CadastroPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    nome: "",
    nascimento: "",
    cpf: "",
    telefone: "",
    rua: "",
    numero: "",
    cep: "",
    familia: "",
  });

  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const validate = () => {
    const e: Record<string, boolean> = {};
    if (!formData.nome) e.nome = true;
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(formData.nascimento)) e.nascimento = true;
    if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(formData.cpf)) e.cpf = true;
    if (!/^\(\d{2}\) \d{5}-\d{4}$/.test(formData.telefone)) e.telefone = true;
    if (!formData.rua) e.rua = true;
    if (!/^\d+$/.test(formData.numero)) e.numero = true;
    if (!/^\d{5}-\d{3}$/.test(formData.cep)) e.cep = true;
    if (!formData.familia) e.familia = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      router.push("/Processando");
    }
  };

  const formatValue = (name: string, value: string) => {
    const onlyNums = value.replace(/\D/g, "");
    switch (name) {
      case "nascimento":
        return onlyNums.slice(0, 8).replace(/(\d{2})(\d)/, "$1/$2").replace(/(\d{2})(\d)/, "$1/$2");
      case "cpf":
        return onlyNums.slice(0, 11)
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      case "telefone":
        return onlyNums.slice(0, 11)
          .replace(/(\d{2})(\d)/, "($1) $2")
          .replace(/(\d{5})(\d)/, "$1-$2");
      case "cep":
        return onlyNums.slice(0, 8).replace(/(\d{5})(\d)/, "$1-$2");
      case "numero":
        return onlyNums;
      default:
        return value;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const formatted = formatValue(name, value);
    setFormData({ ...formData, [name]: formatted });
    setErrors({ ...errors, [name]: false });
  };

  const inputClass = (field: string) =>
    `w-full h-14 px-6 text-white placeholder-white bg-no-repeat bg-contain bg-left rounded-lg focus:outline-none ${
      errors[field] ? "ring-2 ring-red-500" : ""
    } bg-[url('/btn-fundo.png')] autofill:bg-[#450e0e']`;

  return (
    <div className="relative min-h-screen w-full bg-red-700 flex items-center justify-center">
      <Image
        src="/background-cadastro.png"
        alt="Fundo GeoResgate"
        fill
        className="object-cover -z-10"
      />

      <div className="w-full max-w-[800px] rounded-2xl bg-[#450e0e]/80 p-8 sm:p-12 text-white shadow-lg mx-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold animate-fade-in">Cadastre-se</h1>
          <p className="text-sm text-white/80 animate-fade-in delay-100">
            Ajude o resgate a te encontrar com precisão. Em momentos de emergência, cada segundo conta.
          </p>
        </div>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <h2 className="font-semibold mb-2">Dados pessoais</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" name="nome" placeholder="Nome completo" autoComplete="off" className={inputClass("nome")} value={formData.nome} onChange={handleChange} />
              <input type="text" name="nascimento" placeholder="Data de nascimento" autoComplete="off" className={inputClass("nascimento")} value={formData.nascimento} onChange={handleChange} />
              <input type="text" name="cpf" placeholder="CPF" autoComplete="off" className={inputClass("cpf")} value={formData.cpf} onChange={handleChange} />
              <input type="text" name="telefone" placeholder="Telefone" autoComplete="off" className={inputClass("telefone")} value={formData.telefone} onChange={handleChange} />
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Endereço</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" name="rua" placeholder="Rua" autoComplete="off" className={inputClass("rua")} value={formData.rua} onChange={handleChange} />
              <input type="text" name="numero" placeholder="Número" autoComplete="off" className={inputClass("numero")} value={formData.numero} onChange={handleChange} />
              <input type="text" name="cep" placeholder="CEP" autoComplete="off" className={inputClass("cep")} value={formData.cep} onChange={handleChange} />
              <input type="text" name="familia" placeholder="Membros da família" autoComplete="off" className={inputClass("familia")} value={formData.familia} onChange={handleChange} />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-[200px] h-[50px] bg-[url('/botao-cadastrar.png')] bg-cover bg-no-repeat bg-center transition transform active:scale-95 hover:scale-105 duration-300 ease-in-out"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
