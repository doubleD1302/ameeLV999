export type Phase = 'P0' | 'P1' | 'P2' | 'P3';
export type ItemId = string;

export interface Crop {
  uid: string;
  flowerId: string;
  plantedAtSimMs: number;
  readyAtSimMs: number;
}

export interface Plot {
  id: string;
  crop: Crop | null;
}

export interface GameState {
  schemaVersion: 2;
  contentVersion: string;
  revision: number;
  savedAtWallMs: number;
  simTimeMs: number;
  coins: number;
  inventory: Record<ItemId, number>;
  plots: Plot[];
  upgrades: string[];
  flags: string[];
  claimedRewards: string[];
  completedQuests: string[];
  questCounters: Record<string, number>;
  tapCount: number;
  settings: {
    music: number;
    sfx: number;
    reducedMotion: boolean;
  };
}

export type DomainCommand =
  | { type: 'TAP_GARDEN'; x: number; y: number }
  | { type: 'RESUME_TIME'; nowWallMs: number }
  | { type: 'REWARD_COINS'; amount: number };
