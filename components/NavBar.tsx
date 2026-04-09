"use client";

import Link from 'next/link';
import { useSession, signOut } from "next-auth/react";

export default function NavBar() {
  const { data: session, status } = useSession();

  return (
    <nav className="flex items-center justify-between p-6 bg-gray-800 text-white">
      <div className="font-bold">Next.js Lab</div>
      
      <div className="flex items-center space-x-6">
        <Link href="/" className="hover:text-blue-300 text-sm">Home</Link>
        
        <div className="flex items-center space-x-4 border-l border-gray-600 pl-6">
          {status === "loading" ? (
            <span className="text-sm text-gray-400">Loading...</span>
          ) : session ? (
            <>
              <span className="text-sm text-blue-300">{session.user?.email}</span>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link 
              href="/auth/signin" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded text-sm transition"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}