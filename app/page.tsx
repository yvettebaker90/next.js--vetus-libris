import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Link
        href="/dashboard"
        className="text-lg font-semibold underline"
      >
        Go to Dashboard
      </Link>
    </main>
  );
}

//api: https://gutendex.com/
