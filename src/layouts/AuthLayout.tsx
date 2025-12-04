// import '../../src/app/globals.css';

type AuthLayoutProps = { children: React.ReactNode };

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-600">
      <div className="shadow-lg rounded-xl p-10 w-full max-w-md bg-amber-400">
        {children}
      </div>
    </div>
  );
}
