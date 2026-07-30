import React from 'react';
import { Link } from 'react-router-dom';
import { products, tierLabels } from '../data/products.js';

const swatchGradients = {
  gold: 'linear-gradient(150deg,#4a3a22,#c9a227)',
  emerald: 'linear-gradient(150deg,#12433a,#16806b)',
  bronze: 'linear-gradient(150deg,#4a3320,#b0793c)',
};

const cartItems = [products[3], products[2]]; // placeholder cart contents

export default function Cart() {
  const subtotal = cartItems.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="container" style={{ padding: '48px 24px 90px', maxWidth: 760 }}>
      <h1 style={{ fontSize: 30, marginBottom: 28 }}>سلتك ({cartItems.length})</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 30 }}>
        {cartItems.map((p) => {
          const tier = tierLabels[p.tier];
          return (
            <div
              key={p.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: 14,
                borderRadius: 12,
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
              }}
            >
              <div style={{ width: 72, height: 72, borderRadius: 10, background: swatchGradients[p.swatch], flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, marginBottom: 4 }}>{p.name}</div>
                <span className={`tier-badge ${tier.className}`} style={{ fontSize: 10 }}>{tier.icon} {tier.label}</span>
              </div>
              <div style={{ fontWeight: 800, color: 'var(--gold)' }}>{p.price} ج.م</div>
            </div>
          );
        })}
      </div>

      <div style={{ padding: 20, borderRadius: 14, background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: 14, marginBottom: 8 }}>
          <span>الإجمالي الفرعي</span><span>{subtotal} ج.م</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: 14, marginBottom: 18 }}>
          <span>الشحن</span><span>يُحسب عند الدفع</span>
        </div>
        <Link to="/checkout" className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>إتمام الطلب</Link>
      </div>
    </div>
  );
}
