export default function PageContainer({ className = "", children }) {
  return (
    <div className={`relative mx-auto flex flex-col ${className}`}>
      {children}
    </div>
  );
}
