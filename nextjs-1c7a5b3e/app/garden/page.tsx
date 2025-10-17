const dreams = [
  { id: 1, text: "Megtanulok lebegni a valóság felett." },
  { id: 2, text: "Egy világ, ahol a fény hangot ad." },
  { id: 3, text: "Minden reggel új univerzum kezdete." },
];

export default function GardenPage() {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">🌸 Álmaid kertje</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 w-full max-w-4xl">
        {dreams.map((dream) => (
          <div key={dream.id} className="p-4 border border-purple-300 rounded-xl shadow-sm bg-purple-50">
            <p className="text-gray-700 italic">“{dream.text}”</p>
          </div>
        ))}
      </div>
    </main>
  );
}
