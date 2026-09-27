/** Centralized application constants. */

export const TIER_LABELS = {
  vip: { label: 'VIP', icon: '♛', className: 'tier-vip', color: 'var(--gold)' },
  premium: { label: 'بريميوم', icon: '◆', className: 'tier-premium', color: 'var(--emerald)' },
  classic: { label: 'كلاسيك', icon: '❖', className: 'tier-classic', color: 'var(--bronze)' },
};

export const CATEGORIES = ['الكل', 'VIP', 'بريميوم', 'كلاسيك'];

export const STORAGE_KEYS = {
  THEME: 'khuyoot_theme',
  CART: 'khuyoot_cart',
  USER_PREFERENCES: 'khuyoot_user_preferences',
};
