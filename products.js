// Khuyoot & Nasej — initial catalog
export const products = [
  { id: 1, name: 'هودي كاجوال أسود وبرتقالي', category: 'هودي', audience: 'رجالي', price: null, tier: 'premium', swatch: 'bronze', image: '/IMG-20260803-WA0023(1).jpg', description: 'هودي بتصميم لوني عصري، مناسب للإطلالات اليومية والكاجوال. متوفر بمقاسات متنوعة.' },
  { id: 2, name: 'بنطلون رياضي متعدد الألوان', category: 'بنطلون رياضي', audience: 'رجالي', price: null, tier: 'classic', swatch: 'emerald', image: '/IMG-20260803-WA0023.jpg', description: 'بنطلون رياضي عملي للاستخدام اليومي، متوفر بعدة ألوان ومقاسات.' },
  { id: 3, name: 'سويت شيرت بتصميم Adventure', category: 'سويت شيرت', audience: 'رجالي', price: null, tier: 'premium', swatch: 'bronze', image: '/IMG-20260803-WA0024.jpg', description: 'سويت شيرت بتصميم بسيط مع تفاصيل كتابية، مناسب للإطلالة الكاجوال.' },
  { id: 4, name: 'بدلة رياضية بلون كريمي', category: 'بدلة رياضية', audience: 'رجالي', price: null, tier: 'vip', swatch: 'gold', image: '/IMG-20260803-WA0025.jpg', description: 'طقم رياضي بلون كريمي مكوّن من قطعة علوية وبنطلون، بتصميم هادئ وأنيق.' },
  { id: 5, name: 'هودي سادة بألوان متعددة', category: 'هودي', audience: 'رجالي', price: null, tier: 'premium', swatch: 'emerald', image: '/IMG-20260803-WA0026.jpg', description: 'هودي سادة بقصة مريحة، متوفر بألوان متعددة ومقاسات متنوعة.' },
  { id: 6, name: 'تيشيرت سادة للطباعة حسب الطلب', category: 'تيشيرت', audience: 'رجالي', price: null, tier: 'vip', swatch: 'gold', image: '/IMG-20260803-WA0027.jpg', description: 'تيشيرت سادة يمكن تخصيصه بطباعة عبارة أو تصميم يختاره العميل حسب الإمكانية المتاحة.' },
  { id: 7, name: 'بنطلون جينز رجالي', category: 'جينز', audience: 'رجالي', price: null, tier: 'classic', swatch: 'bronze', image: '/IMG-20260803-WA0028.jpg', description: 'بنطلون جينز بقصات متنوعة للاستخدام اليومي، مع مقاسات متعددة.' },
  { id: 8, name: 'ملابس أطفال كاجوال', category: 'أطفال', audience: 'أطفال', price: null, tier: 'premium', swatch: 'emerald', image: '/IMG-20260803-WA0029.jpg', description: 'تشكيلة ملابس أطفال كاجوال بتصاميم وألوان متنوعة حسب المقاسات المتاحة.' },
  { id: 9, name: 'قمصان رجالية', category: 'قمصان', audience: 'رجالي', price: null, tier: 'classic', swatch: 'gold', image: '/IMG-20260803-WA0030.jpg', description: 'قمصان رجالية بتصاميم مختلفة تناسب الإطلالات اليومية وشبه الرسمية.' },
  { id: 10, name: 'تيشيرتات رجالية بتصاميم متنوعة', category: 'تيشيرت', audience: 'رجالي', price: null, tier: 'classic', swatch: 'emerald', image: '/IMG-20260803-WA0031.jpg', description: 'تيشيرتات بقصات وتصاميم متنوعة، مع خيارات متعددة للمقاسات والألوان.' },
];

export const categories = ['الكل', 'تيشيرت', 'قمصان', 'جينز', 'بنطلون رياضي', 'هودي', 'سويت شيرت', 'بدلة رياضية', 'أطفال'];

export const tierLabels = {
  vip: { label: 'مميز', icon: '★', className: 'tier-vip' },
  premium: { label: 'مختار', icon: '◆', className: 'tier-premium' },
  classic: { label: 'أساسي', icon: '●', className: 'tier-classic' },
};
