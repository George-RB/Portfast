// app/hello/page.tsx

import Link from 'next/link';

export default function HelloPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-4 ">Hello Page</h1>
      <Link
        href="/"
        className="bg-amber-300 text-gray-900 rounded-xl px-4 py-2 hover:bg-amber-500"
      >
        Main Page
      </Link>
    </div>
  );
}
