type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="max-w-xs bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
}
