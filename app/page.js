import { prisma } from '@/lib/db';
import Link from 'next/link';

export default async function Home({ searchParams }) {
  const { major } = await searchParams;

  // Fetch live data from your Neon database
  let profiles = await prisma.profile.findMany();

  // Filter if someone types ?major=CS in the URL
  if (major) {
    profiles = profiles.filter(
      (p) => p.major.toLowerCase() === major.toLowerCase()
    );
  }

  return (
    <main className="p-10 bg-zinc-50 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-zinc-900">Neon Student Directory</h1>
        
        <Link href="/add" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
          + Add New Profile
        </Link>

        <div className="grid gap-4 mt-8">
          {profiles.map((p) => (
            <div key={p.id} className="p-5 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold text-zinc-800">{p.name}</h2>
              <p className="text-zinc-600">{p.major} — Year {p.year}</p>
              <div className="mt-2 text-sm font-semibold text-blue-600">GPA: {p.gpa}</div>
            </div>
          ))}
        </div>
        
        {profiles.length === 0 && (
          <p className="mt-10 text-center text-zinc-500 italic">No students found in the database.</p>
        )}
      </div>
    </main>
  );
}