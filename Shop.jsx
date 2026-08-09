import React, { useState } from 'react';
import ProductCard from './ProductCard.jsx';
import { products, categories } from './products.js';

export default function Shop() {
  const [filter, setFilter] = useState('الكل');
  const shown = filter === 'الكل' ? products : products.filter((p) => p.category === filter);
  return (
    <div className="container" style={{ padding: '48px 24px 90px' }}>
      <p className="eyebrow" style={{ marginBottom: 8 }}>خيُوط ونسيج</p>
      <h1 style={{ fontSize: 34, marginBottom: 10 }}>الملابس</h1>
      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, maxWidth: 720, marginBottom: 28 }}>تشكيلة رجالية وأطفال تشمل التيشيرتات والقمصان والجينز والبناطيل الرياضية والهوديز والبدل الرياضية، مع موديلات ومقاسات متنوعة.</p>
      <div style={{ display: 'flex', gap: 10, marginBottom: 34, flexWrap: 'wrap' }}>
        {categories.map((category) => <button key={category} onClick={() => setFilter(category)} className={filter === category ? 'btn-primary' : 'btn-ghost'} style={{ fontSize: 13, padding: '9px 16px' }}>{category}</button>)}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 20 }}>{shown.map((p) => <ProductCard key={p.id} product={p} />)}</div>
    </div>
  );
}
