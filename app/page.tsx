const rayons = [
  { id: "1", nom: "Boulangerie", icone: "🥖" },
  { id: "2", nom: "Boucherie", icone: "🥩" },
  { id: "3", nom: "Fruits & Légumes", icone: "🥦" },
  { id: "4", nom: "Surgelés", icone: "🧊" },
  { id: "5", nom: "Boissons", icone: "🥤" },
];

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">RayonMap</h1>
      <ul className="space-y-2">
        {rayons.map((rayon) => (
          <li key={rayon.id} className="flex items-center gap-2">
            <span>{rayon.icone}</span>
            <span>{rayon.nom}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
