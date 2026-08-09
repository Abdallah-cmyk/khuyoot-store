import React from 'react';

const WHATSAPP_NUMBER = '201091321859';
const message = encodeURIComponent('مرحباً خيُوط ونسيج، أريد الاستفسار عن أحد المنتجات والمقاسات المتاحة.');

export default function Contact() {
  return (
    <article className="container" style={{ padding: '56px 24px 90px', maxWidth: 760 }}>
      <p className="eyebrow">تواصل معنا</p>
      <h1 style={{ fontSize: 38, margin: '10px 0 24px' }}>خيُوط ونسيج</h1>
      <p style={{ color: 'var(--text-secondary)', lineHeight: 2, fontSize: 16 }}>
        للاستفسار عن المنتجات، الألوان، المقاسات، التخصيص بالطباعة أو تفاصيل الطلب، تواصل معنا مباشرة عبر واتساب.
      </p>
      <div style={{ marginTop: 30, padding: 24, borderRadius: 14, background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
        <h2 style={{ marginTop: 0 }}>واتساب</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9 }}>رقم خدمة العملاء: 01091321859</p>
        <a className="btn-primary" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: 8 }}>ابدأ المحادثة</a>
      </div>
    </article>
  );
}
