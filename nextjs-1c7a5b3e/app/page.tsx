export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-4xl font-bold mb-4 text-purple-600">🌱 DreamSeed</h1>
      <p className="mb-6 text-gray-600 max-w-lg">
        Ültess egy álmot, és nézd, hogyan nő egy inspirációs kertté.  
        Egy futurisztikus játék a kreativitás és képzelet határán.
      </p>
      <div className="flex gap-4">
        <a href="/plant" className="px-4 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition">
          Ültess álmot
        </a>
        <a href="/garden" className="px-4 py-2 border border-purple-400 rounded-xl hover:bg-purple-50 transition">
          Nézd meg a kertet
        </a>
      </div>
    </main>
  );
}
