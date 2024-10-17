"use client"
import { useEffect } from "react";
import Link from "next/link";
import { Activity, Clock } from "@geist-ui/icons";
import { useRouter } from 'next/navigation';
import { useUserContext } from "../context/userContext";

export default function Dashboard() {
  const { user, fetchUser } = useUserContext();
  const router = useRouter();

  console.log("user in dashboard", user)

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else if (user && user.token) {
      fetchUser(user); 
      console.log("fetched user in dashboard", user)
    }
  }, []);
  

  return (
    <div className="flex items-center justify-center gap-2">
      <Link href='/practice' 
        className="p-2 bg-cyan-600 rounded-md text-white font-semibold h-40 w-40 mt-20 flex flex-col items-center justify-center gap-2">
        <Activity color="white" /> Practicar
      </Link>
      <Link href='/simulation' 
        className="p-2 bg-amber-500 rounded-md text-white font-semibold h-40 w-40 mt-20 flex flex-col items-center justify-center gap-2">
        <Clock color="white" /> Simulacro
      </Link>
      {/* <SeedButton /> */}
    </div>
  );
}
