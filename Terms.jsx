import React from 'react';

export default function Terms() {
  return (
    <article className="container" style={{ padding: '56px 24px 90px', maxWidth: 860 }}>
      <p className="eyebrow">الشروط</p>
      <h1 style={{ fontSize: 38, margin: '10px 0 24px' }}>الشروط والأحكام</h1>
      <h2>المنتجات والأسعار</h2>
      <p style={{ color: 'var(--text-secondary)', lineHeight: 2 }}>
        نسعى إلى عرض معلومات وأسعار دقيقة للمنتجات. قد تتغير الأسعار أو التشكيلة دون إشعار مسبق، وتُطبق المعلومات الظاهرة عند تأكيد الطلب.
      </p>
      <h2>الطلبات</h2>
      <p style={{ color: 'var(--text-secondary)', lineHeight: 2 }}>
        إرسال الطلب لا يعني بالضرورة قبوله نهائياً قبل تأكيد توفر المنتج وبيانات التسليم. قد نتواصل مع العميل لتأكيد التفاصيل.
      </p>
      <h2>الاستخدام المقبول</h2>
      <p style={{ color: 'var(--text-secondary)', lineHeight: 2 }}>
        يُمنع استخدام الموقع بطريقة مخالفة للقانون أو بهدف الإضرار بالموقع أو المستخدمين أو أنظمته التقنية.
      </p>
    </article>
  );
}
