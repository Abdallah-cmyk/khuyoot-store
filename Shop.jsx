import React,{useMemo,useState} from 'react';
import ProductCard from './ProductCard.jsx';
import {products,categories,categoryGroups} from './products.js';

export default function Shop(){
  const [filter,setFilter]=useState('all'),[q,setQ]=useState('');
  const shown=useMemo(()=>products.filter(p=>{
    const group=categoryGroups.find(g=>g.id===filter);
    const matchesFilter=filter==='all'||p.category===filter||(group?.categories?.includes(p.category));
    return matchesFilter&&p.name.includes(q);
  }),[filter,q]);
  return <div className="section">
    <div className="section-head"><div><span className="eyebrow">Khuyoot & Nasej</span><h1 style={{fontSize:42,margin:'12px 0'}}>كل المنتجات</h1><p style={{color:'var(--muted)',fontSize:12}}>ملابس مختارة بعناية، مع بنية قابلة للتوسع للأقسام والمنتجات الجديدة.</p></div><div className="search-wrap"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="بحث..." aria-label="بحث عن المنتجات"/></div></div>
    <div className="filters">{categories.map(c=><button key={c.id} className={filter===c.id?'active':''} onClick={()=>setFilter(c.id)}>{c.label}</button>)}</div>
    <div className="products-grid">{shown.map(p=><ProductCard key={p.id} product={p}/>)}</div>
    {!shown.length&&<div className="empty-state"><h2>لا توجد منتجات مطابقة</h2><p>جرّب قسمًا آخر أو غيّر كلمة البحث.</p></div>}
  </div>
}
