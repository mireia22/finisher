"use client";
import { useUserContext } from "@/app/context/userContext";
import Link from "next/link";
import { useState } from "react";

const RegisterForm = () => {
  const {register} = useUserContext()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const [success, setSuccess] = useState("");


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await register(name, email, password);
    } catch (err) {
      setError("Invalid credentials");
      console.log(err)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 text-xl space-y-4 bg-white flex flex-col  gap-1 rounded-md"
    style={{ fontFamily: 'var(--font-agdasima)' }}
    >
      <h2 className="text-3xl font-semibold self-center text-rose-900">REGISTER</h2>
     
      <div>
        <label htmlFor="name" className="block">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border  border-rose-950  p-2 w-full rounded-md"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-rose-950 p-2 w-full rounded-md"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-rose-950 p-2 w-full rounded-md"
          required
        />
      </div>
      {error && <p className="text-red-500 self-center text-sm font-semibold">{error}</p>}
      {success && <p className="text-green-500 self-center text-sm font-semibold">{success}</p>}
      <button type="submit" className="bg-rose-900 text-white px-4 py-2 rounded">Register</button>
      <div className="flex gap-2 self-center">
      <p>Already have an account? 

</p>
<Link href={"/login"} className="underline text-rose-900">
         Login
         </Link>
      </div>
   
    </form>
  );
};

export default RegisterForm;
