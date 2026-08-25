// Khuyoot catalog — products mapped to uploaded repository photos.
// Product photos live directly inside /public.
// Using absolute root paths keeps the image URLs stable on Vercel and other root-domain deployments.
const photo = (name) => `/${encodeURI(name)}`;

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
  vip: { label: 'VIP', icon: '♛', className: 'tier-vip', color: 'var(--gold)' },
  premium: { label: 'بريميوم', icon: '◆', className: 'tier-premium', color: 'var(--emerald)' },
  classic: { label: 'كلاسيك', icon: '❖', className: 'tier-classic', color: 'var(--bronze)' },
};

export const products = [
  {
    id: 'kh-hoodie-quarter-zip', name: 'هودي فاخر بنصف سحاب وقبعة وتفاصيل جلدية', tier: 'vip', swatch: 'gold', price: 850, originalPrice: 1100,
    badge: '♛ VIP حصري', colors: ['عنابي', 'كحلي', 'بيج', 'أسود', 'أبيض', 'رمادي فاتح'], sizes: ['S','M','L','XL','XXL'],
    description: 'هودي رجالي بياقة مرتفعة ونصف سحاب معدني صلب، مزود بأربطة قبعة عريضة بأطراف جلدية بنية ومقبض سحاب متناسق. بطانة صوفية حرارية ناعمة لعزل حراري ممتاز.',
    fabric: '100% بوليستر عالي الكثافة معالج بتقنية Interlock', images: ['/IMG-20260803-WA0030.jpg']
  },
  {
    id: 'kh-set-waffle-beige', name: 'طقم قميص وسروال بيج نسيج وافل (قطعتين)', tier: 'vip', swatch: 'gold', price: 1250, originalPrice: 1500,
    badge: '♛ VIP طقم كامل', colors: ['بيج نود'], sizes: ['M','L','XL','XXL'],
    description: 'طقم صيفي/خريفي فاخر مكون من قميص بليزر بأزرار وجيوب صدر مع سروال مريح مصنع من نسيج الوافل القطني البارز ثلاثي الأبعاد لتهوية ممتازة.',
    fabric: 'قطن الوافل البارز (Waffle-Knit Cotton) عالي التهوية', images: ['/IMG-20260803-WA0024.jpg']
  },
  {
    id: 'kh-sweater-brown-knit', name: 'بلوفر تريكو صوفي بني مارل بياقة بولو', tier: 'vip', swatch: 'gold', price: 890, originalPrice: 1100,
    badge: '♛ VIP حصرية', colors: ['بني موكا مارل'], sizes: ['M','L','XL','XXL'],
    description: 'بلوفر كلاسيكي تريكو محبوك من ألياف الصوف الناعمة الدافئة بدرجة البني المارل الغني مع ياقة بولو بثلاثة أزرار وأكمام ملمومة.',
    fabric: 'تريكو صوفي مخلوط (Melange Wool Knit)', images: ['/IMG-20260803-WA0028.jpg']
  },
  {
    id: 'kh-polo-knit-white', name: 'قميص بولو تريكو صيفي محبوك أبيض', tier: 'vip', swatch: 'gold', price: 680, originalPrice: 820,
    badge: '♛ VIP', colors: ['أبيض ناصع'], sizes: ['S','M','L','XL','XXL'],
    description: 'قميص بولو صيفي محبوك من خيوط قطنية ناعمة، بتصميم أنيق ومريح مناسب للإطلالات اليومية.',
    fabric: '100% خيوط قطن ممشوط محبوكة', images: ['/IMG-20260803-WA0027.jpg']
  },
  {
    id: 'kh-polo-ribbed-beige', name: 'قميص بولو صيفي تريكو مضلع بيج رملي', tier: 'vip', swatch: 'gold', price: 650, originalPrice: 790,
    badge: '♛ VIP', colors: ['بيج رملي'], sizes: ['M','L','XL','XXL'],
    description: 'قميص بولو ناعم محبوك من التريكو المضلع طولياً بياقة مفرودة بدون أزرار ومظهر أنيق وفاخر.',
    fabric: 'تريكو ناعم عالي التهوية', images: ['/IMG-20260803-WA0029.jpg']
  },
  {
    id: 'kh-coat-02', name: 'معطف خيُوط الملكي الصوفي', tier: 'vip', swatch: 'gold', price: 2400, originalPrice: 2900,
    badge: '♛ VIP حصري', colors: ['أسود ملكي','رمادي داكن'], sizes: ['M','L','XL'],
    description: 'معطف شتوي بقوام أنيق، ببطانة داخلية ناعمة وتفاصيل عملية مناسبة للإطلالات الرسمية.',
    fabric: '80% صوف طبيعي معالج + 20% بوليستر', images: []
  },
  {
    id: 'kh-sweatpants', name: 'بنطال جوجر ميلتون مبطن — تشكيلة 9 ألوان', tier: 'premium', swatch: 'emerald', price: 550, originalPrice: 700,
    badge: '◆ بريميوم', colors: ['أسود','أبيض','أوف وايت','بني شوكولاتة','كحلي','أزرق ملكي','رمادي فاتح','زيتوني','رمادي داكن'], sizes: ['M','L','XL','XXL','XXXL'],
    description: 'بنطال جوجر من خام الميلتون القطني الثقيل المبطن بظهر ناعم للدفء والراحة. حزام خصر مرن وأطراف مطاطية وتطريز جانبي ثابت.',
    fabric: '80% قطن طبيعي + 20% بوليستر (Anti-Pilling)', images: ['/IMG-20260803-WA0023.jpg']
  },
  {
    id: 'kh-jeans-light-blue', name: 'بنطال جينز كلاسيك بدرجة غسيل ثلجي فاتح', tier: 'premium', swatch: 'emerald', price: 720, originalPrice: 890,
    badge: '◆ بريميوم', colors: ['أزرق ثلجي فاتح'], sizes: ['30','31','32','33','34','36','38'],
    description: 'جينز كلاسيك معالج بالغسيل الحجري من القطن الثقيل مع خياطة نحاسية مزدوجة وأزرار معدنية.',
    fabric: '100% دنيم قطني ثقيل (Cotton Denim)', images: []
  },
  {
    id: 'kh-tank-polo-white', name: 'تيشيرت كت بولو محبوك وافل أبيض', tier: 'premium', swatch: 'emerald', price: 490, originalPrice: 620,
    badge: '◆ بريميوم', colors: ['أبيض ناصع'], sizes: ['S','M','L','XL','XXL'],
    description: 'تيشيرت صيفي بدون أكمام بياقة بولو مفتوحة مصنع من نسيج الوافل المحبوك والبارز لتهوية عالية.',
    fabric: '100% قطن محبوك نسيج وافل', images: []
  },
  {
    id: 'kh-polo-retro-striped', name: 'قميص بولو تريكو ريترو مقلم طولي', tier: 'premium', swatch: 'emerald', price: 620, originalPrice: 750,
    badge: '◆ بريميوم', colors: ['أوف وايت مقلم بالنحاسي والزيتوني'], sizes: ['S','M','L','XL','XXL'],
    description: 'بولو صيفي بياقة مفتوحة محبوك بتقليم طولي مدمج بالنحاسي والزيتوني لتهوية ممتازة وإطلالة ريترو.',
    fabric: '100% قطن مخرم ومحبوك (Open-Weave Cotton)', images: []
  },
  {
    id: 'kh-sweater-ribbed-white', name: 'سويت شيرت تريكو ضلعي أبيض ناصع', tier: 'premium', swatch: 'emerald', price: 580, originalPrice: 720,
    badge: '◆ بريميوم', colors: ['أبيض ناصع'], sizes: ['S','M','L','XL','XXL'],
    description: 'سويت شيرت قطني بياقة دائرية ونقشة تريكو ضلعية طولية بارزة مع شعار معدني ناعم على الصدر.',
    fabric: 'تريكو مضلع (Rib-Knit Fabric) عالي المرونة', images: []
  },
  {
    id: 'kh-shorts-melton', name: 'شورت ميلتون أوفرسايز بجيوب وخياطة طولية', tier: 'classic', swatch: 'bronze', price: 380, originalPrice: 480,
    badge: '❖ كلاسيك', colors: ['رمادي فاتح مارل','أسود ملكي'], sizes: ['M','L','XL','XXL'],
    description: 'شورت صيفي مريح من خام الميلتون القطني مع حزام خصر مرن برباط تعديل وخياطة أمامية طولية وجيب خلفي.',
    fabric: 'ميلتون قطني صيفي ناعم وبدون تبطين حراري', images: []
  },
  {
    id: 'kh-tee-stwd', name: 'تيشيرت أوفرسايز جرافيك STWD فحمي', tier: 'classic', swatch: 'bronze', price: 450, originalPrice: 550,
    badge: '❖ كلاسيك', colors: ['رمادي فحمي'], sizes: ['S','M','L','XL','XXL'],
    description: 'تيشيرت أوفرسايز رمادي فحمي بأكتاف مائلة وطباعة جرافيكية، مناسب للإطلالات الكاجوال.',
    fabric: '100% قطن ثقيل بكثافة 220 غرام/م²', images: []
  },
  {
    id: 'kh-tee-summer-white', name: 'تيشيرت أوفرسايز أبيض جرافيك SUMMER RHYTHMS', tier: 'classic', swatch: 'bronze', price: 440, originalPrice: 540,
    badge: '❖ كلاسيك', colors: ['أبيض ناصع'], sizes: ['S','M','L','XL','XXL'],
    description: 'تيشيرت أوفرسايز قطن أبيض نقي بطباعة صيفية أمامية وخلفية، مناسب للإطلالات اليومية.',
    fabric: '100% قطن ثقيل عالي الجودة', images: []
  },
];

export const categories = ['الكل', 'VIP', 'بريميوم', 'كلاسيك'];
