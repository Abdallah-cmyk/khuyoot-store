// Khuyoot & Nasej — catalog aligned with uploaded product photos
export const products = [
  { id: 1, name: 'هودي أسود وبرتقالي', category: 'هودي', audience: 'رجالي', price: null, tier: 'premium', image: '/IMG-20260803-WA0030.jpg', description: 'هودي بتصميم لوني أسود وبرتقالي، مناسب للإطلالات اليومية والكاجوال، ومتوافر بمقاسات متنوعة.' },
  { id: 2, name: 'بنطلون رياضي متعدد الألوان', category: 'بنطلون رياضي', audience: 'رجالي', price: null, tier: 'classic', image: '/IMG-20260803-WA0023.jpg', description: 'بنطلون رياضي عملي بتشكيلة ألوان متعددة، مناسب للاستخدام اليومي ومتوفر بمقاسات متنوعة.' },
  { id: 3, name: 'سويت شيرت Adventure', category: 'سويت شيرت', audience: 'رجالي', price: null, tier: 'premium', image: '/IMG-20260803-WA0026.jpg', description: 'سويت شيرت بتصميم Adventure وتفاصيل كتابية، مناسب للإطلالة الكاجوال اليومية.' },
  { id: 4, name: 'بدلة رياضية كريمية', category: 'بدلة رياضية', audience: 'رجالي', price: null, tier: 'vip', image: '/IMG-20260803-WA0024.jpg', description: 'بدلة رياضية بلون كريمي هادئ، تتكون من قطعة علوية وبنطلون بتصميم عملي وأنيق.' },
  { id: 5, name: 'هوديز سادة بألوان متعددة', category: 'هودي', audience: 'رجالي', price: null, tier: 'premium', image: '/IMG-20260803-WA0027.jpg', description: 'هوديز سادة بألوان متعددة وقصة مريحة، مناسبة للاستخدام اليومي.' },
  { id: 6, name: 'سويت شيرت كريمي بسحاب نصف', category: 'سويت شيرت', audience: 'رجالي', price: null, tier: 'classic', image: '/IMG-20260803-WA0025.jpg', description: 'سويت شيرت كريمي بسحاب نصف، بتصميم بسيط وعملي للإطلالات اليومية.' },
  { id: 7, name: 'سويت شيرت بني وأخضر', category: 'سويت شيرت', audience: 'رجالي', price: null, tier: 'classic', image: '/IMG-20260803-WA0028.jpg', description: 'سويت شيرت بتدرجات بني وأخضر وتصميم عصري، مناسب للإطلالات الكاجوال.' },
  { id: 8, name: 'سويت شيرت كحلي بسحاب نصف', category: 'سويت شيرت', audience: 'أطفال', price: null, tier: 'premium', image: '/IMG-20260803-WA0029.jpg', description: 'سويت شيرت كحلي بسحاب نصف، مناسب للملابس اليومية مع توفر مقاسات حسب المخزون.' },
  { id: 9, name: 'طقم رياضي أخضر متعدد الألوان', category: 'بدلة رياضية', audience: 'رجالي', price: null, tier: 'classic', image: '/IMG-20260803-WA0031.jpg', description: 'طقم رياضي بتصميم أخضر مع تفاصيل لونية متباينة، مناسب للإطلالات الرياضية والكاجوال.' },
  { id: 10, name: 'بنطلون رياضي — صورة إضافية', category: 'بنطلون رياضي', audience: 'رجالي', price: null, tier: 'classic', image: '/IMG-20260803-WA0023(1).jpg', description: 'صورة إضافية لنفس موديل البنطلون الرياضي متعدد الألوان. يمكن حذفها عند اعتماد صور منفصلة للمنتجات.' },
];

export const categories = ['الكل', 'تيشيرت', 'قمصان', 'جينز', 'بنطلون رياضي', 'هودي', 'سويت شيرت', 'بدلة رياضية', 'أطفال'];

export const tierLabels = {
  vip: { label: 'مميز', icon: '★', className: 'tier-vip' },
  premium: { label: 'مختار', icon: '◆', className: 'tier-premium' },
  classic: { label: 'أساسي', icon: '●', className: 'tier-classic' },
};
