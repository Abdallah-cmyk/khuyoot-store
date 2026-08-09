import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products, tierLabels } from './products.js';

const swatchGradients = { gold: 'linear-gradient(160deg,#4a3a22,#c9a227)', emerald: 'linear-gradient(160deg,#12433a,#16806b)', bronze: 'linear-gradient(160deg,#4a3320,#b0793c)' };
const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
const WHATSAPP_NUMBER = '201091321859';

export default function Product() {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === id) || products[0];
  const tier = tierLabels[product.tier];
  const [size, setSize] = useState('M');
  const [angle, setAngle] = useState(0);
  const message = encodeURIComponent(`مرحباً خيُوط ونسيج، أريد الاستفسار عن ${product.name}، المقاس ${size}.`);
  return (
    <div className="container" style={{ padding: '48px 24px 90px', display: 'grid', gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,0.9fr)', gap: 48 }}>
      <div>
        <div style={{ height: 480, borderRadius: 18, background: product.image ? `center/contain no-repeat url(${product.image})` : swatchGradients[product.swatch], backgroundColor: 'var(--surface-2)', transition: 'filter 0.3s ease', filter: `hue-rotate(${product.image ? 0 : angle * 6}deg)` }} />
        <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>{[0,1,2,3].map((i) => <button key={i} onClick={() => setAngle(i)} aria-label={`عرض الزاوية ${i + 1}`} style={{ width: 56, height: 56, borderRadius: 10, border: angle === i ? '2px solid var(--gold)' : '1px solid var(--border)', background: product.image ? `center/cover no-repeat url(${product.image})` : swatchGradients[product.swatch], filter: product.image ? 'none' : `hue-rotate(${i * 6}deg)` }} />)}</div>
        {!product.image && <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 10 }}>الصورة النهائية لهذا المنتج ستُضاف عند اعتماد صور المنتجات.</p>}
      </div>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <span className={`tier-badge ${tier.className}`}><span aria-hidden="true">{tier.icon}</span>{tier.label}</span>
        <h1 style={{ fontSize: 30, margin: '18px 0 10px' }}>{product.name}</h1>
        <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 18 }}>{product.category} · {product.audience}</div>
        <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--gold)', marginBottom: 24 }}>{product.price ? `${product.price} ج.م` : 'السعر عند الطلب'}</div>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9 }}>{product.description}</p>
        <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 8 }}>المقاس</p>
        <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>{sizes.map((s) => <button key={s} onClick={() => setSize(s)} style={{ width: 48, height: 42, borderRadius: 10, border: size === s ? '2px solid var(--gold)' : '1px solid var(--border)', background: size === s ? 'var(--gold-soft)' : 'var(--surface-2)', color: 'var(--text-primary)', fontWeight: 600 }}>{s}</button>)}</div>
        <a className="btn-primary" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', marginBottom: 12, textAlign: 'center' }}>اطلب / استفسر عبر واتساب</a>
        <Link to="/shop" className="btn-ghost" style={{ display: 'block', textAlign: 'center' }}>العودة للمتجر</Link>
        <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--border)', fontSize: 13, color: 'var(--text-secondary)', lineHeight: 2 }}><div>الخامة والتفاصيل: تُذكر في وصف كل منتج عند اعتماد البيانات النهائية.</div><div>الشحن: داخل مصر حسب المحافظة وشركة الشحن.</div><div>الاسترجاع: وفق سياسة الاسترجاع المنشورة في الموقع.</div></div>
      </motion.div>
    </div>
  );
}
