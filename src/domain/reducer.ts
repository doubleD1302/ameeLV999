import type { GameState, DomainCommand } from './types.ts';

export function domainReducer(state: GameState, command: DomainCommand): GameState {
  switch (command.type) {
    case 'TAP_GARDEN': {
      return {
        ...state,
        revision: state.revision + 1,
        tapCount: state.tapCount + 1
      };
    }

    case 'RESUME_TIME': {
      const delta = Math.max(0, command.nowWallMs - state.savedAtWallMs);
      const offlineCapMs = 28800 * 1000; // 8 hours cap from config.json
      const creditedMs = Math.min(delta, offlineCapMs);

      return {
        ...state,
        revision: state.revision + 1,
        simTimeMs: state.simTimeMs + creditedMs,
        savedAtWallMs: command.nowWallMs
      };
    }

    case 'REWARD_COINS': {
      if (!Number.isSafeInteger(command.amount) || command.amount <= 0) {
        throw new Error('Reward amount must be a positive safe integer');
      }
      const newCoins = state.coins + command.amount;
      if (!Number.isSafeInteger(newCoins)) {
        throw new Error('Coin count overflow');
      }
      return {
        ...state,
        revision: state.revision + 1,
        coins: newCoins
      };
    }

    default:
      return state;
  }
}
