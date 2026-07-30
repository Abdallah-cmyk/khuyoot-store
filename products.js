// Placeholder catalog — swap `swatch` for a real image URL per product
// once photography is ready (see ProductCard.jsx: image prop).
export const products = [
  { id: 1, name: 'قميص كتان', tier: 'vip', price: 450, swatch: 'gold' },
  { id: 2, name: 'بلوزة صيفية', tier: 'premium', price: 280, swatch: 'emerald' },
  { id: 3, name: 'تيشيرت أساسي', tier: 'classic', price: 150, swatch: 'bronze' },
  { id: 4, name: 'فستان صيفي حرير صناعي', tier: 'premium', price: 320, swatch: 'emerald' },
  { id: 5, name: 'جاكيت شتوي', tier: 'vip', price: 650, swatch: 'gold' },
  { id: 6, name: 'بنطلون قماش', tier: 'classic', price: 220, swatch: 'bronze' },
  { id: 7, name: 'فستان سهرة', tier: 'vip', price: 780, swatch: 'gold' },
  { id: 8, name: 'جيبة', tier: 'premium', price: 260, swatch: 'emerald' },
];

export const tierLabels = {
  vip: { label: 'VIP', icon: '♛', className: 'tier-vip' },
  premium: { label: 'بريميوم', icon: '◆', className: 'tier-premium' },
  classic: { label: 'كلاسيك', icon: '❖', className: 'tier-classic' },
};
