import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products, tierLabels } from './products.js';

const WHATSAPP_NUMBER = '201091321859';

export default function Product() {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === String(id)) || products[0];
  const tier = tierLabels[product.tier] || tierLabels.classic;
  const images = product.images?.length ? product.images : (product.image ? [product.image] : []);
  const sizes = product.sizes?.length ? product.sizes : ['S','M','L','XL','XXL'];
  const colors = product.colors?.length ? product.colors : ['حسب الصورة'];
  const [size, setSize] = useState(sizes[0]);
  const [color, setColor] = useState(colors[0]);
  const [active, setActive] = useState(0);
  const [rotate, setRotate] = useState(0);

  const message = encodeURIComponent(`مرحباً خيُوط، أريد الاستفسار عن ${product.name}، اللون ${color}، المقاس ${size}.`);
  const currentImage = images[active] || product.image;

  return (
    <div className="container" style={{ padding: '48px 24px 90px', display: 'grid', gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,0.9fr)', gap: 48 }}>
      <div>
        <motion.div
          animate={{ rotateY: rotate }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          style={{ height: 500, borderRadius: 18, overflow: 'hidden', background: 'var(--surface-2)', border: '1px solid var(--border)', transformStyle: 'preserve-3d', perspective: 1200 }}
        >
          {currentImage ? <img src={currentImage} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} /> : <div style={{ height: '100%', display: 'grid', placeItems: 'center', color: 'var(--text-muted)' }}>الصورة قيد الإضافة</div>}
        </motion.div>
        <div style={{ display: 'flex', gap: 10, marginTop: 14, overflowX: 'auto', paddingBottom: 6 }}>
          {images.map((img, i) => (
            <button key={img + i} onClick={() => { setActive(i); setRotate(i % 2 ? 6 : 0); }} style={{ width: 74, height: 74, flexShrink: 0, padding: 0, borderRadius: 10, overflow: 'hidden', border: active === i ? '2px solid var(--gold)' : '1px solid var(--border)', background: 'var(--surface-2)' }}>
              <img src={img} alt={`${product.name} ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </button>
          ))}
        </div>
        {images.length > 1 && <div style={{ display: 'flex', gap: 8, marginTop: 10 }}><button className="btn-ghost" onClick={() => setRotate((r) => r - 8)}>↶ تدوير</button><button className="btn-ghost" onClick={() => setRotate((r) => r + 8)}>↷ تدوير</button></div>}
      </div>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <span className={`tier-badge ${tier.className}`}><span aria-hidden="true">{tier.icon}</span>{tier.label}</span>
        <h1 style={{ fontSize: 30, margin: '18px 0 10px' }}>{product.name}</h1>
        <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 18 }}>{product.category} · {product.audience}</div>
        <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--gold)', marginBottom: 24 }}>{product.price ? `${product.price} ج.م` : 'السعر عند الطلب'}</div>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9 }}>{product.description}</p>

        <div style={{ margin: '24px 0' }}>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 8 }}>اللون: {color}</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>{colors.map((c) => <button key={c} onClick={() => setColor(c)} style={{ padding: '8px 14px', borderRadius: 9, border: color === c ? '2px solid var(--gold)' : '1px solid var(--border)', background: color === c ? 'var(--gold-soft)' : 'var(--surface-2)', color: 'var(--text-primary)' }}>{c}</button>)}</div>
        </div>

        <div style={{ marginBottom: 28 }}>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 8 }}>المقاس: {size}</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>{sizes.map((s) => <button key={s} onClick={() => setSize(s)} style={{ minWidth: 48, height: 42, padding: '0 12px', borderRadius: 10, border: size === s ? '2px solid var(--gold)' : '1px solid var(--border)', background: size === s ? 'var(--gold-soft)' : 'var(--surface-2)', color: 'var(--text-primary)', fontWeight: 600 }}>{s}</button>)}</div>
        </div>

        <a className="btn-primary" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', marginBottom: 12, textAlign: 'center' }}>اطلب / استفسر عبر واتساب</a>
        <Link to="/shop" className="btn-ghost" style={{ display: 'block', textAlign: 'center' }}>العودة للمتجر</Link>
      </motion.div>
    </div>
  );
}
