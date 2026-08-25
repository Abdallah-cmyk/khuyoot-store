// Khuyoot Store — premium yarns, threads & handmade crafting tools
// Mock catalog ready to replace with real inventory.

const image = (seed) => `https://images.unsplash.com/photo-${seed}?auto=format&fit=crop&w=900&q=82`;

export const products = [
  { id:'cotton-01', name:'خيط قطن مصري Premium 100g', category:'cotton', categoryLabel:'خيوط قطن', price:165, originalPrice:195, rating:4.9, reviews:128, stock:18, badge:'الأكثر مبيعًا', colors:['أوف وايت','بيج','أسود','زيتي'], image:image('1610701596007-11502861dcfa'), description:'خيط قطن ناعم ومتوازن، مناسب للكروشيه والتطريز والمشاريع اليومية.', material:'100% قطن ممشط', weight:'100 جم', featured:true },
  { id:'cotton-02', name:'خيط قطن Mercerie Soft 50g', category:'cotton', categoryLabel:'خيوط قطن', price:95, originalPrice:110, rating:4.8, reviews:74, stock:32, badge:'جديد', colors:['وردي غباري','أبيض','سماوي','موف'], image:image('1582213782179-e0d53f98f2ca'), description:'خيط خفيف وناعم بتدرج منتظم، مثالي للقطع الصغيرة والهدايا اليدوية.', material:'قطن ناعم مخلوط', weight:'50 جم', featured:true },
  { id:'wool-01', name:'صوف Merino دافئ 100g', category:'wool', categoryLabel:'صوف', price:285, originalPrice:320, rating:4.9, reviews:96, stock:11, badge:'Premium', colors:['كريمي','بني موكا','رمادي','نبيتي'], image:image('1544947950-fa07a98d237f'), description:'ألياف صوف فاخرة ودافئة بملمس ناعم، مناسبة للشتاء والقطع المحبوكة الراقية.', material:'Merino Wool', weight:'100 جم', featured:true },
  { id:'wool-02', name:'صوف Chunky سميك 200g', category:'wool', categoryLabel:'صوف', price:330, originalPrice:380, rating:4.7, reviews:52, stock:8, badge:'كمية محدودة', colors:['بيج','رمادي فاتح','أسود'], image:image('1616486338819-3d3d0f9d5f9f'), description:'خيط سميك سريع الإنجاز للبطانيات والملابس الشتوية والديكور اليدوي.', material:'Wool Blend', weight:'200 جم', featured:false },
  { id:'tools-01', name:'طقم إبر كروشيه 9 قطع', category:'tools', categoryLabel:'أدوات كروشيه', price:420, originalPrice:480, rating:4.9, reviews:143, stock:14, badge:'اختيار المحترفين', colors:['أسود مطفي'], image:image('1596464716127-f2a82984de30'), description:'طقم متدرج المقاسات بمقابض مريحة للاستخدام الطويل، داخل حقيبة تنظيم أنيقة.', material:'Aluminium + Soft Grip', weight:'9 مقاسات', featured:true },
  { id:'tools-02', name:'مجموعة إبر تريكو دائرية', category:'tools', categoryLabel:'أدوات كروشيه', price:360, originalPrice:410, rating:4.8, reviews:61, stock:20, badge:'مفضلة', colors:['فضي'], image:image('1452860606245-08befc0ff44b'), description:'إبر دائرية بانزلاق سلس، مناسبة للتريكو الدائري والقطع المتوسطة والكبيرة.', material:'Stainless Steel', weight:'6 مقاسات', featured:false },
  { id:'accessories-01', name:'علامات غرز خشبية — 20 قطعة', category:'accessories', categoryLabel:'إكسسوارات', price:110, originalPrice:130, rating:4.8, reviews:38, stock:27, badge:'عملي', colors:['خشبي طبيعي'], image:image('1513519245088-0e12902e5a38'), description:'علامات غرز خفيفة وسهلة الفتح، تساعدك على تتبع الصفوف والمقاسات.', material:'خشب طبيعي', weight:'20 قطعة', featured:false },
  { id:'accessories-02', name:'مقص خياطة دقيق Premium', category:'accessories', categoryLabel:'إكسسوارات', price:245, originalPrice:280, rating:4.9, reviews:47, stock:9, badge:'Premium', colors:['أسود'], image:image('1583778176473-5c5ed5cfd0f4'), description:'مقص صغير حاد للحياكة والخيوط والتشطيبات الدقيقة، بتصميم مريح لليد.', material:'Steel', weight:'10 سم', featured:false },
  { id:'cotton-03', name:'خيط كتان طبيعي 100g', category:'cotton', categoryLabel:'خيوط قطن', price:210, originalPrice:240, rating:4.8, reviews:29, stock:16, badge:'طبيعي', colors:['رملي','عاجي','طوبي'], image:image('1523381210434-271e8be1f52b'), description:'ملمس طبيعي وشكل أنيق للمشاريع التي تحتاج لمظهر ريفي راقٍ وثبات ممتاز.', material:'Linen Blend', weight:'100 جم', featured:true },
  { id:'wool-03', name:'خيط ألوان متدرجة Ombre 150g', category:'wool', categoryLabel:'صوف', price:310, originalPrice:350, rating:4.9, reviews:83, stock:13, badge:'ترند', colors:['بحري','غروب','لافندر'], image:image('1531058020387-3be344556be6'), description:'تدرج لوني ناعم يضيف تأثيرًا بصريًا مميزًا للبطانيات والشالات والحقائب.', material:'Acrylic Premium', weight:'150 جم', featured:true },
];

export const categories = [
  { id:'all', label:'الكل' },
  { id:'cotton', label:'خيوط قطن' },
  { id:'wool', label:'صوف' },
  { id:'tools', label:'أدوات كروشيه' },
  { id:'accessories', label:'إكسسوارات' },
];
