"use client";
import Link from "next/link";
import { useState } from "react";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      setSuccess("Registration successful! You can now login.");
    } else {
      setError(data.message || "Error registering user.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">Register</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <div>
        <label htmlFor="name" className="block">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
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
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
    <p>Already have an account? 

    </p>
    <Link href={"/login"}>
             Login
             </Link>
    </form>
  );
};

export default RegisterForm;
