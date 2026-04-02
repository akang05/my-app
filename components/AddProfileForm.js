"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProfileForm({ existingProfile = null }) {
  const router = useRouter();
  const isEditMode = !!existingProfile; // If profile exists, we are editing

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

    const response = await fetch(endpoint, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto bg-white p-6 rounded shadow">
      <input 
        value={values.name} 
        onChange={e => setValues({...values, name: e.target.value})} 
        placeholder="Name" className="border p-2 rounded text-black" required 
      />
      <input 
        value={values.major} 
        onChange={e => setValues({...values, major: e.target.value})} 
        placeholder="Major" className="border p-2 rounded text-black" required 
      />
      <input 
        type="number" value={values.year} 
        onChange={e => setValues({...values, year: e.target.value})} 
        placeholder="Year" className="border p-2 rounded text-black" required 
      />
      <input 
        type="number" step="0.1" value={values.gpa} 
        onChange={e => setValues({...values, gpa: e.target.value})} 
        placeholder="GPA" className="border p-2 rounded text-black" required 
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        {isEditMode ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
}