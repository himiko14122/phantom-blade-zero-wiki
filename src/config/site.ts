import { routing, type Locale } from '@/i18n/routing';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.phantom-blade-zero-wiki.wiki';
export const SITE_NAME = 'Phantom Blade Zero Wiki';
export const HERO_IMAGE = '/images/hero.webp';
export const LOGO_IMAGE = '/logo.svg';
export const TWITTER_HANDLE = 'pbzero_official';
export const GA_TRACKING_ID = 'G-DRH8KMC2FK';
export const SLUG_PREFIX = 'Phantom-Blade-Zero-';

export const EXTERNAL_LINKS = {
  steam: 'https://store.steampowered.com/app/4115450/Phantom_Blade_Zero/',
  discord: 'https://discord.com/invite/phantombladezero',
  youtube: 'https://www.youtube.com/@PhantomBladeZero',
  reddit: 'https://www.reddit.com/r/PhantomBladeZero/',
  twitter: 'https://x.com/pbzero_official',
  website: 'https://pbz.s-game.com/',
  epic: 'https://store.epicgames.com/p/phantom-blade-zero-e78a35',
  playstation: 'https://www.playstation.com/en-us/games/phantom-blade-zero/',
} as const;

export function absoluteUrl(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function localizedPath(locale: Locale | string, path = '/') {
  const normalized = path === '' ? '/' : path.startsWith('/') ? path : `/${path}`;
  if (locale === routing.defaultLocale) {
    return normalized === '/' ? '/' : normalized;
  }
  return normalized === '/' ? `/${locale}` : `/${locale}${normalized}`;
}
