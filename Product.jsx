import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products, tierLabels } from '../data/products.js';

const swatchGradients = {
  gold: 'linear-gradient(160deg,#4a3a22,#c9a227)',
  emerald: 'linear-gradient(160deg,#12433a,#16806b)',
  bronze: 'linear-gradient(160deg,#4a3320,#b0793c)',
};

const sizes = ['S', 'M', 'L', 'XL'];

export default function Product() {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === id) || products[0];
  const tier = tierLabels[product.tier];
  const [size, setSize] = useState('M');
  const [angle, setAngle] = useState(0); // simulated multi-angle placeholder view

  return (
    <div className="container" style={{ padding: '48px 24px 90px', display: 'grid', gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,0.9fr)', gap: 48 }}>
      <div>
        <div
          className="skeleton-media"
          style={{
            height: 480,
            borderRadius: 18,
            background: swatchGradients[product.swatch],
            filter: `hue-rotate(${angle * 6}deg)`,
            transition: 'filter 0.3s ease',
          }}
        />
        <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
          {[0, 1, 2, 3].map((i) => (
            <button
              key={i}
              onClick={() => setAngle(i)}
              aria-label={`عرض الزاوية ${i + 1}`}
              style={{
                width: 56,
                height: 56,
                borderRadius: 10,
                border: angle === i ? '2px solid var(--gold)' : '1px solid var(--border)',
                background: swatchGradients[product.swatch],
                filter: `hue-rotate(${i * 6}deg)`,
              }}
            />
          ))}
        </div>
        <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 10 }}>
          معاينة زوايا مؤقتة — تُستبدل بصور المنتج الحقيقية لاحقاً.
        </p>
      </div>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <span className={`tier-badge ${tier.className}`}><span aria-hidden="true">{tier.icon}</span>{tier.label}</span>
        <h1 style={{ fontSize: 30, margin: '18px 0 10px' }}>{product.name}</h1>
        <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--gold)', marginBottom: 24 }}>{product.price} ج.م</div>

        <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 8 }}>المقاس</p>
        <div style={{ display: 'flex', gap: 8, marginBottom: 28 }}>
          {sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              style={{
                width: 42,
                height: 42,
                borderRadius: 10,
                border: size === s ? '2px solid var(--gold)' : '1px solid var(--border)',
                background: size === s ? 'var(--gold-soft)' : 'var(--surface-2)',
                color: 'var(--text-primary)',
                fontWeight: 600,
              }}
            >
              {s}
            </button>
          ))}
        </div>

        <button className="btn-primary" style={{ width: '100%', marginBottom: 12 }}>أضف للسلة</button>
        <Link to="/cart" className="btn-ghost" style={{ display: 'block', textAlign: 'center' }}>عرض السلة</Link>

        <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--border)', fontSize: 13, color: 'var(--text-secondary)', lineHeight: 2 }}>
          <div>القماش: يُحدد حسب الفئة ({tier.label})</div>
          <div>الشحن: عبر بوسطة لكل محافظات مصر</div>
          <div>الإرجاع: خلال 14 يوم من الاستلام</div>
        </div>
      </motion.div>
    </div>
  );
}
