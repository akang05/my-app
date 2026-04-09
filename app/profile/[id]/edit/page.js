import Link from 'next/link';
import prisma from "@/lib/db";
import AddProfileForm from "@/components/AddProfileForm";
import DeleteButton from "@/components/DeleteButton";

export default async function EditPage({ params }) {
  const { id } = await params;
  const profile = await prisma.profile.findUnique({
    where: { id: parseInt(id) },
  });

  if (!profile) return <p>Not found.</p>;

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">Edit {profile.name}</h1>
      <AddProfileForm existingProfile={profile} />
      <DeleteButton profileId={profile.id} />
    </main>
  );
}