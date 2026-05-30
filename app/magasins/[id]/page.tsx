import Plan from "@/components/Plan";

type Props = {
  params: { id: string };
};

export default function MagasinPage({ params }: Props) {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Plan du magasin</h1>
      <Plan />
    </main>
  );
}
