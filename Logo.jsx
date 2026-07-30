import React from 'react';

// Minimalist logo: three interlaced "threads" (خيوط = threads) forming
// a woven knot, referencing the brand name literally. Line-art only,
// so it reads clean at any size and works on light or dark surfaces.
export default function Logo({ size = 34 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M8 14 C 8 30, 40 18, 40 34"
          stroke="var(--gold)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 24 C 8 40, 40 8, 40 24"
          stroke="var(--emerald)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 34 C 8 18, 40 30, 40 14"
          stroke="var(--bronze)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span
        className="display"
        style={{ fontSize: size * 0.62, color: 'var(--text-primary)', lineHeight: 1 }}
      >
        خيُوط
      </span>
    </div>
  );
}
