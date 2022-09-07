export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button onClick={onClick} className="bg-secondary px-4 py-2 rounded-lg">
      {children}
    </button>
  );
}
