import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CART_KEY = 'khuyoot_cart';

export default function Cart() {
  const [items, setItems] = useState([]);
  const load = () => setItems(JSON.parse(localStorage.getItem(CART_KEY) || '[]'));
  useEffect(() => { load(); window.addEventListener('khuyoot-cart-updated', load); return () => window.removeEventListener('khuyoot-cart-updated', load); }, []);
  const updateQty = (id, delta) => {
    const next = items.map((item) => item.id === id ? { ...item, quantity: item.quantity + delta } : item).filter((item) => item.quantity > 0);
    setItems(next); localStorage.setItem(CART_KEY, JSON.stringify(next));
  };
  const clear = () => { setItems([]); localStorage.removeItem(CART_KEY); };
  const subtotal = items.reduce((sum, p) => sum + ((Number(p.price) || 0) * p.quantity), 0);
  return (
    <div className="container" style={{ padding: '48px 24px 90px', maxWidth: 820 }}>
      <h1 style={{ fontSize: 30, marginBottom: 10 }}>سلة المشتريات</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: 28 }}>راجع المنتجات والمقاسات قبل إرسال الطلب.</p>
      {!items.length ? (
        <div style={{ padding: 32, borderRadius: 14, background: 'var(--surface-2)', border: '1px solid var(--border)', textAlign: 'center' }}>
          <div style={{ fontSize: 18, marginBottom: 16 }}>السلة فارغة</div><Link to="/shop" className="btn-primary">تصفح المنتجات</Link>
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 24 }}>
            {items.map((p) => <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 14, borderRadius: 12, background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
              <img src={p.image} alt={p.name} style={{ width: 82, height: 82, objectFit: 'cover', borderRadius: 10 }} />
              <div style={{ flex: 1 }}><div style={{ fontSize: 14, marginBottom: 6 }}>{p.name}</div><div style={{ color: 'var(--text-muted)', fontSize: 12 }}>{p.price ? `${p.price} ج.م` : 'السعر عند الطلب'}</div></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><button onClick={() => updateQty(p.id, -1)} className="btn-ghost">−</button><span>{p.quantity}</span><button onClick={() => updateQty(p.id, 1)} className="btn-ghost">+</button></div>
            </div>)}
          </div>
          <div style={{ padding: 20, borderRadius: 14, background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}><span>الإجمالي</span><strong>{subtotal ? `${subtotal} ج.م` : 'يُحدد حسب المنتجات'}</strong></div>
            <div style={{ color: 'var(--text-muted)', fontSize: 12, marginBottom: 18 }}>الشحن يُحدد حسب المحافظة.</div>
            <Link to="/checkout" className="btn-primary" style={{ display: 'block', textAlign: 'center', marginBottom: 10 }}>إتمام الطلب</Link>
            <button onClick={clear} className="btn-ghost" style={{ width: '100%' }}>إفراغ السلة</button>
          </div>
        </>
      )}
    </div>
  );
}
