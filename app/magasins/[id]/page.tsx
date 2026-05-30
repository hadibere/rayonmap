type Props = {
  params: { id: string };
};

export default function MagasinPage({ params }: Props) {
  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Plan du magasin #{params.id}</h1>
      <p className="text-gray-500">Le plan arrive bientot...</p>
    </main>
  );
}
