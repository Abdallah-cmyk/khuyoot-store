import React from 'react';

export default function Logo({ size = 34 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M8 14 C 8 30, 40 18, 40 34" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 24 C 8 40, 40 8, 40 24" stroke="var(--emerald)" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 34 C 8 18, 40 30, 40 14" stroke="var(--bronze)" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span className="display" style={{ fontSize: size * 0.52, color: 'var(--text-primary)' }}>خيُوط ونسيج</span>
        <span style={{ fontSize: Math.max(8, size * 0.22), letterSpacing: 1.2, color: 'var(--text-muted)', marginTop: 4 }}>KHYOOT &amp; NASEJ</span>
      </div>
    </div>
  );
}
