import { prisma } from '@/lib/db';
import { redirect } from 'next/navigation';

export default function AddPage() {
  async function createProfile(formData) {
    'use server'; 
    
    const name = formData.get('name');
    const major = formData.get('major');
    const year = parseInt(formData.get('year'));
    const gpa = parseFloat(formData.get('gpa'));

    await prisma.profile.create({
      data: { name, major, year, gpa },
    });

    redirect('/');
  }

  return (
    <main className="p-10 max-w-md mx-auto bg-white rounded-xl shadow-md mt-10 text-black">
      <h1 className="text-2xl font-bold mb-6">Add Student to Neon</h1>
      <form action={createProfile} className="flex flex-col gap-4">
        <input name="name" placeholder="Full Name" className="border p-2 rounded" required />
        <input name="major" placeholder="Major" className="border p-2 rounded" required />
        <div className="grid grid-cols-2 gap-4">
          <input name="year" type="number" placeholder="Year" className="border p-2 rounded" required />
          <input name="gpa" type="number" step="0.1" placeholder="GPA" className="border p-2 rounded" required />
        </div>
        <button type="submit" className="bg-blue-600 text-white p-3 rounded font-bold hover:bg-blue-700">
          Save to Database
        </button>
      </form>
    </main>
  );
}