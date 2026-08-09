// Khuyoot catalog — products mapped to uploaded repository photos.
// Files inside /public are served from the Vite base URL.
const photo = (name) => `${import.meta.env.BASE_URL}${encodeURI(name)}`;

export const products = [
  { id: 1, name: 'هودي أسود وبرتقالي', category: 'هودي', audience: 'رجالي', price: null, tier: 'premium', colors: ['أسود', 'برتقالي'], sizes: ['S','M','L','XL','XXL'], image: photo('IMG-20260803-WA0030.jpg'), images: [photo('IMG-20260803-WA0030.jpg')], description: 'هودي بتصميم لوني أسود وبرتقالي، مناسب للإطلالات اليومية والكاجوال.' },
  { id: 2, name: 'بنطلون رياضي متعدد الألوان', category: 'بنطلون رياضي', audience: 'رجالي', price: null, tier: 'classic', colors: ['متعدد الألوان'], sizes: ['M','L','XL','XXL'], image: photo('IMG-20260803-WA0023.jpg'), images: [photo('IMG-20260803-WA0023.jpg'), photo('IMG-20260803-WA0023(1).jpg')], description: 'بنطلون رياضي عملي بتفاصيل لونية متعددة، مناسب للاستخدام اليومي.' },
  { id: 3, name: 'سويت شيرت Adventure', category: 'سويت شيرت', audience: 'رجالي', price: null, tier: 'premium', colors: ['حسب الصورة'], sizes: ['S','M','L','XL','XXL'], image: photo('IMG-20260803-WA0026.jpg'), images: [photo('IMG-20260803-WA0026.jpg')], description: 'سويت شيرت بتصميم Adventure وتفاصيل كتابية، مناسب للإطلالة الكاجوال.' },
  { id: 4, name: 'بدلة رياضية كريمية', category: 'بدلة رياضية', audience: 'رجالي', price: null, tier: 'vip', colors: ['كريمي'], sizes: ['M','L','XL','XXL'], image: photo('IMG-20260803-WA0024.jpg'), images: [photo('IMG-20260803-WA0024.jpg')], description: 'بدلة رياضية بلون كريمي هادئ، تتكون من قطعة علوية وبنطلون.' },
  { id: 5, name: 'هوديز سادة بألوان متعددة', category: 'هودي', audience: 'رجالي', price: null, tier: 'premium', colors: ['ألوان متعددة'], sizes: ['S','M','L','XL','XXL'], image: photo('IMG-20260803-WA0027.jpg'), images: [photo('IMG-20260803-WA0027.jpg')], description: 'هوديز سادة بألوان متعددة وقصة مريحة للاستخدام اليومي.' },
  { id: 6, name: 'سويت شيرت كريمي بسحاب نصف', category: 'سويت شيرت', audience: 'رجالي', price: null, tier: 'classic', colors: ['كريمي'], sizes: ['S','M','L','XL','XXL'], image: photo('IMG-20260803-WA0025.jpg'), images: [photo('IMG-20260803-WA0025.jpg')], description: 'سويت شيرت كريمي بسحاب نصف، بتصميم بسيط وعملي.' },
  { id: 7, name: 'سويت شيرت بني وأخضر', category: 'سويت شيرت', audience: 'رجالي', price: null, tier: 'classic', colors: ['بني','أخضر'], sizes: ['S','M','L','XL','XXL'], image: photo('IMG-20260803-WA0028.jpg'), images: [photo('IMG-20260803-WA0028.jpg')], description: 'سويت شيرت بتدرجات بني وأخضر وتصميم عصري.' },
  { id: 8, name: 'سويت شيرت كحلي بسحاب نصف', category: 'سويت شيرت', audience: 'أطفال', price: null, tier: 'premium', colors: ['كحلي'], sizes: ['حسب المخزون'], image: photo('IMG-20260803-WA0029.jpg'), images: [photo('IMG-20260803-WA0029.jpg')], description: 'سويت شيرت كحلي بسحاب نصف، مناسب للملابس اليومية.' },
  { id: 9, name: 'طقم رياضي أخضر متعدد الألوان', category: 'بدلة رياضية', audience: 'رجالي', price: null, tier: 'classic', colors: ['أخضر','متعدد الألوان'], sizes: ['M','L','XL','XXL'], image: photo('IMG-20260803-WA0031.jpg'), images: [photo('IMG-20260803-WA0031.jpg')], description: 'طقم رياضي أخضر مع تفاصيل لونية متباينة، مناسب للرياضة والكاجوال.' },
];

export const categories = ['الكل','تيشيرت','قمصان','جينز','بنطلون رياضي','هودي','سويت شيرت','بدلة رياضية','أطفال'];

export const tierLabels = {
  vip: { label: 'مميز', icon: '★', className: 'tier-vip' },
  premium: { label: 'مختار', icon: '◆', className: 'tier-premium' },
  classic: { label: 'أساسي', icon: '●', className: 'tier-classic' },
};
