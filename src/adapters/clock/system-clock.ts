export interface ClockAdapter {
  nowWallMs(): number;
  nowMonotonicMs(): number;
}

export class SystemClock implements ClockAdapter {
  public nowWallMs(): number {
    return Date.now();
  }

  public nowMonotonicMs(): number {
    return typeof performance !== 'undefined' ? performance.now() : Date.now();
  }
}
