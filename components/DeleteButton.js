'use client';
import { useRouter } from "next/navigation";

export default function DeleteButton({ profileId }) {
    const router = useRouter();

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this profile?")) return;

        try {
            const response = await fetch(`/api/profiles/${profileId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                router.push("/");
                router.refresh(); // Refresh homepage data
            } else {
                alert("Failed to delete");
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <button onClick={handleDelete} className="bg-red-600 text-white p-2 rounded mt-4 block mx-auto">
            Delete Profile
        </button>
    );
}