import Link from "next/link";

export default function Button({ className = "", children, href }) {
  return (
    <>
      {href ? (
        <Link className={`flex w-full justify-center ${className}`} href={href}>
          {children}
        </Link>
      ) : (
        <button type="button" className={`w-full ${className}`}>
          {children}
        </button>
      )}
    </>
  );
}
