import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero3D from '../components/Hero3D.jsx';
import ProductCard from '../components/ProductCard.jsx';
import { products } from '../data/products.js';

export default function Home() {
  return (
    <div>
      {/* ---- Hero ---- */}
      <section style={{ position: 'relative', height: '78vh', minHeight: 480, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Hero3D />
        </div>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 30% 50%, transparent 0%, var(--bg) 78%)',
            pointerEvents: 'none',
          }}
        />
        <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="eyebrow">
            دار أزياء مصرية
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            style={{ fontSize: 'clamp(38px, 6vw, 68px)', maxWidth: 640, margin: '10px 0 18px' }}
          >
            حيث يُنسج الذوق خيطاً خيطاً
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ color: 'var(--text-secondary)', maxWidth: 460, fontSize: 15, lineHeight: 1.9, marginBottom: 30 }}
          >
            ثلاث فئات، لكل ذوق مكانه: VIP للخامات الاستثنائية، بريميوم للأناقة اليومية، وكلاسيك للبساطة الأصيلة.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} style={{ display: 'flex', gap: 14 }}>
            <Link to="/shop" className="btn-primary">تسوّق الآن</Link>
            <a href="#tiers" className="btn-ghost">اكتشف الفئات</a>
          </motion.div>
        </div>
      </section>

      {/* ---- Tiers ---- */}
      <section id="tiers" className="container" style={{ padding: '80px 24px' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: 32, marginBottom: 40 }}
        >
          فئاتنا الثلاث
        </motion.h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {[
            { tier: 'vip', title: 'VIP', icon: '♛', desc: 'خامات وتصاميم حصرية، لصنّاع الأناقة.' },
            { tier: 'premium', title: 'بريميوم', icon: '◆', desc: 'جودة موثوقة بلمسة عصرية يومية.' },
            { tier: 'classic', title: 'كلاسيك', icon: '❖', desc: 'بساطة أصيلة بأسعار في متناول الجميع.' },
          ].map((t, i) => (
            <motion.div
              key={t.tier}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                padding: 28,
                borderRadius: 16,
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
              }}
            >
              <span className={`tier-badge tier-${t.tier}`} style={{ marginBottom: 16 }}>
                <span aria-hidden="true">{t.icon}</span>{t.title}
              </span>
              <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8, margin: '14px 0 0' }}>{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---- New arrivals ---- */}
      <section className="container" style={{ padding: '20px 24px 90px' }}>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontSize: 32, marginBottom: 32 }}>
          وصل حديثاً
        </motion.h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 20 }}>
          {products.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
