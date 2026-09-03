interface LuggageTagIconProps {
  className?: string;
}

export function LuggageTagIcon({ className }: LuggageTagIconProps) {
  return (
    <svg
      viewBox="0 0 44 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M22 3c-3.4 0-5.6 1.9-5.6 4.4 0 2.1 1.6 3.4 3.7 4.1" />
      <rect x="6.5" y="12.5" width="31" height="44" rx="7" />
      <circle cx="22" cy="21" r="2.6" />
      <path d="M14 32.5h16" />
      <path d="M14 39.5h16" />
      <path d="M14 46.5h9.5" />
    </svg>
  );
}
