import AuthLayout from '@/app/auth/layout';
import OAuthGoogleButton from '@/app/components/oauth/OAuthGoogleButton';

export default function OAuthLoginPage() {
  return (
    <AuthLayout>
      <div className="bg-gray-600 m-4 shadow-lg rounded-xl p-10 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
        <OAuthGoogleButton />
      </div>
    </AuthLayout>
  );
}
