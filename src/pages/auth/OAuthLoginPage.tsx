import AuthLayout from '@/layouts/AuthLayout';
import OAuthGoogleButton from '../../components/oauth/OAuthGoogleButton';
// import '../../app/globals.css';

export default function OAuthLoginPage() {
  return (
    <AuthLayout>
      <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
      <OAuthGoogleButton />
    </AuthLayout>
  );
}
