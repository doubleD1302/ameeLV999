export interface RandomAdapter {
  next(): number;
  nextInt(minInclusive: number, maxInclusive: number): number;
}

/**
 * Deterministic 32-bit LCG random generator for reproducible gameplay logic
 */
export class SeededRandom implements RandomAdapter {
  private state: number;

  constructor(seed = 123456789) {
    this.state = seed >>> 0;
  }

  public next(): number {
    // Standard Numerical Recipes LCG parameters
    this.state = (1664525 * this.state + 1013904223) >>> 0;
    return this.state / 4294967296;
  }

  public nextInt(minInclusive: number, maxInclusive: number): number {
    const min = Math.ceil(minInclusive);
    const max = Math.floor(maxInclusive);
    return Math.floor(this.next() * (max - min + 1)) + min;
  }
}
