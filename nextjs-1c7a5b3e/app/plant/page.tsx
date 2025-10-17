"use client";
import { useState } from "react";

export default function PlantPage() {
  const [dream, setDream] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`🌱 Az álmod elültetve: "${dream}"`);
    setDream("");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold text-purple-600 mb-4">Ültess egy álmot</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Írd ide az álmod..."
          value={dream}
          onChange={(e) => setDream(e.target.value)}
          className="border border-purple-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />
        <button type="submit" className="bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition">
          Elültetem 🌱
        </button>
      </form>
    </main>
  );
}
