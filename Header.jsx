import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo.jsx';
const CART_KEY='khuyoot_cart';
export default function Header(){
 const [open,setOpen]=useState(false),[count,setCount]=useState(0);
 useEffect(()=>{const load=()=>setCount(JSON.parse(localStorage.getItem(CART_KEY)||'[]').reduce((n,x)=>n+(x.quantity||0),0));load();window.addEventListener('khuyoot-cart-updated',load);window.addEventListener('storage',load);return()=>{window.removeEventListener('khuyoot-cart-updated',load);window.removeEventListener('storage',load)}},[]);
 const links=[['/','الرئيسية'],['#products','المنتجات'],['#reviews','التقييمات']];
 return <header className="site-header"><div className="header-inner"><button className="menu-btn" onClick={()=>setOpen(!open)}>☰</button><Link to="/" aria-label="Khuyoot Store"><Logo/></Link><nav className={open?'open':''}>{links.map(([to,label])=>to.startsWith('#')?<a key={to} href={to} onClick={()=>setOpen(false)}>{label}</a>:<NavLink key={to} to={to} onClick={()=>setOpen(false)}>{label}</NavLink>)}<a href="#contact">تواصل معنا</a></nav><Link to="/cart" className="cart-link" aria-label="السلة">🛒 <span>{count}</span></Link></div></header>;
}