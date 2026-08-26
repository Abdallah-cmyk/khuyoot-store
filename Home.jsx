import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { products, categories, categoryGroups } from './products.js';
import ProductCard from './ProductCard.jsx';

const reviews = [
  ['عميل خ.','★★★★★','تشكيلة الملابس مرتبة وجودة المنتجات ممتازة، والطلب عبر واتساب كان سريعًا.'],
  ['محمد ع.','★★★★★','الصور والأسعار واضحة، وتجربة الطلب بسيطة جدًا.'],
  ['أحمد س.','★★★★☆','خدمة واتساب سريعة والتشكيلة قابلة للتوسع بشكل ممتاز.'],
];

export default function Home() {
  const [filter, setFilter] = useState('all');
  const [quick, setQuick] = useState(null);
  const [search, setSearch] = useState('');
  const shown = useMemo(() => products.filter(p => {
    const group = categoryGroups.find(g => g.id === filter);
    const matchesFilter = filter === 'all' || p.category === filter || group?.categories?.includes(p.category);
    return matchesFilter && p.name.toLowerCase().includes(search.toLowerCase());
  }), [filter, search]);
  const whatsapp = '201091321859';
  const quickOrder = () => {
    if (!quick) return;
    const msg = encodeURIComponent(`مرحباً خيوط ونسيج، أريد طلب: ${quick.name} — السعر ${quick.price} ج.م`);
    window.open(`https://wa.me/${whatsapp}?text=${msg}`,'_blank','noopener,noreferrer');
  };
  return <div>
    <div className="announcement"><div>✨ شحن سريع لجميع المحافظات · الدفع عند الاستلام متاح · تشكيلة جديدة باستمرار ✨</div></div>
    <section className="hero" id="home"><div className="hero-grid"><div className="hero-copy"><span className="eyebrow">KHYOOT & NASEJ · خيوط ونسيج</span><motion.h1 initial={{opacity:0,y:18}} animate={{opacity:1,y:0}}>اختيارك يبدأ<br/><em>من هنا.</em></motion.h1><p>ملابس رجالية مختارة بعناية اليوم، مع بنية متجر جاهزة للتوسع مستقبلًا إلى الحريمي والأطفال والعطور والبخور والإكسسوارات.</p><div className="hero-actions"><a href="#products" className="btn-primary">تسوّق الآن ←</a><a className="btn-whatsapp" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">WhatsApp مباشر</a></div><div className="hero-proof"><span>★ جودة مختارة</span><span>طلب سريع</span><span>شحن موثوق</span></div></div><div className="hero-art"><div className="yarn-orbit orbit-1"/><div className="yarn-orbit orbit-2"/><div className="yarn-ball">🧵</div><span className="floating-note note-1">Premium<br/>Wear</span><span className="floating-note note-2">Khuyoot<br/>& Nasej</span></div></div></section>
    <section className="trust"><div><b>✓ جودة منتقاة</b><span>منتجات نختارها بعناية</span></div><div><b>⚡ شحن سريع</b><span>تجهيز الطلب بسرعة</span></div><div><b>↻ استبدال سهل</b><span>دعم حقيقي بعد البيع</span></div><div><b>💬 دعم واتساب</b><span>نساعدك قبل الشراء</span></div></section>
    <section className="section" id="products"><div className="section-head"><div><span className="eyebrow">اختياراتنا</span><h2>قطع تستحق أن تُلبس</h2></div><div className="search-wrap"><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="ابحث عن منتج..." aria-label="بحث"/>⌕</div></div><div className="filters">{categories.map(c=><button key={c.id} className={filter===c.id?'active':''} onClick={()=>setFilter(c.id)}>{c.label}</button>)}</div><div className="products-grid">{shown.map(p=><ProductCard key={p.id} product={p} onQuickView={setQuick}/>)}</div></section>
    <section className="story"><div><span className="eyebrow">الرؤية</span><h2>متجر واحد.<br/>وأقسام بلا حدود.</h2><p>نبدأ بالملابس الرجالية، لكن بنية الكتالوج مصممة من البداية لتستوعب الملابس الحريمي والأطفال والعطور والبخور والإكسسوارات وغيرها دون إعادة بناء المتجر.</p><a href="#products" className="btn-ghost">اكتشف المجموعة</a></div><div className="story-card"><span>01</span><b>المنتج أولًا</b><small>بيانات واضحة وصور وأسعار ومقاسات.</small><span>02</span><b>توسع محسوب</b><small>إضافة أقسام جديدة بدون كسر البنية الحالية.</small></div></section>
    <section className="reviews section" id="reviews"><div className="center-head"><span className="eyebrow">تجربة الشراء</span><h2>بسيطة وسريعة</h2></div><div className="review-grid">{reviews.map(r=><article key={r[0]}><div className="stars">{r[1]}</div><p>“{r[2]}”</p><b>{r[0]}</b><small>عميل</small></article>)}</div></section>
    <section className="newsletter"><span className="eyebrow">خيوط ونسيج</span><h2>جاهز لاختيار القطعة القادمة؟</h2><p>تصفح المجموعة، اختر ما يناسبك، وتواصل معنا مباشرة عند الحاجة.</p><a href="#products" className="btn-primary">ابدأ التسوق</a></section>
    {quick && <div className="modal-backdrop" onClick={()=>setQuick(null)}><div className="quick-modal" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setQuick(null)}>×</button>{quick.image ? <img src={quick.image} alt={quick.name}/> : <div className="product-image-placeholder">Khuyoot</div>}<div><span className="eyebrow">{quick.categoryLabel}</span><h2>{quick.name}</h2>{quick.rating && <div className="stars">★ {quick.rating}</div>}<p>{quick.description}</p><div className="swatches">{quick.colors?.map(c=><span key={c} title={c}/>)}</div><strong className="modal-price">{quick.price} ج.م</strong><button className="btn-primary full" onClick={quickOrder}>اطلب عبر واتساب</button></div></div></div>}
  </div>;
}
