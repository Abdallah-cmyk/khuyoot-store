import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { products, categories } from './products.js';
import ProductCard from './ProductCard.jsx';

const reviews = [
  ['سارة م.','★★★★★','الخيوط ممتازة والتغليف مرتب جدًا. وصلتني الطلبية أسرع مما توقعت.'],
  ['نور ع.','★★★★★','طقم الإبر مريح جدًا، وجودة الخيط واضحة من أول استخدام.'],
  ['ريم خ.','★★★★☆','ألوان جميلة وخدمة واتساب سريعة. بالتأكيد سأطلب مرة ثانية.'],
];

export default function Home() {
  const [filter, setFilter] = useState('all');
  const [quick, setQuick] = useState(null);
  const [search, setSearch] = useState('');
  const shown = useMemo(() => products.filter(p => (filter==='all'||p.category===filter) && p.name.toLowerCase().includes(search.toLowerCase())), [filter,search]);
  const whatsapp = '201091321859';
  const quickOrder = () => {
    if (!quick) return;
    const msg = encodeURIComponent(`مرحباً خيوط ستور، أريد طلب: ${quick.name} — السعر ${quick.price} ج.م`);
    window.open(`https://wa.me/${whatsapp}?text=${msg}`,'_blank','noopener,noreferrer');
  };
  return <div>
    <div className="announcement"><div>✨ شحن سريع لجميع المحافظات · الدفع عند الاستلام متاح · خصومات مختارة هذا الأسبوع ✨</div></div>
    <section className="hero" id="home"><div className="hero-grid"><div className="hero-copy"><span className="eyebrow">KHYOOT STORE · خيوط</span><motion.h1 initial={{opacity:0,y:18}} animate={{opacity:1,y:0}}>رحلتك الإبداعية<br/><em>تبدأ من هنا.</em></motion.h1><p>خيوط مختارة بعناية، أدوات كروشيه احترافية وكل ما تحتاجه لتحويل الفكرة إلى قطعة مصنوعة بحب.</p><div className="hero-actions"><a href="#products" className="btn-primary">تسوّق الآن ←</a><a className="btn-whatsapp" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">WhatsApp مباشر</a></div><div className="hero-proof"><span>★ 4.9/5</span><span>+1,200 صانع</span><span>شحن موثوق</span></div></div><div className="hero-art"><div className="yarn-orbit orbit-1"/><div className="yarn-orbit orbit-2"/><div className="yarn-ball">🧶</div><span className="floating-note note-1">Premium<br/>Yarns</span><span className="floating-note note-2">Handmade<br/>with love</span></div></div></section>
    <section className="trust"><div><b>✓ جودة منتقاة</b><span>خامات نثق بها</span></div><div><b>⚡ شحن سريع</b><span>تجهيز الطلب بسرعة</span></div><div><b>↻ استبدال سهل</b><span>دعم حقيقي بعد البيع</span></div><div><b>💬 دعم واتساب</b><span>نساعدك قبل الشراء</span></div></section>
    <section className="section" id="products"><div className="section-head"><div><span className="eyebrow">اختياراتنا</span><h2>اصنع شيئًا يستحق أن يُحَب</h2></div><div className="search-wrap"><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="ابحث عن خيط أو أداة..." aria-label="بحث"/>⌕</div></div><div className="filters">{categories.map(c=><button key={c.id} className={filter===c.id?'active':''} onClick={()=>setFilter(c.id)}>{c.label}</button>)}</div><div className="products-grid">{shown.map(p=><ProductCard key={p.id} product={p} onQuickView={setQuick}/>)}</div></section>
    <section className="story"><div><span className="eyebrow">لماذا خيوط؟</span><h2>أدوات جميلة.<br/>مشاريع أجمل.</h2><p>نختار المنتجات بعين الصانع: ملمس الخيط، ثبات اللون، راحة الأداة، وسهولة الاستخدام. لأن التفاصيل الصغيرة هي التي تصنع الفرق.</p><a href="#products" className="btn-ghost">اكتشف المجموعة</a></div><div className="story-card"><span>01</span><b>الخامة أولًا</b><small>منتجات عملية وليست مجرد شكل جميل.</small><span>02</span><b>اختيار أذكى</b><small>تشكيلة مختصرة بدل مئات الخيارات المربكة.</small></div></section>
    <section className="reviews section" id="reviews"><div className="center-head"><span className="eyebrow">قالوا عنا</span><h2>صنّاع سعداء، مشاريع أكثر</h2></div><div className="review-grid">{reviews.map(r=><article key={r[0]}><div className="stars">{r[1]}</div><p>“{r[2]}”</p><b>{r[0]}</b><small>عميل موثّق</small></article>)}</div></section>
    <section className="newsletter"><span className="eyebrow">خيوط ستور</span><h2>جاهز تبدأ مشروعك القادم؟</h2><p>تصفح المجموعة، اختر خامتك، واترك لنا الباقي.</p><a href="#products" className="btn-primary">ابدأ التسوق</a></section>
    {quick && <div className="modal-backdrop" onClick={()=>setQuick(null)}><div className="quick-modal" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setQuick(null)}>×</button><img src={quick.image} alt={quick.name}/><div><span className="eyebrow">{quick.categoryLabel}</span><h2>{quick.name}</h2><div className="stars">★ {quick.rating} · {quick.reviews} تقييم</div><p>{quick.description}</p><div className="swatches">{quick.colors.map(c=><span key={c} title={c}/>)}</div><strong className="modal-price">{quick.price} ج.م</strong><button className="btn-primary full" onClick={quickOrder}>اطلب عبر واتساب</button></div></div></div>}
  </div>;
}
