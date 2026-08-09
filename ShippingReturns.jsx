import React from 'react';

export default function ShippingReturns() {
  return (
    <article className="container" style={{ padding: '56px 24px 90px', maxWidth: 860 }}>
      <p className="eyebrow">الخدمة</p>
      <h1 style={{ fontSize: 38, margin: '10px 0 24px' }}>الشحن والاسترجاع</h1>
      <h2>الشحن</h2>
      <p style={{ color: 'var(--text-secondary)', lineHeight: 2 }}>
        يتم تجهيز الطلب بعد تأكيد بياناته، وتختلف مدة التوصيل حسب المحافظة وشركة الشحن وتوفر المنتج. يتم توضيح أي تفاصيل إضافية للعميل عند تأكيد الطلب.
      </p>
      <h2>الاسترجاع والاستبدال</h2>
      <p style={{ color: 'var(--text-secondary)', lineHeight: 2 }}>
        يمكن طلب الاسترجاع أو الاستبدال وفق حالة المنتج وشروط الطلب. يجب أن يكون المنتج في حالته المناسبة للاسترجاع، وقد تنطبق استثناءات على بعض المنتجات.
      </p>
      <h2>المشكلات في الطلب</h2>
      <p style={{ color: 'var(--text-secondary)', lineHeight: 2 }}>
        إذا وصل الطلب بحالة غير صحيحة أو كان هناك اختلاف في المنتج، تواصل معنا بأسرع وقت عبر خدمة العملاء حتى نتمكن من معالجة المشكلة.
      </p>
    </article>
  );
}
