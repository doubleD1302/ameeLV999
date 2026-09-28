import { Game, AUTO, Scale } from 'phaser';
import { BootScene } from './scenes/boot-scene.ts';
import { GardenScene } from './scenes/garden-scene.ts';
import { GameStore } from './application/store.ts';
import { SystemClock } from './adapters/clock/system-clock.ts';
import { SeededRandom } from './adapters/random/seeded-random.ts';
import { HudView } from './ui/hud.ts';
import { registerServiceWorker } from './pwa/register.ts';

declare global {
  interface Window {
    __GAME_STORE__?: GameStore;
    __PHASER_GAME__?: Game;
    __GAME_CLOCK__?: SystemClock;
    __GAME_RANDOM__?: SeededRandom;
  }
}

export function initGame(): { game: Game; store: GameStore; clock: SystemClock; random: SeededRandom } {
  const clock = new SystemClock();
  const random = new SeededRandom(42);
  const store = new GameStore();

  const uiContainer = document.getElementById('ui-layer') || document.body;
  new HudView(store, uiContainer);

  const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    parent: 'game-container',
    width: window.innerWidth || 1024,
    height: window.innerHeight || 768,
    scale: {
      mode: Scale.RESIZE,
      autoCenter: Scale.CENTER_BOTH
    },
    backgroundColor: '#1b3014',
    scene: [BootScene, GardenScene]
  };

  const game = new Game(config);
  game.registry.set('store', store);

  if (typeof window !== 'undefined') {
    window.__GAME_STORE__ = store;
    window.__PHASER_GAME__ = game;
    window.__GAME_CLOCK__ = clock;
    window.__GAME_RANDOM__ = random;
  }

  registerServiceWorker();

  return { game, store, clock, random };
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    initGame();
  });
}
