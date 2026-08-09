import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero3D from './Hero3D.jsx';
import ProductCard from './ProductCard.jsx';
import { products } from './products.js';

const collections = [
  { title: 'تيشيرتات وقمصان', desc: 'موديلات يومية بسيطة، مع تيشيرتات سادة قابلة للطباعة حسب الطلب.' },
  { title: 'هوديز وسويت شيرت', desc: 'قصات مريحة وألوان متعددة للإطلالات الكاجوال.' },
  { title: 'بناطيل وبدل رياضية', desc: 'خيارات عملية للحركة والاستخدام اليومي بمقاسات متنوعة.' },
  { title: 'ملابس أطفال', desc: 'قطع كاجوال بألوان وتصاميم مناسبة للصغار.' },
];

export default function Home() {
  return (
    <div>
      <section style={{ position: 'relative', minHeight: 620, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}><Hero3D /></div>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 24% 50%, transparent 0%, var(--bg) 78%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', minHeight: 620, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 1120 }}>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .15 }} className="eyebrow">KHYOOT &amp; NASEJ · خيُوط ونسيج</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3, duration: .65 }} style={{ fontSize: 'clamp(42px, 7vw, 76px)', lineHeight: 1.12, maxWidth: 760, margin: '12px 0 20px' }}>
            لبسك يبدأ من <span style={{ color: 'var(--gold)' }}>اختيارك.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .48, duration: .6 }} style={{ color: 'var(--text-secondary)', maxWidth: 580, fontSize: 16, lineHeight: 2, marginBottom: 32 }}>
            ملابس رجالية وملابس أطفال بموديلات متنوعة، مقاسات مختلفة، وخيارات مخصصة للتيشيرتات السادة. اختر القطعة، ثم تواصل معنا لتأكيد المقاس والسعر والشحن.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .65 }} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/shop" className="btn-primary">تسوّق الآن</Link>
            <Link to="/contact" className="btn-ghost">تواصل معنا</Link>
          </motion.div>
        </div>
      </section>

      <section className="container" style={{ padding: '70px 24px 30px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: 16 }}>
          {[
            ['✦', 'مقاسات متنوعة', 'موديلات وقصات مختلفة حسب المتاح.'],
            ['✎', 'طباعة حسب الطلب', 'تيشيرتات سادة مع إمكانية إضافة عبارة أو تصميم.'],
            ['◆', 'طلب مباشر', 'تأكيد التفاصيل عبر واتساب قبل الشحن.'],
          ].map(([icon, title, desc]) => (
            <div key={title} style={{ padding: 22, borderRadius: 14, background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
              <div style={{ color: 'var(--gold)', fontSize: 18, marginBottom: 10 }}>{icon}</div>
              <div style={{ fontSize: 15, fontWeight: 800, marginBottom: 6 }}>{title}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: 12, lineHeight: 1.8 }}>{desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container" style={{ padding: '55px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 18, marginBottom: 28 }}>
          <div><p className="eyebrow">التشكيلة</p><h2 style={{ fontSize: 32, marginTop: 6 }}>اختيارات خيُوط ونسيج</h2></div>
          <Link to="/shop" className="btn-ghost">كل المنتجات</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
          {collections.map((c, i) => <div key={c.title} style={{ padding: 24, minHeight: 150, borderRadius: 16, background: i % 2 ? 'var(--surface-2)' : 'linear-gradient(145deg,var(--surface-2),var(--surface))', border: '1px solid var(--border)' }}><div className="eyebrow">0{i + 1}</div><h3 style={{ fontSize: 20, margin: '8px 0' }}>{c.title}</h3><p style={{ color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.8 }}>{c.desc}</p></div>)}
        </div>
      </section>

      <section className="container" style={{ padding: '10px 24px 90px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 18, marginBottom: 28 }}><div><p className="eyebrow">وصل حديثًا</p><h2 style={{ fontSize: 32, marginTop: 6 }}>الموديلات الحالية</h2></div></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 20 }}>{products.slice(0, 6).map((p) => <ProductCard key={p.id} product={p} />)}</div>
      </section>
    </div>
  );
}
