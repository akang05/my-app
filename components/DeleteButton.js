'use client';
import { useRouter } from "next/navigation";

export default function DeleteButton({ profileId }) {
    const router = useRouter();

    const handleDelete = async () => {
        if (!confirm("Delete this student?")) return;

        const res = await fetch(`/api/profiles/${profileId}`, { method: 'DELETE' });
        if (res.ok) {
            router.push('/');
            router.refresh(); // Forces homepage to update
        }
    }

    return (
        <button onClick={handleDelete} className="bg-red-600 text-white p-2 rounded mt-4">
            Delete Profile
        </button>
    );
}