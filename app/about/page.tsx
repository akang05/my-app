export default async function HomePage() {
  // Example of "fetching" profiles (you can replace this with a real API later)
  const profiles = [
    { id: 1, name: "Alvin" },

  ];

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">User Profiles</h1>
      <div className="grid gap-4">
        {profiles.map((user) => (
          <div key={user.id} className="p-4 border rounded shadow">
            <h2 className="text-xl">{user.name}</h2>
            <a href={`/profile/${user.id}`} className="text-blue-500 underline">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}