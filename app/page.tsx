"use client"
import Link from "next/link";
import { useUserContext } from "./context/userContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    } 
  }, []);
  
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex flex-col gap-4 mt-10">
      <h1 className="text-white text-5xl font-bold" style={{ fontFamily: 'var(--font-agdasima)' }}>Exámen teórico</h1>
      <h1 className="text-white text-4xl font-bold" style={{ fontFamily: 'var(--font-agdasima)' }}>Parapente N4</h1>
      </div>
     
      <Link href='/register' 
      className="p-4 bg-gradient-to-r w-56 text-center text-lg bottom-20 fixed from-red-900 via-red-700 to-red-600 rounded-md text-white font-semibold ">
      Comenzar aquí
      </Link>
    </div>
  );
}
