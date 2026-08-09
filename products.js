// Khuyoot & Nasej — initial real catalog
// Product images will be added to /public/products as the final photography is approved.
export const products = [
  { id: 1, name: 'هودي كاجوال أسود وبرتقالي', category: 'هودي', audience: 'رجالي', price: 0, swatch: 'bronze', description: 'هودي بتصميم لوني عصري، مناسب للإطلالات اليومية والكاجوال. متوفر بمقاسات متنوعة.' },
  { id: 2, name: 'بنطلون رياضي متعدد الألوان', category: 'بنطلون رياضي', audience: 'رجالي', price: 0, swatch: 'emerald', description: 'بنطلون رياضي عملي للاستخدام اليومي، متوفر بعدة ألوان ومقاسات.' },
  { id: 3, name: 'سويت شيرت بتصميم Adventure', category: 'سويت شيرت', audience: 'رجالي', price: 0, swatch: 'bronze', description: 'سويت شيرت بتصميم بسيط مع تفاصيل كتابية، مناسب للإطلالة الكاجوال.' },
  { id: 4, name: 'بدلة رياضية بلون كريمي', category: 'بدلة رياضية', audience: 'رجالي', price: 0, swatch: 'gold', description: 'طقم رياضي بلون كريمي مكوّن من قطعة علوية وبنطلون، بتصميم هادئ وأنيق.' },
  { id: 5, name: 'هودي سادة بألوان متعددة', category: 'هودي', audience: 'رجالي', price: 0, swatch: 'emerald', description: 'هودي سادة بقصة مريحة، متوفر بألوان متعددة ومقاسات متنوعة.' },
  { id: 6, name: 'تيشيرت سادة للطباعة حسب الطلب', category: 'تيشيرت', audience: 'رجالي', price: 0, swatch: 'gold', description: 'تيشيرت سادة يمكن تخصيصه بطباعة عبارة أو تصميم يختاره العميل حسب الإمكانية المتاحة.' },
  { id: 7, name: 'بنطلون جينز رجالي', category: 'جينز', audience: 'رجالي', price: 0, swatch: 'bronze', description: 'بنطلون جينز بقصات متنوعة للاستخدام اليومي، مع مقاسات متعددة.' },
  { id: 8, name: 'ملابس أطفال كاجوال', category: 'أطفال', audience: 'أطفال', price: 0, swatch: 'emerald', description: 'تشكيلة ملابس أطفال كاجوال بتصاميم وألوان متنوعة حسب المقاسات المتاحة.' },
  { id: 9, name: 'قمصان رجالية', category: 'قمصان', audience: 'رجالي', price: 0, swatch: 'gold', description: 'قمصان رجالية بتصاميم مختلفة تناسب الإطلالات اليومية وشبه الرسمية.' },
  { id: 10, name: 'تيشيرتات رجالية بتصاميم متنوعة', category: 'تيشيرت', audience: 'رجالي', price: 0, swatch: 'emerald', description: 'تيشيرتات بقصات وتصاميم متنوعة، مع خيارات متعددة للمقاسات والألوان.' },
];

export const categories = [
  'الكل', 'تيشيرت', 'قمصان', 'جينز', 'بنطلون رياضي', 'هودي', 'بدلة رياضية', 'أطفال'
];

export const tierLabels = {
  vip: { label: 'مميز', icon: '★', className: 'tier-vip' },
  premium: { label: 'مختار', icon: '◆', className: 'tier-premium' },
  classic: { label: 'أساسي', icon: '●', className: 'tier-classic' },
};
