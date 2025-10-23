"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <Image className="pr-2" src="/earth.png" alt="Logo" width={32} height={32} />
        <h1 className="font-bold text-lg">Carbon Tracker</h1>
      </div>
      <div className="flex gap-6 text-sm font-medium">
        <Link href="/" className="hover:text-green-200 transition">Home</Link>
        <Link href="/about" className="hover:text-green-200 transition">About</Link>
        <Link href="/tracker" className="hover:text-green-200 transition">Tracker</Link>
        <Link href="/login" className="hover:text-green-200 transition">Login</Link>
      </div>
    </nav>
  );
}