import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data: rayons, error } = await supabase
    .from("rayons_reference")
    .select("*");

  if (error) {
    return <p>Erreur : {error.message}</p>;
  }

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
