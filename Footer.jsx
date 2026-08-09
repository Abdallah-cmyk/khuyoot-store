import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '40px 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 28 }}>
        <div>
          <Logo size={26} />
          <p style={{ maxWidth: 360, color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.9, marginTop: 12 }}>
            خيُوط — متجر أزياء مصري يهتم بالاختيارات الواضحة وتجربة شراء بسيطة.
          </p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', fontSize: 13 }}>
          <Link to="/about">من نحن</Link>
          <Link to="/contact">تواصل معنا</Link>
          <Link to="/size-guide">دليل المقاسات</Link>
          <Link to="/shipping-returns">الشحن والاسترجاع</Link>
          <Link to="/privacy">الخصوصية</Link>
          <Link to="/terms">الشروط والأحكام</Link>
        </div>
        <div style={{ width: '100%', fontSize: 12, color: 'var(--text-muted)' }}>© خيُوط — صُنع في مصر</div>
      </div>
    </footer>
  );
}
