export async function GET(request, { params }) {
  const { id } = await params;
  // Find profile by id
  const profile = profiles.find((p) => p.id === Number(id));

  if (!profile) {
    return Response.json({ error: "Profile not found" }, { status: 404 });
  }
  return Response.json(profile, { status: 200 });
}

export async function PATCH(request, { params }) {
  const updates = await request.json();
  const { id } = await params;
  const index = profiles.findIndex((p) => p.id === Number(id));

  if (index === -1) {
    return Response.json({ error: "Profile not found" }, { status: 404 });
  }

  // Validation for year or gpa
  if (updates.year && (updates.year < 1 || updates.year > 4)) {
    return Response.json({ error: "Invalid year" }, { status: 400 });
  }

  profiles[index] = { ...profiles[index], ...updates, id: Number(id) };
  return Response.json(profiles[index], { status: 200 });
}

export async function DELETE(request, { params }) {
  const { id } = await params; // Get id from request
  const index = profiles.findIndex((p) => p.id === Number(id));

  if (index === -1) {
    return Response.json({ error: "Profile not found" }, { status: 404 });
  }

  profiles.splice(index, 1);
  return Response.json({ message: "Profile deleted" }, { status: 200 });
}