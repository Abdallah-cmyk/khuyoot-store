import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo.jsx';
import { useTheme } from './ThemeContext.jsx';

const links = [
  { to: '/', label: 'الرئيسية' }, { to: '/shop', label: 'المتجر' }, { to: '/journal', label: 'مجلة خيُوط' }, { to: '/about', label: 'من نحن' }, { to: '/contact', label: 'تواصل معنا' },
];
const CART_KEY = 'khuyoot_cart';

export default function Header() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const load = () => setCount(JSON.parse(localStorage.getItem(CART_KEY) || '[]').reduce((n, item) => n + item.quantity, 0));
    load(); window.addEventListener('khuyoot-cart-updated', load); window.addEventListener('storage', load);
    return () => { window.removeEventListener('khuyoot-cart-updated', load); window.removeEventListener('storage', load); };
  }, []);
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'blur(14px)', background: 'color-mix(in srgb, var(--bg) 82%, transparent)', borderBottom: '1px solid var(--border)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76, gap: 18 }}>
        <Link to="/" aria-label="خيُوط ونسيج - الصفحة الرئيسية"><Logo /></Link>
        <button className="mobile-menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="فتح القائمة">☰</button>
        <nav style={{ display: 'flex', gap: 22, alignItems: 'center', flexWrap: 'wrap' }} className={open ? 'mobile-nav-open' : 'desktop-nav'}>
          {links.map((l) => <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} style={({ isActive }) => ({ fontSize: 13, fontWeight: 500, color: isActive ? 'var(--gold)' : 'var(--text-secondary)' })}>{l.label}</NavLink>)}
          <Link to="/cart" onClick={() => setOpen(false)} className="btn-ghost" style={{ fontSize: 13, padding: '8px 14px', position: 'relative' }}>السلة{count > 0 && <span style={{ marginInlineStart: 6, display: 'inline-flex', minWidth: 20, height: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 999, background: 'var(--gold)', color: '#151017', fontSize: 11, fontWeight: 800 }}>{count}</span>}</Link>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={toggle} aria-label="تبديل الوضع الليلي / النهاري" style={{ width: 46, height: 26, borderRadius: 20, border: '1px solid var(--border)', background: 'var(--surface-2)', position: 'relative', padding: 0 }}><span style={{ position: 'absolute', top: 2, [theme === 'dark' ? 'right' : 'left']: 2, width: 20, height: 20, borderRadius: '50%', background: 'var(--gold)', transition: 'all 0.25s ease' }} /></button>
        </div>
      </div>
    </header>
  );
}
