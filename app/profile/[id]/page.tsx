import Link from 'next/link';

// Inside the [id] folder, this page.tsx handles the dynamic user ID
export default async function ProfilePage({ params }: { params: Promise<{ id: string }> }) {
  // We must await params to get the ID from the URL (e.g., /profile/1)
  const { id } = await params;

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-4">Profile Details</h1>
      
      <div className="p-6 border rounded-xl bg-white dark:bg-zinc-900 shadow-sm border-zinc-200 dark:border-zinc-800">
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          You are currently viewing the detailed profile for:
        </p>
        <p className="text-4xl font-mono font-bold text-blue-600 mt-2">
          User: {id}
        </p>
      </div>
      
      <div className="mt-8">
        <Link 
          href="/" 
          className="text-zinc-500 hover:text-blue-500 underline transition-colors"
        >
          ← Back to All Profiles
        </Link>
      </div>
    </main>
  );
}