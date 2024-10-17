"use client"
import { useState } from "react"; // Importa useState
import { useUserContext } from "./context/userContext";
import Link from "next/link";
import { Activity, Clock, Home, User } from "@geist-ui/icons";
import AuthModal from "./components/AuthModal";

export default function Dashboard() {
  // const { user } = useUserContext();
  // const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal

  // const handleLinkClick = (event) => {
  //   if (!user) {
  //     event.preventDefault(); // Evita la navegación si no hay usuario
  //     setIsModalOpen(true); // Abre el modal
  //   }
  // };

  return (
    <div className="flex items-center justify-center gap-2">
         <header className="bg-red-900 h-10 flex px-4 py-1 text-white justify-between items-center">
            <Link href={"/"}>
            <Home color="white"/>
             </Link>
             {/* <Link href={"/practice"}>
             Practice
             </Link> */}
             <Link href={"/profile"}>
             <User />
             </Link>
          </header>
      <Link href='/practice' 
      // onClick={handleLinkClick} 
      className="p-2 bg-cyan-600 rounded-md text-white font-semibold h-40 w-40 mt-20 flex flex-col items-center justify-center gap-2">
        <Activity color="white" /> Practicar
      </Link>
      <Link href='/simulation' 
      // onClick={handleLinkClick} 
      className="p-2 bg-amber-500 rounded-md text-white font-semibold h-40 w-40 mt-20 flex flex-col items-center justify-center gap-2">
        <Clock color="white" /> Simulacro
      </Link>
      {/* <SeedButton /> */}
      {/* {isModalOpen && (
        <AuthModal onClose={() => setIsModalOpen(false)} />
      )} */}
    </div>
  );
}
