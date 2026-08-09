import React from 'react';

export default function Contact() {
  return (
    <article className="container" style={{ padding: '56px 24px 90px', maxWidth: 760 }}>
      <p className="eyebrow">تواصل معنا</p>
      <h1 style={{ fontSize: 38, margin: '10px 0 24px' }}>نحن هنا لمساعدتك</h1>
      <p style={{ color: 'var(--text-secondary)', lineHeight: 2, fontSize: 16 }}>
        إذا كان لديك سؤال عن منتج أو مقاس أو طلب، تواصل معنا عبر قناة التواصل المتاحة في الموقع.
      </p>
      <div style={{ marginTop: 30, padding: 24, borderRadius: 14, background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
        <h2 style={{ marginTop: 0 }}>واتساب</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9 }}>
          اضغط على زر واتساب الظاهر في الموقع لبدء محادثة مباشرة مع خدمة العملاء.
        </p>
      </div>
    </article>
  );
}
