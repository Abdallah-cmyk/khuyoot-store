import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CART_KEY = 'khuyoot_cart';

export default function ProductCard({ product, onQuickView }) {
  const [added, setAdded] = useState(false);
  const image = product.image || '';
  const rating = product.rating ?? null;
  const addToCart = (e) => {
    e.preventDefault(); e.stopPropagation();
    const current = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    const found = current.find((item) => item.id === product.id);
    if (found) found.quantity += 1;
    else current.push({ id:product.id, name:product.name, image, price:product.price, quantity:1, color:product.colors?.[0] || '' });
    localStorage.setItem(CART_KEY, JSON.stringify(current));
    window.dispatchEvent(new Event('khuyoot-cart-updated'));
    setAdded(true); setTimeout(() => setAdded(false), 1100);
  };
  return (
    <motion.article initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-40px'}} transition={{duration:.35}} className="product-card">
      <div className="product-media" onClick={() => onQuickView?.(product)}>
        {image ? <img src={image} alt={product.name} loading="lazy" /> : <div className="product-image-placeholder" aria-label="صورة المنتج غير متوفرة">Khuyoot</div>}
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <button className="quick-btn" onClick={(e)=>{e.stopPropagation();onQuickView?.(product)}} aria-label="عرض سريع">عرض سريع</button>
      </div>
      <div className="product-body">
        <div className="product-meta"><span>{product.categoryLabel}</span>{rating !== null && <span className="stars">★ {rating}</span>}</div>
        <Link to={`/product/${product.id}`} className="product-title">{product.name}</Link>
        <div className="stock">{product.stock < 10 ? `باقي ${product.stock} فقط` : 'متوفر في المخزون'}</div>
        <div className="product-bottom"><div><strong>{product.price} ج.م</strong>{product.originalPrice && <del>{product.originalPrice} ج.م</del>}</div><button className="add-btn" onClick={addToCart}>{added ? '✓' : 'أضف للسلة'}</button></div>
      </div>
    </motion.article>
  );
}
