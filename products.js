// =========================================================
// بيانات متجر خُيوط (Khyoot Store) — النسخة النهائية الشاملة
// =========================================================

export const tierLabels = {
  vip: { label: 'VIP', icon: '♛', className: 'tier-vip', color: 'var(--gold)' },
  premium: { label: 'بريميوم', icon: '◆', className: 'tier-premium', color: 'var(--emerald)' },
  classic: { label: 'كلاسيك', icon: '❖', className: 'tier-classic', color: 'var(--bronze)' },
};

export const products = [
  // --- المنتجات الساسية ---
  {
    id: 'kh-hoodie-quarter-zip', name: 'هودي فاخر بنصف سحاب وقبعة وتفاصيل جلدية', tier: 'vip', swatch: 'gold', price: 850, originalPrice: 1100,
    badge: '♛ VIP حصري', colors: ['عنابي', 'كحلي', 'بيج', 'أسود', 'أبيض', 'رمادي فاتح'], sizes: ['S','M','L','XL','XXL'],
    description: 'هودي رجالي بياقة مرتفعة ونصف سحاب معدني صلب، مزود بأربطة قبعة عريضة بأطراف جلدية ومقبض سحاب متناسق. بطانة صوفية حرارية ناعمة لعزل حراري ممتاز.',
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

  // --- المنتجات الجديدة المستخرجة من Google Drive ---
  {
    id: 'kh-graphic-tee-met-you', name: 'تيشيرت جرافيك "The Day I Met You"', tier: 'premium', swatch: 'emerald', price: 320, originalPrice: 450,
    badge: '◆ بريميوم', colors: ['أبيض', 'أوف وايت'], sizes: ['S', 'M', 'L', 'XL'],
    description: 'تيشيرت عصري بطباعة جرافيك مميزة تحمل عبارة رومانسيّة. يتميز بقصة مريحة وأكمام قصيرة، مثالي للإطلالات اليومية.',
    fabric: '100% قطن ناعم وممشوط', 
    images: [
      'https://drive.google.com/uc?export=view&id=1zZedr7OGh8XFdPwkIrj4qEhlPPnTY5nW',
      'https://drive.google.com/uc?export=view&id=18xFetVPVn95wEn5RFawFfMXkbBgjkol4',
      'https://drive.google.com/uc?export=view&id=1XeH2gk2rBJnBDfe2qzlxLurPxEjx2jyT',
      'https://drive.google.com/uc?export=view&id=1zrKGYSs0x3njs_z12fysPecENE9hkL44'
    ]
  },
  {
    id: 'kh-sweatpants-club-fleece', name: 'بنطال جوجر رياضي Club Fleece بشعار مطرز', tier: 'premium', swatch: 'emerald', price: 490, originalPrice: 650,
    badge: '◆ بريميوم', colors: ['أسود', 'رمادي فاتح', 'كحلي', 'زيتي'], sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'بنطال جوجر رياضي فائق الراحة من تشكيلة Club Fleece مصنوع من نسيج سميك مبطن بالصوف (شاردون 3 خيوط) لدفء استثنائي.',
    fabric: 'مزيج قطن ممتاز عالي الكثافة (مبطن حرارياً)', 
    images: [
      'https://drive.google.com/uc?export=view&id=1vVK-StHyu6lo9Z5VIM5nX3nOqbzBXUAI',
      'https://drive.google.com/uc?export=view&id=1--GspJEZ2Cd7HZgr6EGW0LOiicoctlhD',
      'https://drive.google.com/uc?export=view&id=1pU88WkBwoqtd-_XfuARoiGBJ5b9vkL5I',
      'https://drive.google.com/uc?export=view&id=1Uw6ousOfQRhnLiB6rK6IaRaQ_hRsIODX',
      'https://drive.google.com/uc?export=view&id=14vgEaFzP-WfqSyrGJTS2IlpXEUJcgl4a'
    ]
  },
  {
    id: 'kh-winter-padded-jacket', name: 'جاكيت شتوي كاجوال مبطن عالي الأداء', tier: 'vip', swatch: 'gold', price: 1150, originalPrice: 1400,
    badge: '♛ VIP حصري', colors: ['أسود', 'كحلي داكن'], sizes: ['M', 'L', 'XL', 'XXL'],
    description: 'جاكيت شتوي مصمم لتحمل الأجواء الباردة بأناقة مع بطانة داخلية لحفظ الحرارة وطبقة خارجية مقاومة للرياح.',
    fabric: 'نسيج خارجي مقاوم للرياح مع بطانة حرارية', 
    images: [
      'https://drive.google.com/uc?export=view&id=1NBgju9pxBtb5bkXtt0sFpeKCxZv1ifB2',
      'https://drive.google.com/uc?export=view&id=1euKRHoLkjeCVdTDuEM9GgqrxtdSwDRx6',
      'https://drive.google.com/uc?export=view&id=19NApxmnlgQA3X4w4U9ax2hEamPR2v_f-',
      'https://drive.google.com/uc?export=view&id=1BkuzlcbkfE4U9TvSqNmMyVwZnhwBhJEq'
    ]
  },
  {
    id: 'kh-classic-elegant-shirt', name: 'قميص كلاسيكي أنيق بقصة عصرية', tier: 'classic', swatch: 'bronze', price: 380, originalPrice: 480,
    badge: '❖ كلاسيك', colors: ['أزرق فاتح', 'أبيض'], sizes: ['S', 'M', 'L', 'XL'],
    description: 'قميص يجمع بين البساطة والأناقة بقصة عصرية تناسب أوقات العمل والمناسبات الرسمية الخفيفة.',
    fabric: 'مزيج قطن وكتان لتهوية مثالية', 
    images: [
      'https://drive.google.com/uc?export=view&id=1V3onruzXB8yB4cToXEp5VilJCVq67ls1',
      'https://drive.google.com/uc?export=view&id=1h2s45gjSWDH81lDSrmovYP4OiZAx9npx',
      'https://drive.google.com/uc?export=view&id=1Z6XtHh6kAe-QG3Nsy3PoPl354crMKOvc'
    ]
  },
  {
    id: 'kh-light-casual-hoodie', name: 'هودي كاجوال خفيف بلمسة عصرية', tier: 'classic', swatch: 'bronze', price: 420, originalPrice: 550,
    badge: '❖ كلاسيك', colors: ['رمادي', 'أسود'], sizes: ['M', 'L', 'XL'],
    description: 'هودي خفيف الوزن مناسب للأجواء المعتدلة والخريفية مع قبعة مريحة وجيب أمامي (كانغرو).',
    fabric: 'قطن ناعم مع نسبة من الإيلاستين', 
    images: [
      'https://drive.google.com/uc?export=view&id=1VLnw2WqUJgKDQihKDHUJKknkuiisqpml',
      'https://drive.google.com/uc?export=view&id=1JclKQ2JNoqaY0bblSwyZODedASbhBjbh'
    ]
  },
  {
    id: 'kh-active-tee-poly', name: 'تيشيرت أكتيف دراي الرياضي (Active-Fit)', tier: 'classic', swatch: 'bronze', price: 250, originalPrice: 350,
    badge: '❖ كلاسيك', colors: ['متعدد الألوان'], sizes: ['M', 'L', 'XL'],
    description: 'تيشيرت رياضي خفيف الوزن وعالي الأداء لتوفير أقصى درجات المرونة والتهوية أثناء التمارين.',
    fabric: '100% بوليستر رياضي معالج (100% POLYESTER)', 
    images: [
      'https://drive.google.com/uc?export=view&id=1NYBmJCscg23NCKqhdYZgpkoHx1TKh7sY',
      'https://drive.google.com/uc?export=view&id=1YL8OM0zCnhgvezwqXaOuk4D6--D_hnYL'
    ]
  },
  {
    id: 'kh-garnier-micellar-water', name: 'ماء ميسيلار غارنييه بفيتامين سي - 100 مل', tier: 'premium', swatch: 'emerald', price: 180, originalPrice: 220,
    badge: '◆ عناية وجمال', colors: ['شفاف'], sizes: ['100ml'],
    description: 'ماء ميسيلار منظف ومزيل للمكياج غني بفيتامين سي للبشرة الباهتة لإعادة الإشراقة الطبيعية.',
    fabric: 'خالي من العطور والكحول', 
    images: [
      'https://drive.google.com/uc?export=view&id=1uh9e0KkifJvbDJ0OgjKVuI8kBbipXrS2'
    ]
  }
];

export const categories = ['الكل', 'VIP', 'بريميوم', 'كلاسيك'];