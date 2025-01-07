export default function ImageWrapper({ children, className = "" }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
}
