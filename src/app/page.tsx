import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Добро пожаловать в Portfast!</h1>

      <div className="flex gap-4">
        <Link
          href="/auth/login"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Войти через Google
        </Link>

        <Link
          href="/hello"
          className="px-6 py-3 bg-gray-500 rounded-lg hover:bg-gray-400 transition"
        >
          Перейти на Hello
        </Link>

        <Link
          href="/editor"
          className="px-6 py-3 bg-gray-500 rounded-lg hover:bg-gray-400 transition"
        >
          Редактор
        </Link>
      </div>
    </div>
  );
}
