import Link from "next/link";

const styles = {
  light: "bg-white text-indigo-950 hover:bg-indigo-100",
  indigo: "bg-indigo-600 text-white hover:bg-indigo-500 shadow-sm shadow-indigo-900/20",
  outline: "border border-white/35 text-white hover:bg-white/10",
} as const;

export default function ButtonLink({
  href,
  children,
  variant = "indigo",
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof styles;
}) {
  return (
    <Link
      href={href}
      className={`inline-block rounded-full px-7 py-3.5 text-base font-semibold transition-colors ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
