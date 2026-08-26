// Khuyoot Store — extensible catalog model
// Foundation catalog for men's & children's apparel, designed to grow into
// women's fashion, perfumes, incense, replicas and locally produced goods.

export const PRODUCT_TYPES = {
  apparel: 'apparel',
  fragrance: 'fragrance',
  incense: 'incense',
  accessory: 'accessory',
  other: 'other',
};

export const PRODUCT_GROUPS = {
  men: { id: 'men', label: 'رجالي' },
  women: { id: 'women', label: 'حريمي' },
  kids: { id: 'kids', label: 'أطفال' },
  fragrance: { id: 'fragrance', label: 'عطور' },
  incense: { id: 'incense', label: 'بخور' },
  accessories: { id: 'accessories', label: 'إكسسوارات' },
};

const image = (src) => src;

const apparel = (data) => ({
  type: PRODUCT_TYPES.apparel,
  currency: 'EGP',
  status: 'active',
  ageGroup: 'adult',
  gender: 'men',
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  colors: [],
  tags: [],
  ...data,
});

// Inventory model deliberately supports future variants without forcing
// fragrance/incense products to pretend they have clothing sizes.
export const products = [
  apparel({ id: 'kh-hoodie-quarter-zip', name: 'هودي فاخر بنصف سحاب وقبعة وتفاصيل جلدية', category: 'hoodies', categoryLabel: 'هوديز', group: 'men', price: 850, originalPrice: 1100, badge: '♛ VIP حصري', colors: ['عنابي', 'كحلي', 'بيج', 'أسود', 'أبيض', 'رمادي فاتح'], description: 'هودي رجالي بياقة مرتفعة ونصف سحاب معدني صلب، مزود بأربطة قبعة عريضة بأطراف جلدية بنية وبطانة دافئة ناعمة.', material: '100% بوليستر عالي الكثافة معالج بتقنية Interlock', image: image('/IMG-20260803-WA0030.jpg'), images: ['/IMG-20260803-WA0030.jpg'], stock: 24, featured: true }),
  apparel({ id: 'kh-set-waffle-beige', name: 'طقم قميص وسروال بيج نسيج وافل (قطعتين)', category: 'tracksuits', categoryLabel: 'أطقم', group: 'men', price: 1250, originalPrice: 1500, badge: '♛ VIP طقم كامل', colors: ['بيج نود'], description: 'طقم فاخر مكون من قميص وسروال بنسيج وافل قطني بارز، مناسب للإطلالات الصيفية والخريفية.', material: 'قطن Waffle-Knit عالي التهوية', image: image('/IMG-20260803-WA0024.jpg'), images: ['/IMG-20260803-WA0024.jpg'], stock: 18, featured: true }),
  apparel({ id: 'kh-sweater-brown-knit', name: 'بلوفر تريكو صوفي بني مارل بياقة بولو', category: 'sweaters', categoryLabel: 'بلوفرات', group: 'men', price: 890, originalPrice: 1100, badge: '♛ VIP', colors: ['بني موكا مارل'], description: 'بلوفر تريكو دافئ بملمس ناعم وياقة بولو بثلاثة أزرار.', material: 'تريكو صوفي مخلوط (Melange Wool Knit)', image: image('/IMG-20260803-WA0028.jpg'), images: ['/IMG-20260803-WA0028.jpg'], stock: 16, featured: true }),
  apparel({ id: 'kh-polo-knit-white', name: 'قميص بولو تريكو صيفي محبوك أبيض', category: 'shirts', categoryLabel: 'قمصان وبولو', group: 'men', price: 680, originalPrice: 820, badge: '♛ VIP', colors: ['أبيض ناصع'], description: 'قميص بولو صيفي محبوك من خيوط قطنية ناعمة، أنيق ومريح للاستخدام اليومي.', material: '100% خيوط قطن ممشوط محبوكة', image: image('/IMG-20260803-WA0027.jpg'), images: ['/IMG-20260803-WA0027.jpg'], stock: 22, featured: true }),
  apparel({ id: 'kh-polo-ribbed-beige', name: 'قميص بولو صيفي تريكو مضلع بيج رملي', category: 'shirts', categoryLabel: 'قمصان وبولو', group: 'men', price: 650, originalPrice: 790, badge: '♛ VIP', colors: ['بيج رملي'], description: 'قميص بولو ناعم بتريكو مضلع طولياً وياقة مفرودة ومظهر أنيق.', material: 'تريكو ناعم عالي التهوية', image: image('/IMG-20260803-WA0029.jpg'), images: ['/IMG-20260803-WA0029.jpg'], stock: 20 }),
  apparel({ id: 'kh-coat-02', name: 'معطف خُيوط الملكي الصوفي', category: 'coats', categoryLabel: 'معاطف', group: 'men', price: 2400, originalPrice: 2900, badge: '♛ VIP حصري', colors: ['أسود ملكي', 'رمادي داكن'], sizes: ['M', 'L', 'XL'], description: 'معطف شتوي أنيق ببطانة داخلية ناعمة وتفاصيل عملية للإطلالات الرسمية.', material: '80% صوف طبيعي معالج + 20% بوليستر', image: '', images: [], stock: 8 }),
  apparel({ id: 'kh-sweatpants', name: 'بنطال جوجر ميلتون مبطن — تشكيلة 9 ألوان', category: 'sweatpants', categoryLabel: 'بناطيل رياضية', group: 'men', price: 550, originalPrice: 700, badge: '◆ بريميوم', colors: ['أسود', 'أبيض', 'أوف وايت', 'بني شوكولاتة', 'كحلي', 'أزرق ملكي', 'رمادي فاتح', 'زيتوني', 'رمادي داكن'], sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'], description: 'بنطال جوجر من خام الميلتون القطني الثقيل المبطن بظهر ناعم للدفء والراحة.', material: '80% قطن طبيعي + 20% بوليستر (Anti-Pilling)', image: image('/IMG-20260803-WA0023.jpg'), images: ['/IMG-20260803-WA0023.jpg'], stock: 31, featured: true }),
  apparel({ id: 'kh-jeans-light-blue', name: 'بنطال جينز كلاسيك بدرجة غسيل ثلجي فاتح', category: 'jeans', categoryLabel: 'جينز', group: 'men', price: 720, originalPrice: 890, badge: '◆ بريميوم', colors: ['أزرق ثلجي فاتح'], sizes: ['30', '31', '32', '33', '34', '36', '38'], description: 'جينز كلاسيك معالج بالغسيل الحجري من القطن الثقيل مع خياطة مزدوجة وأزرار معدنية.', material: '100% دنيم قطني ثقيل', image: '', images: [], stock: 19 }),
  apparel({ id: 'kh-tank-polo-white', name: 'تيشيرت كت بولو محبوك وافل أبيض', category: 'tshirts', categoryLabel: 'تيشيرتات', group: 'men', price: 490, originalPrice: 620, badge: '◆ بريميوم', colors: ['أبيض ناصع'], description: 'تيشيرت صيفي بدون أكمام بياقة بولو مفتوحة من نسيج الوافل المحبوك.', material: '100% قطن محبوك نسيج وافل', image: '', images: [], stock: 15 }),
  apparel({ id: 'kh-polo-retro-striped', name: 'قميص بولو تريكو ريترو مقلم طولي', category: 'shirts', categoryLabel: 'قمصان وبولو', group: 'men', price: 620, originalPrice: 750, badge: '◆ بريميوم', colors: ['أوف وايت مقلم بالنحاسي والزيتوني'], description: 'بولو صيفي بياقة مفتوحة وتقليم طولي مدمج بالنحاسي والزيتوني.', material: '100% قطن مخرم ومحبوك', image: '', images: [], stock: 14 }),
  apparel({ id: 'kh-sweater-ribbed-white', name: 'سويت شيرت تريكو ضلعي أبيض ناصع', category: 'sweaters', categoryLabel: 'سويت شيرت', group: 'men', price: 580, originalPrice: 720, badge: '◆ بريميوم', colors: ['أبيض ناصع'], description: 'سويت شيرت قطني بياقة دائرية ونقشة تريكو ضلعية طولية بارزة.', material: 'تريكو مضلع عالي المرونة', image: '', images: [], stock: 17 }),
  apparel({ id: 'kh-shorts-melton', name: 'شورت ميلتون أوفرسايز بجيوب وخياطة طولية', category: 'shorts', categoryLabel: 'شورتات', group: 'men', price: 380, originalPrice: 480, badge: '❖ كلاسيك', colors: ['رمادي فاتح مارل', 'أسود ملكي'], description: 'شورت مريح من خام الميلتون القطني مع خصر مرن ورباط وجيب خلفي.', material: 'ميلتون قطني صيفي ناعم', image: '', images: [], stock: 26 }),
  apparel({ id: 'kh-tee-stwd', name: 'تيشيرت أوفرسايز جرافيك STWD فحمي', category: 'tshirts', categoryLabel: 'تيشيرتات', group: 'men', price: 450, originalPrice: 550, badge: '❖ كلاسيك', colors: ['رمادي فحمي'], description: 'تيشيرت أوفرسايز رمادي فحمي بأكتاف مائلة وطباعة جرافيكية.', material: '100% قطن ثقيل 220 غرام/م²', image: '', images: [], stock: 23 }),
  apparel({ id: 'kh-tee-summer-white', name: 'تيشيرت أوفرسايز أبيض جرافيك SUMMER RHYTHMS', category: 'tshirts', categoryLabel: 'تيشيرتات', group: 'men', price: 440, originalPrice: 540, badge: '❖ كلاسيك', colors: ['أبيض ناصع'], description: 'تيشيرت أوفرسايز قطني أبيض بطباعة صيفية أمامية وخلفية.', material: '100% قطن ثقيل عالي الجودة', image: '', images: [], stock: 28 }),
];

export const categories = [
  { id: 'all', label: 'الكل' },
  { id: 'men', label: 'رجالي', group: true },
  { id: 'women', label: 'حريمي', group: true },
  { id: 'kids', label: 'أطفال', group: true },
  { id: 'tshirts', label: 'تيشيرتات' },
  { id: 'shirts', label: 'قمصان وبولو' },
  { id: 'jeans', label: 'جينز' },
  { id: 'sweatpants', label: 'بناطيل رياضية' },
  { id: 'hoodies', label: 'هوديز' },
  { id: 'tracksuits', label: 'أطقم رياضية' },
  { id: 'sweaters', label: 'بلوفرات وسويت شيرت' },
  { id: 'shorts', label: 'شورتات' },
  { id: 'fragrance', label: 'عطور', future: true },
  { id: 'incense', label: 'بخور', future: true },
  { id: 'accessories', label: 'إكسسوارات', future: true },
];

export const categoryGroups = [
  { id: 'men', label: 'رجالي', categories: ['tshirts', 'shirts', 'jeans', 'sweatpants', 'hoodies', 'tracksuits', 'sweaters', 'shorts'] },
  { id: 'women', label: 'حريمي', categories: [] },
  { id: 'kids', label: 'أطفال', categories: [] },
  { id: 'fragrance', label: 'عطور', categories: ['fragrance'] },
  { id: 'incense', label: 'بخور', categories: ['incense'] },
  { id: 'accessories', label: 'إكسسوارات', categories: ['accessories'] },
];
