"use client"
import React from 'react';

const SeedButton = () => {
  const seedDatabase = async () => {
    const response = await fetch('/api/seed', {
      method: 'POST',
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <button onClick={seedDatabase} className="bg-blue-500 text-white p-2 rounded">
      Seed Database
    </button>
  );
};

export default SeedButton;
