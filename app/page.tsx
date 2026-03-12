export default function Home() {
  const profiles = [
    { id: 1, name: "Alvin" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-zinc-50 dark:bg-black">
      <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">
        User Profiles
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {profiles.map((user) => (
          <div key={user.id} className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-md border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
            <a 
              href={`/profile/${user.id}`} 
              className="text-blue-500 hover:underline font-medium"
            >
              View Full Profile →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}