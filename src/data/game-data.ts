// Game-specific data for Phantom Blade Zero
// Entity interfaces, color maps, icon maps, sidebar codes, footer data

import {
  Sword, Shield, Flame, Target, Hammer, Swords,
  Skull, Sparkles, Gauge, Scroll,
  type LucideIcon,
} from 'lucide-react';

/* ──────────────── Color Maps ──────────────── */
export const TIER_COLOR_MAP: Record<string, string> = {
  S: 'var(--color-tier-s)',
  A: 'var(--color-tier-a)',
  B: 'var(--color-tier-b)',
  C: 'var(--color-tier-c)',
};
export const TIER_COLOR_DEFAULT = 'var(--color-tier-c)';

export const WEAPON_TYPE_COLOR_MAP: Record<string, string> = {
  longsword: 'var(--color-accent)',
  chakram: 'var(--color-accent-secondary)',
  greatsword: 'var(--color-tier-s)',
  whipblade: 'var(--color-tier-a)',
  twinblade: 'var(--color-tier-b)',
  heavy: 'var(--color-tier-c)',
};

export const DIFFICULTY_COLOR_MAP: Record<string, string> = {
  normal: 'var(--color-tier-a)',
  hard: 'var(--color-tier-s)',
  hellwalker: 'var(--color-accent)',
  ngplus: 'var(--color-tier-b)',
};

export function tierColor(tier: string): string {
  return TIER_COLOR_MAP[tier] ?? TIER_COLOR_DEFAULT;
}

export function weaponTypeColor(type: string): string {
  return WEAPON_TYPE_COLOR_MAP[type] ?? 'var(--color-accent)';
}

export function difficultyColor(mode: string): string {
  return DIFFICULTY_COLOR_MAP[mode] ?? 'var(--color-tier-c)';
}

/* ──────────────── Icon Maps ──────────────── */
export const WEAPON_TYPE_ICON_MAP: Record<string, LucideIcon> = {
  longsword: Sword,
  chakram: Shield,
  greatsword: Sword,
  whipblade: Swords,
  twinblade: Swords,
  heavy: Hammer,
};

export const PHANTOM_EDGE_ICON_MAP: Record<string, LucideIcon> = {
  bow: Target,
  mancutter: Sword,
  bashpole: Hammer,
  flaming: Flame,
  twin: Swords,
  reach: Sword,
};

/* ──────────────── Weapon Interface & Data ──────────────── */
export interface Weapon {
  key: string;
  nameKey: string;
  typeKey: string;
  useKey: string;
  tier: string;
  icon: LucideIcon;
}

export const WEAPONS: Weapon[] = [
  { key: 'sanguine', nameKey: 'home_weapon_sanguine_name', typeKey: 'home_weapon_type_blade', useKey: 'home_weapon_sanguine_use', tier: 'S', icon: Sword },
  { key: 'softsnake', nameKey: 'home_weapon_softsnake_name', typeKey: 'home_weapon_type_whip', useKey: 'home_weapon_softsnake_use', tier: 'S', icon: Swords },
  { key: 'seamless', nameKey: 'home_weapon_seamless_name', typeKey: 'home_weapon_type_chakram', useKey: 'home_weapon_seamless_use', tier: 'A', icon: Shield },
  { key: 'whiteserpent', nameKey: 'home_weapon_whiteserpent_name', typeKey: 'home_weapon_type_twin', useKey: 'home_weapon_whiteserpent_use', tier: 'A', icon: Swords },
  { key: 'jagged', nameKey: 'home_weapon_jagged_name', typeKey: 'home_weapon_type_great', useKey: 'home_weapon_jagged_use', tier: 'B', icon: Sword },
  { key: 'juggernaut', nameKey: 'home_weapon_juggernaut_name', typeKey: 'home_weapon_type_heavy', useKey: 'home_weapon_juggernaut_use', tier: 'C', icon: Hammer },
];

/* ──────────────── Phantom Edge Interface & Data ──────────────── */
export interface PhantomEdge {
  key: string;
  nameKey: string;
  descKey: string;
  tier: string;
  icon: LucideIcon;
}

export const PHANTOM_EDGES: PhantomEdge[] = [
  { key: 'bow', nameKey: 'home_edge_bow_name', descKey: 'home_edge_bow_desc', tier: 'A', icon: Target },
  { key: 'flaming', nameKey: 'home_edge_flaming_name', descKey: 'home_edge_flaming_desc', tier: 'S', icon: Flame },
  { key: 'bashpole', nameKey: 'home_edge_bashpole_name', descKey: 'home_edge_bashpole_desc', tier: 'S', icon: Hammer },
  { key: 'mancutter', nameKey: 'home_edge_mancutter_name', descKey: 'home_edge_mancutter_desc', tier: 'A', icon: Sword },
  { key: 'twin', nameKey: 'home_edge_twin_name', descKey: 'home_edge_twin_desc', tier: 'A', icon: Swords },
  { key: 'reach', nameKey: 'home_edge_reach_name', descKey: 'home_edge_reach_desc', tier: 'B', icon: Sword },
];

