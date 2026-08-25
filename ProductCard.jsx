import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { tierLabels } from './products.js';

const CART_KEY = 'khuyoot_cart';

export default function ProductCard({ product }) {
  const ref = useRef(null);
  const tier = tierLabels[product.tier] || tierLabels.classic;
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const image = product.images?.[0] || product.image || '';

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) scale(1.015)`;
  }

  function handleLeave() {
    if (ref.current) ref.current.style.transform = 'perspective(900px) rotateY(0) rotateX(0) scale(1)';
  }

  function addToCart(e) {
    e.preventDefault();
    e.stopPropagation();
    const current = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    const found = current.find((item) => item.id === product.id);
    if (found) found.quantity += qty;
    else current.push({
      id: product.id,
      name: product.name,
      image,
      price: product.price,
      quantity: qty,
      color: product.colors?.[0] || '',
      size: product.sizes?.[0] || ''
    });
    localStorage.setItem(CART_KEY, JSON.stringify(current));
    window.dispatchEvent(new Event('khuyoot-cart-updated'));
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  }

  return (
    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: .4 }}>
      <div style={{ borderRadius: 16, overflow: 'hidden', background: 'var(--surface-2)', border: '1px solid var(--border)', boxShadow: '0 10px 30px rgba(0,0,0,.08)' }}>
        <Link to={`/product/${product.id}`} style={{ display: 'block' }} aria-label={`عرض ${product.name}`}>
          <div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave} style={{ position: 'relative', height: 250, background: image ? `center/cover no-repeat url("${image}")` : 'var(--surface-2)', transition: 'transform .2s ease' }}>
            <span style={{ position: 'absolute', top: 10, insetInlineEnd: 10, padding: '5px 9px', borderRadius: 999, background: 'rgba(15,12,18,.78)', color: 'var(--gold)', fontSize: 10 }}>{product.category || tier.label}</span>
          </div>
          <div style={{ padding: '14px 16px 6px' }}>
            <div style={{ fontSize: 14, color: 'var(--text-primary)', marginBottom: 6 }}>{product.name}</div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{product.audience || 'رجالي'} · {product.sizes?.length || 0} مقاسات</div>
            <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--gold)', marginTop: 8 }}>{product.price ? `${product.price} ج.م` : 'السعر عند الطلب'}</div>
          </div>
        </Link>
        <div style={{ padding: '8px 16px 16px', display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border)', borderRadius: 9 }}>
            <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); setQty((q) => Math.max(1, q - 1)); }} style={{ width: 28, height: 30, background: 'none', border: 0, color: 'var(--text-primary)' }}>−</button>
            <span style={{ width: 24, textAlign: 'center', fontSize: 12 }}>{qty}</span>
            <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); setQty((q) => q + 1); }} style={{ width: 28, height: 30, background: 'none', border: 0, color: 'var(--text-primary)' }}>+</button>
          </div>
          <button onClick={addToCart} className="btn-primary" style={{ flex: 1, fontSize: 12, padding: '8px 10px' }}>{added ? '✓ تمت الإضافة' : 'أضف للسلة'}</button>
        </div>
      </div>
    </motion.div>
  );
}
