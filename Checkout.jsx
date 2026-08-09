import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CART_KEY = 'khuyoot_cart';
const WHATSAPP = '201091321859';
const fieldStyle = { width: '100%', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--text-primary)', padding: '13px 14px', fontSize: 14, fontFamily: 'Tajawal, sans-serif' };

export default function Checkout() {
  const [payment, setPayment] = useState('cod');
  const [form, setForm] = useState({ name: '', phone: '', address: '', city: '' });
  const items = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
  const subtotal = items.reduce((sum, p) => sum + ((Number(p.price) || 0) * p.quantity), 0);
  const submit = () => {
    if (!items.length) return alert('السلة فارغة. أضف منتجًا أولًا.');
    if (!form.name || !form.phone || !form.address || !form.city) return alert('يرجى إكمال بيانات الطلب.');
    const lines = items.map((p) => `- ${p.name} × ${p.quantity}${p.price ? ` — ${p.price} ج.م` : ''}`).join('\n');
    const text = `طلب جديد من خيُوط ونسيج\n\nالاسم: ${form.name}\nالهاتف: ${form.phone}\nالمحافظة: ${form.city}\nالعنوان: ${form.address}\nالدفع: ${payment === 'cod' ? 'الدفع عند الاستلام' : 'إنستاباي / محفظة إلكترونية'}\n\nالمنتجات:\n${lines}\n\nالإجمالي: ${subtotal ? `${subtotal} ج.م` : 'يُحدد حسب المنتجات'}\nالشحن: يُحدد حسب المحافظة`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };
  if (!items.length) return <div className="container" style={{ padding: '70px 24px 120px', maxWidth: 560, textAlign: 'center' }}><h1>السلة فارغة</h1><p style={{ color: 'var(--text-secondary)', margin: '14px 0 24px' }}>أضف المنتجات التي تريدها ثم عد لإتمام الطلب.</p><Link to="/shop" className="btn-primary">تصفح المنتجات</Link></div>;
  return <div className="container" style={{ padding: '48px 24px 90px', maxWidth: 560 }}>
    <h1 style={{ fontSize: 30, marginBottom: 10 }}>إتمام الطلب</h1><p style={{ color: 'var(--text-secondary)', marginBottom: 28 }}>بعد التأكيد سيتم فتح واتساب وإرسال تفاصيل الطلب إلى خيُوط ونسيج.</p>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 26 }}>
      {Object.entries({ name: 'الاسم بالكامل', phone: 'رقم الموبايل', address: 'العنوان', city: 'المحافظة' }).map(([key, placeholder]) => <input key={key} value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })} style={fieldStyle} placeholder={placeholder} />)}
    </div>
    <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 10 }}>طريقة الدفع</p>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>{[{ id: 'cod', label: 'الدفع عند الاستلام' }, { id: 'wallet', label: 'إنستاباي / محفظة إلكترونية' }].map((opt) => <label key={opt.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', borderRadius: 10, background: 'var(--surface-2)', border: payment === opt.id ? '1px solid var(--gold)' : '1px solid var(--border)', fontSize: 14 }}><input type="radio" name="payment" checked={payment === opt.id} onChange={() => setPayment(opt.id)} />{opt.label}</label>)}</div>
    <div style={{ padding: '14px', borderRadius: 10, background: 'var(--emerald-soft)', color: 'var(--emerald)', fontSize: 13, marginBottom: 24 }}>الشحن يُحدد حسب المحافظة وشركة الشحن.</div>
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, marginBottom: 18 }}><span>الإجمالي</span><span>{subtotal ? `${subtotal} ج.م` : 'يُحدد حسب المنتجات'}</span></div>
    <button onClick={submit} className="btn-primary" style={{ width: '100%' }}>تأكيد الطلب عبر واتساب</button>
  </div>;
}
