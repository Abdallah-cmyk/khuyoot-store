import React from 'react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل واتساب / Chat on WhatsApp"
      style={{
        position: 'fixed',
        bottom: 22,
        insetInlineStart: 22,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        background: '#25d366',
        color: '#fff',
        padding: '12px 18px',
        borderRadius: 30,
        fontSize: 13,
        fontWeight: 600,
        boxShadow: '0 6px 18px rgba(0,0,0,0.3)',
        zIndex: 60,
      }}
    >
      <span aria-hidden="true">💬</span>
      <span>واتساب / WhatsApp</span>
    </a>
  );
}
