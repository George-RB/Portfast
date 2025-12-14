import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full p-4 bg-gray-900 text-white flex gap-4">
      <Link href="/" className="hover:underline">
        Главная
      </Link>

      <Link href="/hello" className="hover:underline">
        Hello
      </Link>

      <Link href="/editor" className="hover:underline">
        Редактор
      </Link>
    </header>
  );
}
