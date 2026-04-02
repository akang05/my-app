import Link from "next/link";
import { prisma } from "@/lib/db";

export default async function ProfileDetailPage({ params }) {
  // 1. Get the ID from the URL
  const { id } = await params;
  
  // 2. Fetch that specific student from Neon
  const profile = await prisma.profile.findUnique({
    where: { id: parseInt(id) },
  });

  // 3. If student doesn't exist, show a simple error
  if (!profile) {
    return (
      <div className="p-10 text-center">
        <p>Profile not found.</p>
        <Link href="/" className="text-blue-500 underline">Back to Directory</Link>
      </div>
    );
  }

  // 4. Show the actual data
  return (
    <div className="p-10 max-w-xl mx-auto bg-white rounded shadow mt-10 text-black">
      <h1 className="text-3xl font-bold border-b pb-2">{profile.name}</h1>
      
      <div className="mt-4 space-y-2">
        <p><strong>Major:</strong> {profile.major}</p>
        <p><strong>Year:</strong> {profile.year}</p>
        <p><strong>GPA:</strong> <span className="text-blue-600 font-bold">{profile.gpa}</span></p>
      </div>

      <div className="mt-8 flex gap-4">
        <Link href="/" className="text-zinc-500 hover:underline">← Back to Directory</Link>
        
        {/* This is the important link for Lab 18! */}
        <Link href={`/profile/${id}/edit`} className="bg-zinc-800 text-white px-4 py-2 rounded hover:bg-black transition">
          Edit Profile
        </Link>
      </div>
    </div>
  );
}