import React from 'react';
const WA='201091321859';
export default function WhatsAppButton(){return <a href={`https://wa.me/${WA}?text=${encodeURIComponent('مرحباً خيوط ستور، أحتاج مساعدة في اختيار الخيوط أو الأدوات.')}`} target="_blank" rel="noreferrer" aria-label="دعم واتساب" style={{position:'fixed',bottom:20,left:20,zIndex:80,background:'#171716',color:'#fff',padding:'12px 17px',borderRadius:30,fontSize:11,fontWeight:600,boxShadow:'0 10px 30px rgba(0,0,0,.18)'}}>💬 WhatsApp</a>}
