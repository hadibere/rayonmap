const magasins = [
  {
    id: "1",
    enseigne: "Leclerc",
    ville: "Saint-Denis",
    adresse: "1 rue du Commerce",
  },
  {
    id: "2",
    enseigne: "Auchan",
    ville: "Issy-les-Moulineaux",
    adresse: "2 avenue de la Republique",
  },
  {
    id: "3",
    enseigne: "Decathlon",
    ville: "Paris 15",
    adresse: "15 rue Linois",
  },
];

export default function MagasinsPage() {
  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Choisir un magasin</h1>
      <ul className="space-y-3">
        {magasins.map((magasin) => (
          <li key={magasin.id}>
            <a
              href={"/magasins/" + magasin.id}
              className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <p className="font-medium">
                {magasin.enseigne} - {magasin.ville}
              </p>
              <p className="text-sm text-gray-500">{magasin.adresse}</p>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