/* ──────────────── Boss Interface & Data ──────────────── */
export interface Boss {
  key: string;
  nameKey: string;
  mechKey: string;
  weaponKey: string;
  phases: number;
  optional: boolean;
}

export const BOSSES: Boss[] = [
  { key: 'coppermaul', nameKey: 'home_boss_coppermaul_name', mechKey: 'home_boss_coppermaul_mech', weaponKey: 'home_boss_coppermaul_weapon', phases: 2, optional: false },
  { key: 'redwraith', nameKey: 'home_boss_redwraith_name', mechKey: 'home_boss_redwraith_mech', weaponKey: 'home_boss_redwraith_weapon', phases: 2, optional: true },
  { key: 'chief', nameKey: 'home_boss_chief_name', mechKey: 'home_boss_chief_mech', weaponKey: 'home_boss_chief_weapon', phases: 2, optional: false },
  { key: 'tiesha', nameKey: 'home_boss_tiesha_name', mechKey: 'home_boss_tiesha_mech', weaponKey: 'home_boss_tiesha_weapon', phases: 2, optional: false },
  { key: 'huangxing', nameKey: 'home_boss_huangxing_name', mechKey: 'home_boss_huangxing_mech', weaponKey: 'home_boss_huangxing_weapon', phases: 2, optional: false },
  { key: 'commander', nameKey: 'home_boss_commander_name', mechKey: 'home_boss_commander_mech', weaponKey: 'home_boss_commander_weapon', phases: 2, optional: false },
];

/* ──────────────── Difficulty Mode Interface & Data ──────────────── */
export interface DifficultyMode {
  key: string;
  nameKey: string;
  descKey: string;
  tier: string;
}

export const DIFFICULTY_MODES: DifficultyMode[] = [
  { key: 'normal', nameKey: 'home_diff_normal_name', descKey: 'home_diff_normal_desc', tier: 'A' },
  { key: 'hard', nameKey: 'home_diff_hard_name', descKey: 'home_diff_hard_desc', tier: 'A' },
  { key: 'hellwalker', nameKey: 'home_diff_hellwalker_name', descKey: 'home_diff_hellwalker_desc', tier: 'S' },
  { key: 'ngplus', nameKey: 'home_diff_ngplus_name', descKey: 'home_diff_ngplus_desc', tier: 'B' },
];

/* ──────────────── Ending Interface & Data ──────────────── */
export interface Ending {
  key: string;
  nameKey: string;
  descKey: string;
  category: string;
}

export const ENDINGS: Ending[] = [
  { key: 'true', nameKey: 'home_ending_true_name', descKey: 'home_ending_true_desc', category: 'true' },
  { key: 'good1', nameKey: 'home_ending_good1_name', descKey: 'home_ending_good1_desc', category: 'good' },
  { key: 'good2', nameKey: 'home_ending_good2_name', descKey: 'home_ending_good2_desc', category: 'good' },
  { key: 'neutral1', nameKey: 'home_ending_neutral1_name', descKey: 'home_ending_neutral1_desc', category: 'neutral' },
  { key: 'neutral2', nameKey: 'home_ending_neutral2_name', descKey: 'home_ending_neutral2_desc', category: 'neutral' },
  { key: 'bad', nameKey: 'home_ending_bad_name', descKey: 'home_ending_bad_desc', category: 'bad' },
  { key: 'secret', nameKey: 'home_ending_secret_name', descKey: 'home_ending_secret_desc', category: 'secret' },
  { key: 'redwraith', nameKey: 'home_ending_redwraith_name', descKey: 'home_ending_redwraith_desc', category: 'redwraith' },
];

/* ──────────────── Sidebar Codes ──────────────── */
export interface SidebarCode {
  code: string;
  reward: string;
}

export const SIDEBAR_CODES: SidebarCode[] = [
  { code: 'None', reward: 'No active codes yet. Check back after launch!' },
];

/* ──────────────── Footer Data ──────────────── */
export const FOOTER_DATA = {
  officialDiscordUrl: 'https://discord.com/invite/phantombladezero',
  officialYoutubeUrl: 'https://www.youtube.com/@PhantomBladeZero',
  communityTool: { label: '', href: '' },
} as const;
