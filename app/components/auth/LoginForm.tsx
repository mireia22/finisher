"use client";
import { useUserContext } from "@/app/context/userContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const { login } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push("/dahboard");
    } catch (err) {
      setError("Invalid credentials");
      console.log(err)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <label htmlFor="email" className="block">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
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
          className="border p-2 w-full"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
      <p>Dont you have an account? 

</p>
<Link href={"/register"}>Register</Link>
    </form>
  );
};

export default LoginForm;
