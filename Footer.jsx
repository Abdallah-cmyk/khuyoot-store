import React from 'react';
import Logo from './Logo.jsx';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '40px 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
        <Logo size={26} />
        <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>© خيُوط — صُنع في مصر</div>
      </div>
    </footer>
  );
}
