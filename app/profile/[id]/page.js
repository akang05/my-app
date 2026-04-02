import Link from "next/link";
import { prisma } from "@/lib/db";

export default async function ProfileDetailPage({ params }) {
  const { id } = await params;
  const profile = await prisma.profile.findUnique({
    where: { id: parseInt(id) },
  });

  if (!profile) return <p>Profile not found.</p>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{profile.name}</h1>
      <p>Major: {profile.major}</p>
      <p>GPA: {profile.gpa}</p>
      
      {/* TODO: add a link to the edit page */}
      <Link href={`/profile/${id}/edit`} className="text-blue-600 underline mt-4 block">
        Edit this Profile
      </Link>
    </div>
  );
}