"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#009699] text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link href="/">BetLink</Link>
      </h1>
      <nav className="space-x-4">
        <Link href="/property/list">Properties</Link>
        <Link href="/profile">Profile</Link>
      </nav>
    </header>
  );
}