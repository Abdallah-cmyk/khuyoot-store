import React, { useState } from 'react';

const fieldStyle = {
  width: '100%',
  background: 'var(--surface-2)',
  border: '1px solid var(--border)',
  borderRadius: 10,
  color: 'var(--text-primary)',
  padding: '13px 14px',
  fontSize: 14,
  fontFamily: 'Tajawal, sans-serif',
};

export default function Checkout() {
  const [payment, setPayment] = useState('cod');

  return (
    <div className="container" style={{ padding: '48px 24px 90px', maxWidth: 560 }}>
      <h1 style={{ fontSize: 30, marginBottom: 28 }}>إتمام الطلب</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 26 }}>
        <input style={fieldStyle} placeholder="الاسم بالكامل" />
        <input style={fieldStyle} placeholder="رقم الموبايل" />
        <input style={fieldStyle} placeholder="العنوان" />
        <input style={fieldStyle} placeholder="المحافظة" />
      </div>

      <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 10 }}>طريقة الدفع</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
        {[
          { id: 'cod', label: 'الدفع عند الاستلام' },
          { id: 'wallet', label: 'انستاباي / محفظة إلكترونية' },
        ].map((opt) => (
          <label
            key={opt.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '12px 14px',
              borderRadius: 10,
              background: 'var(--surface-2)',
              border: payment === opt.id ? '1px solid var(--gold)' : '1px solid var(--border)',
              fontSize: 14,
            }}
          >
            <input type="radio" name="payment" checked={payment === opt.id} onChange={() => setPayment(opt.id)} />
            {opt.label}
          </label>
        ))}
      </div>

      <div
        style={{
          padding: '12px 14px',
          borderRadius: 10,
          background: 'var(--emerald-soft)',
          color: 'var(--emerald)',
          fontSize: 13,
          marginBottom: 24,
        }}
      >
        الشحن عبر بوسطة لجميع محافظات مصر
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, marginBottom: 18 }}>
        <span>الإجمالي</span><span>515 ج.م</span>
      </div>
      <button className="btn-primary" style={{ width: '100%' }}>تأكيد الطلب</button>
    </div>
  );
}
