interface Profile {
  id: number;
  name: string;
  major: string;
  year: number;
  gpa: number;
}

export default async function AboutPage() {
  const response = await fetch("http://localhost:3000/api/profiles", {
    cache: "no-store",
  });
  const profiles: Profile[] = await response.json();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Student Profiles</h1>
      <div className="grid gap-4">
        {profiles.map((user) => (
          <div key={user.id} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600"><strong>Major:</strong> {user.major}</p>
            <p className="text-gray-600"><strong>Year:</strong> {user.year}</p>
            <p className="text-gray-600"><strong>GPA:</strong> {user.gpa}</p>
            <a href={`/profile/${user.id}`} className="text-blue-500 underline mt-2 block">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}