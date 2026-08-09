import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { tierLabels } from './products.js';

const CART_KEY = 'khuyoot_cart';

export default function ProductCard({ product }) {
  const ref = useRef(null);
  const tier = tierLabels[product.tier] || tierLabels.classic;
  const image = product.images?.[0] || product.image;
  function handleMove(e) { const el = ref.current; if (!el) return; const r = el.getBoundingClientRect(); const x = (e.clientX-r.left)/r.width-.5; const y=(e.clientY-r.top)/r.height-.5; el.style.transform=`perspective(900px) rotateY(${x*8}deg) rotateX(${-y*8}deg) translateY(-3px)`; }
  function handleLeave() { if (ref.current) ref.current.style.transform='perspective(900px) rotateY(0) rotateX(0) translateY(0)'; }
  function addToCart(e) { e.preventDefault(); e.stopPropagation(); const current=JSON.parse(localStorage.getItem(CART_KEY)||'[]'); const found=current.find(i=>i.id===product.id); if(found) found.quantity+=1; else current.push({id:product.id,name:product.name,image,price:product.price,quantity:1}); localStorage.setItem(CART_KEY,JSON.stringify(current)); window.dispatchEvent(new Event('khuyoot-cart-updated')); }
  return (
    <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.45}}>
      <div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave} style={{borderRadius:14,overflow:'hidden',background:'var(--surface-2)',border:'1px solid var(--border)',transition:'transform .2s ease',willChange:'transform'}}>
        <Link to={`/product/${product.id}`} style={{display:'block'}} aria-label={`عرض ${product.name}`}>
          <div style={{position:'relative',height:280,background:'var(--surface-2)'}}>{image && <img src={image} alt={product.name} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>}<span className={`tier-badge ${tier.className}`} style={{position:'absolute',top:10,insetInlineEnd:10}}>{tier.icon} {tier.label}</span></div>
          <div style={{padding:'14px 16px 8px'}}><div style={{fontSize:13,color:'var(--text-primary)',marginBottom:6}}>{product.name}</div><div style={{fontSize:12,color:'var(--text-muted)'}}>{product.category} · {product.audience}</div></div>
        </Link>
        <div style={{padding:'0 16px 14px',display:'flex',gap:8,alignItems:'center'}}><div style={{fontSize:14,fontWeight:800,color:'var(--gold)',flex:1}}>{product.price?`${product.price} ج.م`:'السعر عند الطلب'}</div><button onClick={addToCart} className="btn-primary" style={{fontSize:12,padding:'8px 10px'}}>أضف للسلة</button></div>
      </div>
    </motion.div>
  );
}
