import {
  BookOpen, Sword, Shield, Skull, Sparkles, Swords, Trophy, Scroll, Gauge, Bell,
  Compass,
  type LucideIcon,
} from 'lucide-react';

export interface StatConfig {
  val: string;
  labelKey: string;
}

export interface ModuleCardConfig {
  key: string;
  labelKey: string;
  titleKey: string;
  descKey: string;
  href: string;
  stats: StatConfig[];
  icon: LucideIcon;
  ctaKey?: string;
}

export interface GameFeatureConfig {
  titleKey: string;
  descKey: string;
  icon: LucideIcon;
}

export interface StartHereStepConfig {
  titleKey: string;
  descKey: string;
  href: string;
}

export interface HeroCtaConfig {
  labelKey: string;
  href: string;
  style: 'primary' | 'secondary';
}

export const HOME_CONFIG = {
  hero: {
    videoId: 'ayGk_auu5tk',  // Official Release Date Announcement Trailer by Phantom Blade Zero
    badgeKeys: [
      'home_hero_badge_release',
      'home_hero_badge_price',
      'home_hero_badge_players',
      'home_hero_badge_crossplay',
      'home_hero_badge_genre',
    ],
    ctas: [
      { labelKey: 'home_hero_cta_guides', href: '/guides', style: 'primary' as const },
      { labelKey: 'home_hero_cta_puzzles', href: '/weapons', style: 'secondary' as const },
      { labelKey: 'home_hero_cta_crossplay', href: '/endings', style: 'secondary' as const },
    ],
  },

  moduleCards: [
    { key: 'guides', labelKey: 'home_module_guides', titleKey: 'home_module_guides_title', descKey: 'home_module_guides_desc', href: '/guides', stats: [{ val: '__guideCount', labelKey: 'home_module_starter_pages' }, { val: '10+', labelKey: 'home_module_guides_count' }], icon: BookOpen, ctaKey: 'home_module_guides_cta' },
    { key: 'weapons', labelKey: 'home_module_weapons', titleKey: 'home_module_weapons_title', descKey: 'home_module_weapons_desc', href: '/weapons', stats: [{ val: '30+', labelKey: 'home_module_weapon_count' }, { val: '4', labelKey: 'home_module_blade_count' }], icon: Sword, ctaKey: 'home_module_weapons_cta' },
    { key: 'phantom-edges', labelKey: 'home_module_phantom-edges', titleKey: 'home_module_phantom-edges_title', descKey: 'home_module_phantom-edges_desc', href: '/phantom-edges', stats: [{ val: '20+', labelKey: 'home_module_edge_count' }, { val: '6', labelKey: 'home_module_secondary_type' }], icon: Shield, ctaKey: 'home_module_phantom-edges_cta' },
    { key: 'boss-guide', labelKey: 'home_module_boss-guide', titleKey: 'home_module_boss-guide_title', descKey: 'home_module_boss-guide_desc', href: '/boss-guide', stats: [{ val: '10+', labelKey: 'home_module_boss_count' }, { val: '2+', labelKey: 'home_module_phase_count' }], icon: Skull, ctaKey: 'home_module_boss-guide_cta' },
    { key: 'endings', labelKey: 'home_module_endings', titleKey: 'home_module_endings_title', descKey: 'home_module_endings_desc', href: '/endings', stats: [{ val: '8', labelKey: 'home_module_ending_count' }, { val: '8', labelKey: 'home_module_path_count' }], icon: Sparkles, ctaKey: 'home_module_endings_cta' },
    { key: 'combat', labelKey: 'home_module_combat', titleKey: 'home_module_combat_title', descKey: 'home_module_combat_desc', href: '/combat', stats: [{ val: '5+', labelKey: 'home_module_mechanic_count' }, { val: 'Sha-Chi', labelKey: 'home_module_shaChi_label' }], icon: Swords, ctaKey: 'home_module_combat_cta' },
    { key: 'tier-list', labelKey: 'home_module_tier-list', titleKey: 'home_module_tier-list_title', descKey: 'home_module_tier-list_desc', href: '/tier-list', stats: [{ val: 'S-C', labelKey: 'home_module_rank_count' }, { val: 'S', labelKey: 'home_module_stier_label' }], icon: Trophy, ctaKey: 'home_module_tier-list_cta' },
    { key: 'lore', labelKey: 'home_module_lore', titleKey: 'home_module_lore_title', descKey: 'home_module_lore_desc', href: '/lore', stats: [{ val: '10+', labelKey: 'home_module_lore_count' }, { val: 'Wuxia', labelKey: 'home_module_tradition_label' }], icon: Scroll, ctaKey: 'home_module_lore_cta' },
    { key: 'difficulty', labelKey: 'home_module_difficulty', titleKey: 'home_module_difficulty_title', descKey: 'home_module_difficulty_desc', href: '/difficulty', stats: [{ val: '4', labelKey: 'home_module_mode_count' }, { val: 'Hellwalker', labelKey: 'home_module_hellwalker_label' }], icon: Gauge, ctaKey: 'home_module_difficulty_cta' },
    { key: 'updates', labelKey: 'home_module_updates', titleKey: 'home_module_updates_title', descKey: 'home_module_updates_desc', href: '/updates', stats: [{ val: '10+', labelKey: 'home_module_news_count' }, { val: 'Oct 29', labelKey: 'home_module_release_label' }], icon: Bell, ctaKey: 'home_module_updates_cta' },
  ] as ModuleCardConfig[],

  gameFeatures: [
    { titleKey: 'home_feature_combat', descKey: 'home_feature_combat_desc', icon: Swords },
    { titleKey: 'home_feature_weapons', descKey: 'home_feature_weapons_desc', icon: Sword },
    { titleKey: 'home_feature_endings', descKey: 'home_feature_endings_desc', icon: Sparkles },
    { titleKey: 'home_feature_phantom', descKey: 'home_feature_phantom_desc', icon: Compass },
  ] as GameFeatureConfig[],

  startHereSteps: [
    { titleKey: 'home_start_1_title', descKey: 'home_start_1_desc', href: '/guides' },
    { titleKey: 'home_start_2_title', descKey: 'home_start_2_desc', href: '/weapons' },
    { titleKey: 'home_start_3_title', descKey: 'home_start_3_desc', href: '/boss-guide' },
    { titleKey: 'home_start_4_title', descKey: 'home_start_4_desc', href: '/endings' },
    { titleKey: 'home_start_5_title', descKey: 'home_start_5_desc', href: '/combat' },
  ] as StartHereStepConfig[],

  gameOverview: {
    infoItems: ['developer', 'publisher', 'platforms', 'genre', 'releaseDate', 'price', 'players', 'esrb'],
    cta: {
      guideLabelKey: 'home_about_cta',
      guideHref: '/guides',
      externalLabelKey: 'home_cta_steam',
      externalLinkKey: 'steam',
    },
  },

  faq: {
    keys: ['combat', 'weapons', 'endings', 'difficulty', 'story', 'platforms', 'length', 'shaChi', 'ghostep', 'boss'],
  },

  bottomCta: {
    guideHref: '/guides',
    guideLabelKey: 'home_cta_guide',
    externalLinkKey: 'steam',
    externalLabelKey: 'home_cta_steam',
  },
};
