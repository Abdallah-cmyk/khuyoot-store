import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { tierLabels } from '../data/products.js';

const swatchGradients = {
  gold: 'linear-gradient(150deg,#4a3a22,#c9a227)',
  emerald: 'linear-gradient(150deg,#12433a,#16806b)',
  bronze: 'linear-gradient(150deg,#4a3320,#b0793c)',
};

// Product imagery is a placeholder today. To use a real photo, pass
// `image="/path/to/photo.jpg"` — the component swaps the gradient
// swatch for the image automatically and keeps the tilt interaction.
export default function ProductCard({ product, image }) {
  const ref = useRef(null);
  const tier = tierLabels[product.tier];

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(700px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
  }
  function handleLeave() {
    if (ref.current) ref.current.style.transform = 'perspective(700px) rotateY(0) rotateX(0)';
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
    >
      <Link to={`/product/${product.id}`} style={{ display: 'block' }}>
        <div
          ref={ref}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          style={{
            borderRadius: 14,
            overflow: 'hidden',
            background: 'var(--surface-2)',
            border: '1px solid var(--border)',
            transition: 'transform 0.25s ease',
          }}
        >
          <div
            className={image ? '' : 'skeleton-media'}
            style={{
              position: 'relative',
              height: 220,
              background: image ? `center/cover no-repeat url(${image})` : swatchGradients[product.swatch],
            }}
          >
            <span className={`tier-badge ${tier.className}`} style={{ position: 'absolute', top: 10, insetInlineEnd: 10 }}>
              <span aria-hidden="true">{tier.icon}</span>{tier.label}
            </span>
          </div>
          <div style={{ padding: '14px 16px' }}>
            <div style={{ fontSize: 13, color: 'var(--text-primary)', marginBottom: 6 }}>{product.name}</div>
            <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--gold)' }}>{product.price} ج.م</div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
