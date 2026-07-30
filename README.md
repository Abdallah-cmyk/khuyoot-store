# خيُوط (Khuyoot) — متجر أزياء فاخر

مشروع React + Vite، بهوية بصرية فاخرة (Dark/Light mode)، خلفية ثلاثية الأبعاد بـ Three.js
(عبر react-three-fiber)، حركات تمرير بـ Framer Motion، وثلاث فئات منتجات (VIP / بريميوم / كلاسيك).

## التشغيل محلياً

```bash
npm install
npm run dev
```

يفتح الموقع على `http://localhost:5173`.

## البناء للنشر

```bash
npm run build
```

الملفات الناتجة في مجلد `dist/`، جاهزة للرفع على أي استضافة (Vercel, Netlify, GitHub Pages...).

## رفع المشروع على GitHub

هذه المحادثة مش متصلة بحسابك على GitHub، فمش هينفع أرفع الملفات مباشرة —
لكن الخطوات بسيطة من جهازك:

```bash
cd khuyoot-store
git init
git add .
git commit -m "Initial commit: خيُوط storefront"
git branch -M main
git remote add origin https://github.com/<username>/<repo-name>.git
git push -u origin main
```

لو عندك مستودع فاضي جاهز على GitHub، استبدل الرابط في `git remote add` برابط مستودعك.

بديل: لو حملت [Claude Code](https://claude.com/claude-code) أو ربطت GitHub كـ connector
في المحادثة، أقدر أساعدك تدفع الكود مباشرة من غير خطوات يدوية.

## هيكل المشروع

```
src/
  components/    Header, Footer, Logo (SVG), Hero3D (Three.js), ProductCard, WhatsAppButton
  pages/         Home, Shop, Product, Cart, Checkout
  data/          products.js — بيانات المنتجات التجريبية والفئات
  ThemeContext.jsx  منطق الوضع الليلي/النهاري
  index.css      نظام الألوان والخطوط (design tokens)
```

## استبدال الصور المؤقتة بصور حقيقية

كل صور المنتجات حالياً عبارة عن تدرجات لونية (skeleton placeholders) حسب الفئة.
لاستبدالها بصورة حقيقية، مرّر خاصية `image` لمكوّن `ProductCard`:

```jsx
<ProductCard product={product} image="/images/product-1.jpg" />
```

وحدّث بيانات كل منتج في `src/data/products.js` بنفس الطريقة.
