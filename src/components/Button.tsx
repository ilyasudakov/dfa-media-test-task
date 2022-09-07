export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-secondary px-4 py-2 rounded-lg">{children}</button>
  );
}
