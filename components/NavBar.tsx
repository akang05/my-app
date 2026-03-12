import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-6 bg-gray-800 text-white">
      <div className="font-bold">Next.js Lab</div>
      <div className="space-x-4">
        <Link href="/" className="hover:text-blue-300 text-sm">Home</Link>
      </div>
    </nav>
  );
}