import React from 'react';

export default function Privacy() {
  return (
    <article className="container" style={{ padding: '56px 24px 90px', maxWidth: 860 }}>
      <p className="eyebrow">الخصوصية</p>
      <h1 style={{ fontSize: 38, margin: '10px 0 24px' }}>سياسة الخصوصية</h1>
      <p style={{ color: 'var(--text-secondary)', lineHeight: 2 }}>
        نحترم خصوصية زوار خيُوط. عند استخدام الموقع قد نجمع البيانات التي يرسلها العميل بنفسه عند طلب منتج أو التواصل معنا، مثل الاسم ورقم الهاتف والعنوان، وذلك لغرض تنفيذ الطلب وخدمة العملاء.
      </p>
      <h2>ملفات تعريف الارتباط</h2>
      <p style={{ color: 'var(--text-secondary)', lineHeight: 2 }}>
        قد يستخدم الموقع ملفات تعريف الارتباط وتقنيات مشابهة لتحسين الأداء وحفظ بعض تفضيلات المستخدم. كما قد تستخدم خدمات إعلانية أو تحليلية تابعة لجهات خارجية ملفات تعريف الارتباط وفق سياساتها الخاصة.
      </p>
      <h2>الإعلانات</h2>
      <p style={{ color: 'var(--text-secondary)', lineHeight: 2 }}>
        إذا تم تفعيل الإعلانات على الموقع، فقد تستخدم Google وشركاؤها معلومات غير مباشرة عن الزيارة لتقديم وقياس الإعلانات، وفق إعدادات الخصوصية وسياسات Google المعمول بها.
      </p>
      <h2>التواصل معنا</h2>
      <p style={{ color: 'var(--text-secondary)', lineHeight: 2 }}>
        للاستفسار عن الخصوصية أو البيانات الشخصية، يمكن التواصل معنا من خلال صفحة التواصل في الموقع.
      </p>
    </article>
  );
}
