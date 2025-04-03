export default function HelloLayout({ children }) {
  return (
    <main className="flex grow items-center">
      <div className="relative mx-auto flex flex-col">{children}</div>
    </main>
  );
}
