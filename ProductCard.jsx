import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { tierLabels } from './products.js';

const CART_KEY = 'khuyoot_cart';

export default function ProductCard({ product }) {
  const ref = useRef(null);
  const tier = tierLabels[product.tier];
  function handleMove(e) { const el = ref.current; if (!el) return; const rect = el.getBoundingClientRect(); const x = (e.clientX - rect.left) / rect.width - 0.5; const y = (e.clientY - rect.top) / rect.height - 0.5; el.style.transform = `perspective(700px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`; }
  function handleLeave() { if (ref.current) ref.current.style.transform = 'perspective(700px) rotateY(0) rotateX(0)'; }
  function addToCart(e) {
    e.preventDefault();
    e.stopPropagation();
    const current = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    const found = current.find((item) => item.id === product.id);
    if (found) found.quantity += 1;
    else current.push({ id: product.id, name: product.name, image: product.image, price: product.price, quantity: 1 });
    localStorage.setItem(CART_KEY, JSON.stringify(current));
    window.dispatchEvent(new Event('khuyoot-cart-updated'));
    alert('تمت إضافة المنتج إلى السلة');
  }
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }}>
      <div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave} style={{ borderRadius: 14, overflow: 'hidden', background: 'var(--surface-2)', border: '1px solid var(--border)', transition: 'transform 0.25s ease' }}>
        <Link to={`/product/${product.id}`} style={{ display: 'block' }} aria-label={`عرض ${product.name}`}>
          <div style={{ position: 'relative', height: 260, background: product.image ? `center/cover no-repeat url(${product.image})` : 'var(--surface-2)' }}>
            <span className={`tier-badge ${tier.className}`} style={{ position: 'absolute', top: 10, insetInlineEnd: 10 }}><span aria-hidden="true">{tier.icon}</span>{tier.label}</span>
          </div>
          <div style={{ padding: '14px 16px 8px' }}>
            <div style={{ fontSize: 13, color: 'var(--text-primary)', marginBottom: 6 }}>{product.name}</div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{product.category} · {product.audience}</div>
          </div>
        </Link>
        <div style={{ padding: '0 16px 14px', display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--gold)', flex: 1 }}>{product.price ? `${product.price} ج.م` : 'السعر عند الطلب'}</div>
          <button onClick={addToCart} className="btn-primary" style={{ fontSize: 12, padding: '8px 10px' }}>أضف للسلة</button>
        </div>
      </div>
    </motion.div>
  );
}
