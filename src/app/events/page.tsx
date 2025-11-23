import Link from "next/link";

export default function EventsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-3xl font-bold mb-4">Events (Placeholder)</h1>
        <p className="text-gray-600 mb-6">
          This is a placeholder page for Events. Replace with real content.
        </p>
        <Link href="/" className="text-pink-500 underline">
          Back home
        </Link>
      </div>
    </main>
  );
}
