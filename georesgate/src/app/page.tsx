"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import IntroAnimation from "./components/IntroAnimation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/Cadastro");
    }, 9000); 

    return () => clearTimeout(timer);
  }, [router]);

  return <IntroAnimation />;
}
