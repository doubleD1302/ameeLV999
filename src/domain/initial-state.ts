import type { GameState } from './types.ts';

export const createInitialState = (nowWallMs = Date.now()): GameState => ({
  schemaVersion: 2,
  contentVersion: '0.1.0',
  revision: 0,
  savedAtWallMs: nowWallMs,
  simTimeMs: 0,
  coins: 40,
  inventory: {
    seed_daisy: 4,
    seed_tulip: 2
  },
  plots: [
    { id: 'plot_01', crop: null },
    { id: 'plot_02', crop: null },
    { id: 'plot_03', crop: null },
    { id: 'plot_04', crop: null }
  ],
  upgrades: [],
  flags: ['prologue_seen'],
  claimedRewards: [],
  completedQuests: [],
  questCounters: {},
  tapCount: 0,
  settings: {
    music: 80,
    sfx: 90,
    reducedMotion: false
  }
});
