import React, { useState } from 'react';
import ProductCard from '../components/ProductCard.jsx';
import { products, tierLabels } from '../data/products.js';

export default function Shop() {
  const [filter, setFilter] = useState('all');
  const shown = filter === 'all' ? products : products.filter((p) => p.tier === filter);

  return (
    <div className="container" style={{ padding: '48px 24px 90px' }}>
      <p className="eyebrow" style={{ marginBottom: 8 }}>المتجر</p>
      <h1 style={{ fontSize: 34, marginBottom: 28 }}>كل القطع</h1>

      <div style={{ display: 'flex', gap: 10, marginBottom: 34, flexWrap: 'wrap' }}>
        <button
          onClick={() => setFilter('all')}
          className={filter === 'all' ? 'btn-primary' : 'btn-ghost'}
          style={{ fontSize: 13, padding: '9px 18px' }}
        >
          الكل
        </button>
        {Object.entries(tierLabels).map(([key, t]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={filter === key ? 'btn-primary' : 'btn-ghost'}
            style={{ fontSize: 13, padding: '9px 18px' }}
          >
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 20 }}>
        {shown.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
