export default function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="9" fill={inverse ? "#e0e7ff" : "#4f46e5"} />
        <path d="M9 7h14v4h-5v10h5v4H9v-4h5V11H9z" fill={inverse ? "#312e81" : "#ffffff"} />
        <rect x="23.5" y="4.5" width="4" height="4" rx="1" fill="#fbbf24" />
      </svg>
      <span className="wordmark text-[0.9rem]">INDIGO LABS</span>
    </span>
  );
}
