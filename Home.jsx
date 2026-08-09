import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero3D from './Hero3D.jsx';
import ProductCard from './ProductCard.jsx';
import { products } from './products.js';

export default function Home() {
  return (
    <div>
      <section style={{ position: 'relative', minHeight: 560, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}><Hero3D /></div>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 50%, transparent 0%, var(--bg) 78%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', minHeight: 560, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="eyebrow">KHYOOT &amp; NASEJ</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }} style={{ fontSize: 'clamp(38px, 6vw, 68px)', maxWidth: 680, margin: '10px 0 18px' }}>خيُوط ونسيج</motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} style={{ color: 'var(--text-secondary)', maxWidth: 520, fontSize: 16, lineHeight: 2, marginBottom: 30 }}>ملابس رجالية وأطفال بموديلات متنوعة، من التيشيرتات والقمصان إلى الجينز والهوديز والبدل الرياضية، مع مقاسات وخيارات متعددة.</motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} style={{ display: 'flex', gap: 14 }}><Link to="/shop" className="btn-primary">تصفح الملابس</Link><Link to="/contact" className="btn-ghost">تواصل معنا</Link></motion.div>
        </div>
      </section>

      <section className="container" style={{ padding: '70px 24px' }}>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontSize: 32, marginBottom: 12 }}>تشكيلة خيُوط ونسيج</motion.h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, maxWidth: 760, marginBottom: 34 }}>نختار تشكيلة عملية ومتنوعة تناسب الاستخدام اليومي، مع اهتمام بالمقاسات والألوان والتصاميم. ويمكن تخصيص بعض التيشيرتات السادة بعبارات أو تصاميم حسب الطلب.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
          {['تيشيرتات', 'قمصان', 'جينز وبناطيل', 'هوديز وبدل رياضية', 'ملابس أطفال'].map((title, i) => <div key={title} style={{ padding: 24, borderRadius: 16, background: 'var(--surface-2)', border: '1px solid var(--border)' }}><span className="tier-badge tier-premium" style={{ marginBottom: 14 }}>◆ {i === 4 ? 'أطفال' : 'خيُوط'}</span><h3 style={{ fontSize: 22, margin: '8px 0' }}>{title}</h3><p style={{ color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.8 }}>موديلات وخيارات متنوعة حسب التشكيلة والمقاسات المتاحة.</p></div>)}
        </div>
      </section>

      <section className="container" style={{ padding: '20px 24px 90px' }}>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontSize: 32, marginBottom: 32 }}>من التشكيلة الحالية</motion.h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 20 }}>{products.slice(0, 6).map((p) => <ProductCard key={p.id} product={p} />)}</div>
      </section>
    </div>
  );
}
