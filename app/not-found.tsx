import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-xl my-4">Oops! This profile doesn&apos;t exist.</p>
      <Link href="/" className="text-blue-500 underline hover:text-blue-700">
        Return Home
      </Link>
    </div>
  );
}