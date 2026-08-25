# Khuyoot Store — خيوط

متجر إلكتروني سريع وحديث للخيوط، الصوف، أدوات الكروشيه وإكسسوارات الحرف اليدوية.

## التقنية
- React 18 + Vite
- Framer Motion للحركات الخفيفة
- React Router
- CSS responsive mobile-first
- LocalStorage للسلة
- WhatsApp checkout بدون backend
- جاهز للنشر على Vercel

## التشغيل
```bash
npm install
npm run dev
```

## الإنتاج
```bash
npm run build
npm run preview
```

## الوظائف
- شريط عروض متحرك
- Header ثابت ومتجاوب
- بحث وفلاتر فورية
- بطاقات منتجات مع السعر والتقييم والمخزون
- Quick View
- صفحة تفاصيل المنتج واختيار اللون
- سلة مشتريات مع تعديل الكمية
- Checkout من صفحة واحدة
- إرسال الطلب كاملًا إلى WhatsApp
- زر WhatsApp عالمي
- تقييمات وثقة اجتماعية
- تصميم RTL عربي ومتوافق مع الهاتف والكمبيوتر

## ملاحظة الصور
بيانات المنتجات تستخدم صورًا مؤقتة من Unsplash. عند توفر صور المنتجات الحقيقية، ضعها داخل `public/images` وعدّل `products.js` لاستخدام المسارات المحلية لتحسين الاعتمادية والسرعة.
