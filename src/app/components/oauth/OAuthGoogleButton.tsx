'use client';
import ButtonLink from '../ui/ButtonLink';

export default function OAuthGoogleButton() {
  const handleGoogleAuth = () => {
    const base = process.env.NEXT_PUBLIC_API_URL;
    const url = `${base}/auth/google`;

    // if (!base) {
    //   console.error('API URL not configured');
    //   return;
    // }

    // window.location.href = url;
    console.log(url);
    try {
      window.location.href = url;
    } catch (error) {
      console.log('Не удалось перейти:', error);
      alert('Ссылка не работает');
    }
  };

  return (
    <div className="space-y-4 flex flex-col text-center items-center">
      <button
        onClick={handleGoogleAuth}
        className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
      >
        <span>Continue with Google</span>
      </button>

      <ButtonLink href="/"> Главная </ButtonLink>
    </div>
  );
}
