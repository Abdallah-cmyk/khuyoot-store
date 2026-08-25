import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products, tierLabels } from './products.js';

const swatchGradients = { gold: 'linear-gradient(160deg,#4a3a22,#c9a227)', emerald: 'linear-gradient(160deg,#12433a,#16806b)', bronze: 'linear-gradient(160deg,#4a3320,#b0793c)' };
const WHATSAPP_NUMBER = '201091321859';

export default function Product() {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === id) || products[0];
  const tier = tierLabels[product.tier] || tierLabels.classic;
  const images = product.images?.length ? product.images : (product.image ? [product.image] : []);
  const availableSizes = product.sizes?.length ? product.sizes : ['S','M','L','XL','XXL'];
  const availableColors = product.colors?.length ? product.colors : ['افتراضي'];
  const [size, setSize] = useState(availableSizes.includes('M') ? 'M' : availableSizes[0]);
  const [color, setColor] = useState(availableColors[0]);
  const [activeImage, setActiveImage] = useState(images[0] || '');
  const [angle, setAngle] = useState(0);
  const message = encodeURIComponent(`مرحباً خيُوط، أريد الاستفسار عن ${product.name}، المقاس ${size}، اللون ${color}.`);

  return (
    <div className="container" style={{ padding: '48px 24px 90px', display: 'grid', gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,0.9fr)', gap: 48 }}>
      <div>
        <div style={{ height: 480, borderRadius: 18, overflow: 'hidden', background: 'var(--surface-2)', border: '1px solid var(--border)', transform: `perspective(1200px) rotateY(${angle * 1.5}deg)`, transition: 'transform .35s ease' }}>
          {activeImage ? (
            <img src={activeImage} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
          ) : (
            <div style={{ width: '100%', height: '100%', background: swatchGradients[product.swatch] || swatchGradients.bronze }} />
          )}
        </div>
        {images.length > 0 && (
          <div style={{ display: 'flex', gap: 8, marginTop: 14, overflowX: 'auto', paddingBottom: 4 }}>
            {images.map((img, i) => (
              <button key={`${img}-${i}`} onClick={() => { setActiveImage(img); setAngle(i); }} aria-label={`عرض الصورة ${i + 1}`} style={{ width: 72, height: 72, flexShrink: 0, padding: 0, borderRadius: 10, overflow: 'hidden', border: activeImage === img ? '2px solid var(--gold)' : '1px solid var(--border)', background: 'var(--surface-2)', cursor: 'pointer' }}>
                <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </button>
            ))}
          </div>
        )}
        {images.length > 1 && <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 8 }}>اسحب الصور أو اختر أي زاوية لعرض تفاصيل القطعة.</p>}
      </div>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <span className={`tier-badge ${tier.className}`}><span aria-hidden="true">{tier.icon}</span> {tier.label}</span>
        <h1 style={{ fontSize: 30, margin: '18px 0 10px' }}>{product.name}</h1>
        {(product.category || product.audience) && <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 18 }}>{product.category || ''}{product.category && product.audience ? ' · ' : ''}{product.audience || ''}</div>}
        <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--gold)', marginBottom: 24 }}>{product.price ? `${product.price} ج.م` : 'السعر عند الطلب'}</div>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: 20 }}>{product.description}</p>
        {product.fabric && <div style={{ padding: 14, borderRadius: 12, background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.8, marginBottom: 22 }}><strong style={{ color: 'var(--text-primary)' }}>الخامة:</strong> {product.fabric}</div>}

        <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 8 }}>اللون: {color}</p>
        <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
          {availableColors.map((c) => <button key={c} onClick={() => setColor(c)} style={{ padding: '8px 12px', borderRadius: 9, border: color === c ? '2px solid var(--gold)' : '1px solid var(--border)', background: color === c ? 'var(--gold-soft)' : 'var(--surface-2)', color: 'var(--text-primary)', cursor: 'pointer' }}>{c}</button>)}
        </div>

        <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 8 }}>المقاس: {size}</p>
        <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
          {availableSizes.map((s) => <button key={s} onClick={() => setSize(s)} style={{ width: 48, height: 42, borderRadius: 10, border: size === s ? '2px solid var(--gold)' : '1px solid var(--border)', background: size === s ? 'var(--gold-soft)' : 'var(--surface-2)', color: 'var(--text-primary)', fontWeight: 600, cursor: 'pointer' }}>{s}</button>)}
        </div>

        <a className="btn-primary" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', marginBottom: 12, textAlign: 'center' }}>اطلب / استفسر عبر واتساب</a>
        <Link to="/shop" className="btn-ghost" style={{ display: 'block', textAlign: 'center' }}>العودة للمتجر</Link>
      </motion.div>
    </div>
  );
}
