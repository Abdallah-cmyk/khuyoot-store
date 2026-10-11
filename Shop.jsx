import React, { useMemo, useState } from 'react';
import ProductCard from './ProductCard.jsx';
import { products, categories, tierLabels } from './products.js';

const ALL = 'all';

export default function Shop() {
  const priceBounds = useMemo(() => {
    const values = products.map((product) => Number(product.price || 0));
    return {
      min: Math.min(...values),
      max: Math.max(...values),
    };
  }, []);

  const [activeCategory, setActiveCategory] = useState(ALL);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedColor, setSelectedColor] = useState(ALL);
  const [selectedSize, setSelectedSize] = useState(ALL);
  const [minPrice, setMinPrice] = useState(priceBounds.min);
  const [maxPrice, setMaxPrice] = useState(priceBounds.max);
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);

  const colorOptions = useMemo(
    () => [...new Set(products.flatMap((product) => product.colors || []))],
    []
  );

  const sizeOptions = useMemo(
    () => [...new Set(products.flatMap((product) => product.sizes || []))],
    []
  );

  const normalizedProducts = useMemo(
    () =>
      products.map((product) => ({
        ...product,
        image: product.image || product.images?.[0] || '',
        categoryLabel: product.category || tierLabels[product.tier]?.label || 'منتج',
        rating: product.rating || 4.8,
      })),
    []
  );

  const filteredProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return normalizedProducts.filter((product) => {
      const matchesCategory = activeCategory === ALL || product.category === activeCategory;
      const matchesQuery =
        !query ||
        product.name.toLowerCase().includes(query) ||
        (product.description || '').toLowerCase().includes(query) ||
        (product.fabric || '').toLowerCase().includes(query);

      const matchesColor =
        selectedColor === ALL || (product.colors || []).includes(selectedColor);

      const matchesSize =
        selectedSize === ALL || (product.sizes || []).includes(selectedSize);

      const matchesPrice =
        Number(product.price) >= Number(minPrice) && Number(product.price) <= Number(maxPrice);

      const matchesAvailability = !showOnlyAvailable || Number(product.stock || 0) > 0;

      return (
        matchesCategory &&
        matchesQuery &&
        matchesColor &&
        matchesSize &&
        matchesPrice &&
        matchesAvailability
      );
    });
  }, [activeCategory, searchTerm, selectedColor, selectedSize, minPrice, maxPrice, showOnlyAvailable, normalizedProducts]);

  const resetFilters = () => {
    setActiveCategory(ALL);
    setSearchTerm('');
    setSelectedColor(ALL);
    setSelectedSize(ALL);
    setMinPrice(priceBounds.min);
    setMaxPrice(priceBounds.max);
    setShowOnlyAvailable(false);
  };

  const updateMinPrice = (value) => {
    const nextMin = Number(value || priceBounds.min);
    setMinPrice(Math.min(nextMin, maxPrice));
  };

  const updateMaxPrice = (value) => {
    const nextMax = Number(value || priceBounds.max);
    setMaxPrice(Math.max(nextMax, minPrice));
  };

  return (
    <div style={{ padding: '32px 18px 72px', direction: 'rtl' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '18px',
          }}
        >
          <div>
            <div style={{ color: '#b89462', fontWeight: 700, letterSpacing: '0.08em', fontSize: '12px' }}>
              KHYOOT STORE · خيوط
            </div>
            <h2 style={{ margin: '6px 0 0', fontSize: '28px', color: '#171716' }}>تصفح المنتجات</h2>
          </div>

          <div
            style={{
              background: '#f6f3ee',
              border: '1px solid #e9e6df',
              borderRadius: '999px',
              padding: '10px 16px',
              fontWeight: 700,
              color: '#23724f',
            }}
          >
            {filteredProducts.length} منتج
          </div>
        </div>

        <div
          style={{
            background: '#ffffff',
            border: '1px solid #e9e6df',
            borderRadius: '18px',
            boxShadow: '0 16px 35px rgba(25,22,17,0.06)',
            padding: '18px',
            marginBottom: '26px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '14px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontWeight: 700, color: '#171716' }}>البحث</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="ابحث عن منتج أو وصف..."
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  border: '1px solid #e9e6df',
                  fontSize: '15px',
                  outline: 'none',
                  background: '#faf9f6',
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontWeight: 700, color: '#171716' }}>التصنيف</label>
              <select
                value={activeCategory}
                onChange={(event) => setActiveCategory(event.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  border: '1px solid #e9e6df',
                  fontSize: '15px',
                  outline: 'none',
                  background: '#faf9f6',
                }}
              >
                <option value={ALL}>الكل</option>
                {categories.filter((category) => category !== 'الكل').map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontWeight: 700, color: '#171716' }}>اللون</label>
              <select
                value={selectedColor}
                onChange={(event) => setSelectedColor(event.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  border: '1px solid #e9e6df',
                  fontSize: '15px',
                  outline: 'none',
                  background: '#faf9f6',
                }}
              >
                <option value={ALL}>الكل</option>
                {colorOptions.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontWeight: 700, color: '#171716' }}>المقاس</label>
              <select
                value={selectedSize}
                onChange={(event) => setSelectedSize(event.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  border: '1px solid #e9e6df',
                  fontSize: '15px',
                  outline: 'none',
                  background: '#faf9f6',
                }}
              >
                <option value={ALL}>الكل</option>
                {sizeOptions.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontWeight: 700, color: '#171716' }}>السعر من</label>
              <input
                type="number"
                min={priceBounds.min}
                max={maxPrice}
                value={minPrice}
                onChange={(event) => updateMinPrice(event.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  border: '1px solid #e9e6df',
                  fontSize: '15px',
                  outline: 'none',
                  background: '#faf9f6',
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontWeight: 700, color: '#171716' }}>السعر إلى</label>
              <input
                type="number"
                min={minPrice}
                max={priceBounds.max}
                value={maxPrice}
                onChange={(event) => updateMaxPrice(event.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  border: '1px solid #e9e6df',
                  fontSize: '15px',
                  outline: 'none',
                  background: '#faf9f6',
                }}
              />
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              marginTop: '18px',
            }}
          >
            <label
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                fontWeight: 600,
                color: '#171716',
              }}
            >
              <input
                type="checkbox"
                checked={showOnlyAvailable}
                onChange={(event) => setShowOnlyAvailable(event.target.checked)}
              />
              المنتجات المتاحة فقط
            </label>

            <button
              type="button"
              onClick={resetFilters}
              style={{
                border: '1px solid #b89462',
                background: '#fff',
                color: '#b89462',
                padding: '10px 18px',
                borderRadius: '999px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              إعادة التعيين
            </button>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '22px',
            }}
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div
            style={{
              background: '#fff',
              border: '1px solid #e9e6df',
              borderRadius: '18px',
              padding: '30px 18px',
              textAlign: 'center',
              color: '#171716',
            }}
          >
            <strong style={{ display: 'block', marginBottom: '8px', fontSize: '20px' }}>لا توجد منتجات مطابقة للفلتر</strong>
            <span style={{ color: '#77746e' }}>جرّب تغيير البحث أو إعادة تعيين الفلاتر.</span>
          </div>
        )}
      </div>
    </div>
  );
}
