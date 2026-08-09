import React from 'react';

export default function About() {
  return (
    <article className="container" style={{ padding: '56px 24px 90px', maxWidth: 860 }}>
      <p className="eyebrow">خيُوط</p>
      <h1 style={{ fontSize: 38, margin: '10px 0 24px' }}>من نحن</h1>
      <p style={{ color: 'var(--text-secondary)', lineHeight: 2, fontSize: 16 }}>
        خيُوط متجر أزياء مصري يقدّم قطعاً مختارة بعناية تجمع بين التصميم العملي واللمسة الأنيقة.
        نهدف إلى تقديم تجربة شراء واضحة ومريحة، مع معلومات مفهومة عن المنتجات والمقاسات والطلب والتوصيل.
      </p>
      <h2 style={{ marginTop: 40 }}>ما الذي يميز خيُوط؟</h2>
      <ul style={{ color: 'var(--text-secondary)', lineHeight: 2.2, paddingInlineStart: 24 }}>
        <li>اختيارات متنوعة تناسب الاستخدام اليومي والمناسبات.</li>
        <li>عرض واضح للأسعار والمقاسات قبل إتمام الطلب.</li>
        <li>خدمة عملاء مباشرة لمساعدة العميل قبل وبعد الشراء.</li>
        <li>تحديث مستمر للتشكيلة والمنتجات الجديدة.</li>
      </ul>
    </article>
  );
}
