import Link from 'next/link';
import prisma from "@/lib/db";

export default async function ProfilePage({ params }: { params: Promise<{ id: string }> }) {
  // 1. Get the ID from the URL
  const { id } = await params;

  // 2. Fetch the actual student data from your Neon database
  const profile = await prisma.profile.findUnique({
    where: { id: parseInt(id) },
  });

  // 3. Handle if the student isn't in the database
  if (!profile) {
    return (
      <main className="p-10">
        <h1 className="text-3xl font-bold mb-4 text-black">Profile Not Found</h1>
        <Link href="/" className="text-blue-600 underline">← Back to Directory</Link>
      </main>
    );
  }

  // 4. Show the ACTUAL student details
  return (
    <main className="p-10 bg-zinc-50 min-h-screen text-black">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-zinc-200">
        <h1 className="text-4xl font-bold mb-2 text-zinc-900">{profile.name}</h1>
        <p className="text-xl text-zinc-600 mb-6">{profile.major} — Year {profile.year}</p>
        
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <p className="text-blue-800 font-bold text-2xl">GPA: {profile.gpa}</p>
        </div>

        <div className="mt-10 flex gap-6 items-center">
          <Link href="/" className="text-zinc-500 hover:text-zinc-800 underline transition-colors">
            ← Back to Directory
          </Link>
          
          <Link 
            href={`/profile/${id}/edit`} 
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition"
          >
            Edit this Profile
          </Link>
        </div>
      </div>
    </main>
  );
}