"use client";

import { useEffect, useState } from "react";
import IntroAnimation from "./components/IntroAnimation";
import CadastroPage from "./components/CadastroPage";

export default function Home() {
  const [showCadastro, setShowCadastro] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCadastro(true);
    }, 9000); // espera 9 segundos antes de mostrar o cadastro

    return () => clearTimeout(timer);
  }, []);

  return showCadastro ? <CadastroPage /> : <IntroAnimation />;
}
