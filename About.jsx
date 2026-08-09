import React from 'react';

export default function About() {
  return (
    <article className="container" style={{ padding: '56px 24px 90px', maxWidth: 860 }}>
      <p className="eyebrow">K H Y O O T &amp; N A S E J</p>
      <h1 style={{ fontSize: 38, margin: '10px 0 24px' }}>خيُوط ونسيج</h1>
      <p style={{ color: 'var(--text-secondary)', lineHeight: 2, fontSize: 16 }}>
        خيُوط ونسيج متجر أزياء يهتم بالملابس الرجالية وملابس الأطفال، ويقدم تشكيلة متنوعة من القطع اليومية والكاجوال بموديلات وقصات ومقاسات متعددة.
      </p>
      <p style={{ color: 'var(--text-secondary)', lineHeight: 2, fontSize: 16 }}>
        تشمل التشكيلة التي نعمل على توفيرها التيشيرتات، القمصان، بناطيل الجينز، البناطيل الرياضية، الهوديز، والبدل الرياضية، إضافة إلى موديلات موسعة وخيارات للأطفال. كما نتيح للتيشيرتات السادة إمكانية إضافة عبارات أو تصاميم حسب الطلب عندما تكون خدمة الطباعة متاحة.
      </p>
      <h2 style={{ marginTop: 40 }}>تشكيلتنا</h2>
      <ul style={{ color: 'var(--text-secondary)', lineHeight: 2.2, paddingInlineStart: 24 }}>
        <li>ملابس رجالية بمقاسات متنوعة.</li>
        <li>ملابس أطفال بتصاميم وألوان مختلفة.</li>
        <li>تيشيرتات سادة وقابلة للتخصيص بالطباعة حسب الطلب.</li>
        <li>هوديز وسويت شيرتات وبدل رياضية.</li>
        <li>قمصان وبناطيل جينز وبناطيل رياضية.</li>
      </ul>
    </article>
  );
}
