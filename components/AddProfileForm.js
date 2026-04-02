"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProfileForm({ existingProfile = null }) {
  const router = useRouter();
  const isEditMode = !!existingProfile;

  const [values, setValues] = useState({
    name: existingProfile?.name || "",
    major: existingProfile?.major || "",
    year: existingProfile?.year || "",
    gpa: existingProfile?.gpa || "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isEditMode ? `/api/profiles/${existingProfile.id}` : '/api/profiles';
    const method = isEditMode ? 'PUT' : 'POST';

    const res = await fetch(endpoint, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });

    if (res.ok) {
      router.push('/');
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm">
      <input value={values.name} onChange={e => setValues({...values, name: e.target.value})} placeholder="Name" className="border p-2" required />
      <input value={values.major} onChange={e => setValues({...values, major: e.target.value})} placeholder="Major" className="border p-2" required />
      <input type="number" value={values.year} onChange={e => setValues({...values, year: e.target.value})} placeholder="Year" className="border p-2" required />
      <input type="number" step="0.1" value={values.gpa} onChange={e => setValues({...values, gpa: e.target.value})} placeholder="GPA" className="border p-2" required />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        {isEditMode ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
}