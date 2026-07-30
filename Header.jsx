import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo.jsx';
import { useTheme } from '../ThemeContext.jsx';

const links = [
  { to: '/', label: 'الرئيسية' },
  { to: '/shop', label: 'المتجر' },
  { to: '/cart', label: 'السلة' },
];

export default function Header() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(14px)',
        background: 'color-mix(in srgb, var(--bg) 82%, transparent)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 76,
        }}
      >
        <Link to="/"><Logo /></Link>

        <nav style={{ display: 'flex', gap: 32 }} className="desktop-nav">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              style={({ isActive }) => ({
                fontSize: 14,
                fontWeight: 500,
                color: isActive ? 'var(--gold)' : 'var(--text-secondary)',
              })}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <button
            onClick={toggle}
            aria-label="تبديل الوضع الليلي / النهاري"
            style={{
              width: 46,
              height: 26,
              borderRadius: 20,
              border: '1px solid var(--border)',
              background: 'var(--surface-2)',
              position: 'relative',
              padding: 0,
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: 2,
                [theme === 'dark' ? 'right' : 'left']: 2,
                width: 20,
                height: 20,
                borderRadius: '50%',
                background: 'var(--gold)',
                transition: 'all 0.25s ease',
              }}
            />
          </button>
          <Link to="/checkout" className="btn-ghost" style={{ fontSize: 13, padding: '9px 18px' }}>
            الدفع
          </Link>
        </div>
      </div>
    </header>
  );
}
