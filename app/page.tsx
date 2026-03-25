
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ major?: string; name?: string }>;
}) {
  // 1. Get the filter values from the URL (await is required in Next.js 15)
  const { major, name } = await searchParams;

  // 2. Use the exact sample data from Lab 16
  const profiles = [
    { id: 1, name: "Ava Lee", major: "CS", year: 2, gpa: 3.6 },
    { id: 2, name: "Ben Park", major: "CGT", year: 3, gpa: 3.2 },
  ];

  // 3. Apply the filters
  let filteredProfiles = [...profiles];

  if (major) {
    filteredProfiles = filteredProfiles.filter(
      (p) => p.major.toLowerCase() === major.toLowerCase()
    );
  }

  if (name) {
    filteredProfiles = filteredProfiles.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-zinc-50 dark:bg-black">
      <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">
        User Profiles
      </h1>

      {/* Show an indicator if a filter is active */}
      {(major || name) && (
        <p className="mb-4 text-zinc-500 italic">
          Showing results for: {name} {major}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProfiles.map((user) => (
          <div
            key={user.id}
            className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-md border border-zinc-200 dark:border-zinc-800"
          >
            <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Major: {user.major}
            </p>
            <a
              href={`/profile/${user.id}`}
              className="text-blue-500 hover:underline font-medium"
            >
              View Full Profile →
            </a>
          </div>
        ))}
      </div>

      {filteredProfiles.length === 0 && (
        <p className="text-red-500">No students found matching those filters.</p>
      )}
    </main>
  );
}