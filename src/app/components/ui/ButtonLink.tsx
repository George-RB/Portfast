import Link from 'next/link';

type ButtonLinkProps = {
  children: React.ReactNode;
  href: string;
};

export default function ButtonLink({ children, href }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className="w-fit px-4 py-2 flex items-center justify-center gap-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      {children}
    </Link>
  );
}
