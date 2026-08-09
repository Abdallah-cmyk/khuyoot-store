import React from 'react';

const articles = [
  {
    title: 'كيف تختار المقاس المناسب عند التسوق أونلاين؟',
    text: 'ابدأ بقياس قطعة ملابس مناسبة لك، ثم قارن القياسات بجدول المقاسات. لا تعتمد على حرف المقاس وحده لأن القصّات تختلف بين المنتجات.',
  },
  {
    title: 'دليل سريع للعناية بالملابس والحفاظ على شكلها',
    text: 'اقرأ تعليمات العناية على الملصق، وافصل الألوان، وتجنب الحرارة العالية عندما لا تكون مناسبة لنوع القماش. التخزين الصحيح يحافظ على القطعة فترة أطول.',
  },
  {
    title: 'أساسيات بناء خزانة ملابس عملية',
    text: 'ابدأ بقطع أساسية سهلة التنسيق، ثم أضف قطعاً مميزة تدريجياً. الهدف هو عدد أقل من القطع مع خيارات تنسيق أكثر.',
  },
];

export default function Journal() {
  return (
    <article className="container" style={{ padding: '56px 24px 90px', maxWidth: 900 }}>
      <p className="eyebrow">مجلة خيُوط</p>
      <h1 style={{ fontSize: 38, margin: '10px 0 34px' }}>أفكار ونصائح في الأزياء</h1>
      <div style={{ display: 'grid', gap: 18 }}>
        {articles.map((article) => (
          <section key={article.title} style={{ padding: 24, borderRadius: 14, background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
            <h2 style={{ marginTop: 0, fontSize: 22 }}>{article.title}</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 2, marginBottom: 0 }}>{article.text}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
