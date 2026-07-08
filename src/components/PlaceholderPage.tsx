export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
      <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl">{title}</h1>
      <p className="mt-4 max-w-xl text-gray-500">Content for this page is coming soon.</p>
    </main>
  );
}
