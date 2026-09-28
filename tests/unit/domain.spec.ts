import { describe, it, expect } from 'vitest';
import { domainReducer } from '../../src/domain/reducer.ts';
import { createInitialState } from '../../src/domain/initial-state.ts';
import { SeededRandom } from '../../src/adapters/random/seeded-random.ts';

describe('Domain Smoke Tests', () => {
  it('creates valid initial game state adhering to baseline config', () => {
    const state = createInitialState(1000);
    expect(state.schemaVersion).toBe(2);
    expect(state.coins).toBe(40);
    expect(state.plots).toHaveLength(4);
    expect(state.tapCount).toBe(0);
    expect(state.inventory['seed_daisy']).toBe(4);
    expect(state.inventory['seed_tulip']).toBe(2);
  });

  it('increments tap count and revision on TAP_GARDEN', () => {
    const initial = createInitialState(1000);
    const next = domainReducer(initial, { type: 'TAP_GARDEN', x: 100, y: 150 });

    expect(next.tapCount).toBe(1);
    expect(next.revision).toBe(initial.revision + 1);
  });

  it('calculates offline resume time with 8-hour cap and prevents negative time drift', () => {
    const initial = createInitialState(1000);
    initial.savedAtWallMs = 1000;
    initial.simTimeMs = 0;

    // Normal resume: 10 seconds later
    const resume1 = domainReducer(initial, { type: 'RESUME_TIME', nowWallMs: 11000 });
    expect(resume1.simTimeMs).toBe(10000);
    expect(resume1.savedAtWallMs).toBe(11000);

    // Duplicate resume at exact same time credits 0ms
    const resumeDuplicate = domainReducer(resume1, { type: 'RESUME_TIME', nowWallMs: 11000 });
    expect(resumeDuplicate.simTimeMs).toBe(10000);

    // Backward time (clock jump backwards) credits 0ms
    const resumeBackward = domainReducer(resume1, { type: 'RESUME_TIME', nowWallMs: 5000 });
    expect(resumeBackward.simTimeMs).toBe(10000);

    // Offline cap: 24 hours later (86,400s) should cap at 8 hours (28,800,000 ms)
    const resumeCapped = domainReducer(initial, { type: 'RESUME_TIME', nowWallMs: 1000 + 86400 * 1000 });
    expect(resumeCapped.simTimeMs).toBe(28800 * 1000);
  });

  it('safely handles coin rewards with integer validation', () => {
    const initial = createInitialState(1000);
    const withReward = domainReducer(initial, { type: 'REWARD_COINS', amount: 10 });
    expect(withReward.coins).toBe(50);

    // Reject non-positive or non-integer
    expect(() => domainReducer(initial, { type: 'REWARD_COINS', amount: -5 })).toThrow();
    expect(() => domainReducer(initial, { type: 'REWARD_COINS', amount: 3.5 })).toThrow();
  });

  it('generates deterministic pseudorandom numbers from fixed seed', () => {
    const rng1 = new SeededRandom(12345);
    const rng2 = new SeededRandom(12345);

    const seq1 = [rng1.next(), rng1.next(), rng1.nextInt(1, 10)];
    const seq2 = [rng2.next(), rng2.next(), rng2.nextInt(1, 10)];

    expect(seq1).toEqual(seq2);
  });
});
