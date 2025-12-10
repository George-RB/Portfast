import ButtonLink from '../components/ui/ButtonLink';

export default function HelloPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-4 ">Hello Page</h1>
      <ButtonLink href="/" className="w-full">
        Главная
      </ButtonLink>
    </div>
  );
}
