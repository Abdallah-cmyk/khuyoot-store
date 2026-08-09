import React from 'react';

const rows = [
  ['S', 'صدر 86–92 سم', 'خصر 70–76 سم'],
  ['M', 'صدر 93–99 سم', 'خصر 77–83 سم'],
  ['L', 'صدر 100–106 سم', 'خصر 84–90 سم'],
  ['XL', 'صدر 107–114 سم', 'خصر 91–98 سم'],
];

export default function SizeGuide() {
  return (
    <article className="container" style={{ padding: '56px 24px 90px', maxWidth: 860 }}>
      <p className="eyebrow">المقاسات</p>
      <h1 style={{ fontSize: 38, margin: '10px 0 24px' }}>دليل المقاسات</h1>
      <p style={{ color: 'var(--text-secondary)', lineHeight: 2 }}>
        استخدم الجدول كمرجع أولي، وراجع وصف المنتج قبل الطلب لأن القياسات قد تختلف حسب التصميم والخامة.
      </p>
      <div style={{ overflowX: 'auto', marginTop: 28 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
          <thead><tr>{['المقاس', 'محيط الصدر', 'محيط الخصر'].map((h) => <th key={h} style={{ textAlign: 'right', padding: 14, borderBottom: '1px solid var(--border)' }}>{h}</th>)}</tr></thead>
          <tbody>{rows.map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={i} style={{ padding: 14, borderBottom: '1px solid var(--border)', color: 'var(--text-secondary)' }}>{c}</td>)}</tr>)}</tbody>
        </table>
      </div>
    </article>
  );
}
