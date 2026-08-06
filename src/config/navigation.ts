import {
  BookOpen, Sword, Shield, Skull, Sparkles, Swords, Trophy, Scroll, Gauge, Bell,
  Home, Info,
  type LucideIcon,
} from 'lucide-react';

export const NAVIGATION_CONFIG = [
  { key: 'home', labelKey: 'nav_home', path: '/', icon: Home, showInHeader: false, showInSidebar: true, showInFooter: false, sitemap: true, priority: 1, changeFrequency: 'daily' },
  { key: 'guides', labelKey: 'nav_guides', path: '/guides', icon: BookOpen, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'weapons', labelKey: 'nav_weapons', path: '/weapons', icon: Sword, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'phantom-edges', labelKey: 'nav_phantomEdges', path: '/phantom-edges', icon: Shield, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'boss-guide', labelKey: 'nav_bossGuide', path: '/boss-guide', icon: Skull, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'endings', labelKey: 'nav_endings', path: '/endings', icon: Sparkles, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'combat', labelKey: 'nav_combat', path: '/combat', icon: Swords, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.8, changeFrequency: 'weekly' },
  { key: 'tier-list', labelKey: 'nav_tierList', path: '/tier-list', icon: Trophy, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.8, changeFrequency: 'weekly' },
  { key: 'lore', labelKey: 'nav_lore', path: '/lore', icon: Scroll, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.8, changeFrequency: 'weekly' },
  { key: 'difficulty', labelKey: 'nav_difficulty', path: '/difficulty', icon: Gauge, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.7, changeFrequency: 'weekly' },
  { key: 'updates', labelKey: 'nav_updates', path: '/updates', icon: Bell, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.7, changeFrequency: 'weekly' },
  { key: 'about', labelKey: 'nav_about', path: '/about', icon: Info, showInHeader: false, showInSidebar: false, showInFooter: true, sitemap: true, priority: 0.7, changeFrequency: 'monthly' },
  { key: 'sitemap', labelKey: 'nav_sitemap', path: '/sitemap', icon: Scroll, showInHeader: false, showInSidebar: false, showInFooter: true, sitemap: false, priority: 0.5, changeFrequency: 'monthly' },
  { key: 'privacy-policy', labelKey: 'nav_privacyPolicy', path: '/privacy-policy', icon: Info, showInHeader: false, showInSidebar: false, showInFooter: true, sitemap: true, priority: 0.4, changeFrequency: 'yearly' },
  { key: 'terms-of-service', labelKey: 'nav_termsOfService', path: '/terms-of-service', icon: Info, showInHeader: false, showInSidebar: false, showInFooter: true, sitemap: true, priority: 0.4, changeFrequency: 'yearly' },
] as const;

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => 'isContentType' in item && item.isContentType).map((item) => item.key);

export const CONTENT_TYPES_WITH_DEDICATED_PAGES = new Set(CONTENT_TYPES);

export type NavigationItem = (typeof NAVIGATION_CONFIG)[number];
export type ContentType = (typeof CONTENT_TYPES)[number];

export function isContentType(value: string): value is ContentType {
  return CONTENT_TYPES.includes(value as ContentType);
}

export function getNavigationItem(path: string) {
  const normalized = path === '' ? '/' : path.startsWith('/') ? path : `/${path}`;
  return NAVIGATION_CONFIG.find((item) => item.path === normalized || item.key === path);
}

export const CONTENT_DIR_NAMES: Record<ContentType | string, string> = {
  'guides': 'guides',
  'weapons': 'weapons',
  'phantom-edges': 'phantom-edges',
  'boss-guide': 'boss-guide',
  'endings': 'endings',
  'combat': 'combat',
  'tier-list': 'tier-list',
  'lore': 'lore',
  'difficulty': 'difficulty',
  'updates': 'updates',
} as Record<ContentType, string>;

export function getContentDir(contentType: ContentType): string {
  return CONTENT_DIR_NAMES[contentType] || contentType;
}

export const GUIDE_CATEGORIES: Record<string, { emoji: string; order: number }> = {
  'guides':          { emoji: '📖', order: 1 },
  'weapons':         { emoji: '⚔️', order: 2 },
  'phantom-edges':   { emoji: '🛡️', order: 3 },
  'boss-guide':      { emoji: '💀', order: 4 },
  'endings':         { emoji: '✨', order: 5 },
  'combat':          { emoji: '⚔️', order: 6 },
  'tier-list':       { emoji: '🏆', order: 7 },
  'lore':            { emoji: '📜', order: 8 },
  'difficulty':      { emoji: '📊', order: 9 },
  'updates':         { emoji: '🔔', order: 10 },
};

export const CATEGORY_ORDER = Object.entries(GUIDE_CATEGORIES)
  .sort(([, a], [, b]) => a.order - b.order)
  .map(([key]) => key);

export const CATEGORY_AFFINITY: Record<string, string[]> = {
  'guides':          ['combat', 'weapons', 'difficulty'],
  'weapons':         ['tier-list', 'phantom-edges', 'boss-guide'],
  'phantom-edges':   ['weapons', 'combat', 'boss-guide'],
  'boss-guide':      ['weapons', 'combat', 'endings'],
  'endings':         ['lore', 'boss-guide', 'guides'],
  'combat':          ['guides', 'weapons', 'difficulty'],
  'tier-list':       ['weapons', 'phantom-edges', 'combat'],
  'lore':            ['endings', 'combat', 'updates'],
  'difficulty':      ['combat', 'guides', 'boss-guide'],
  'updates':         ['lore', 'endings', 'guides'],
};
