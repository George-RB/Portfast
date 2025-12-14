import Link from 'next/link';

type ButtonLinkProps = {
  children: React.ReactNode;
  href: string;
};

export default function ButtonLink({ children, href }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className="w-fit py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      {children}
    </Link>
  );
}
