// Reference contract for implementation. No runtime is included in this kit.
export type Phase = "P0" | "P1" | "P2" | "P3";
export type ItemId = string;
export interface Crop {
  uid: string; flowerId: string; plantedAtSimMs: number; readyAtSimMs: number;
}
export interface Relationship {
  points: number; nextTalkAtSimMs: number; nextGiftAtSimMs: number;
}
export type PuzzleSession =
  | { engine: "memory"; engineVersion: 1; status: PuzzleStatus; moves: number; hintTier: number;
      state: { matched: number[]; faceUp: number[] } }
  | { engine: "sliding"; engineVersion: 1; status: PuzzleStatus; moves: number; hintTier: number;
      state: { tiles: number[] } }
  | { engine: "pipe_rotation"; engineVersion: 1; status: PuzzleStatus; moves: number; hintTier: number;
      state: { rotations: number[] } };
export type PuzzleStatus = "in_progress" | "solved" | "assisted";
export interface GameState {
  schemaVersion: 2; contentVersion: string; revision: number;
  savedAtWallMs: number; simTimeMs: number; coins: number;
  inventory: Record<ItemId, number>; plots: { id: string; crop: Crop | null }[];
  upgrades: string[]; flags: string[]; claimedRewards: string[];
  completedQuests: string[]; questCounters: Record<string, number>;
  puzzleProgress: Record<string, PuzzleSession>;
  decor: { id: string; itemId: string; zoneId: string; x: number; y: number; rotation: 0 | 90 | 180 | 270 }[];
  relationships: Record<string, Relationship>;
  pets: { petId: string; name: string; follow: boolean }[];
  clearedDebris: string[]; receipts: { commandId: string; revision: number }[];
  rngState: number;
  settings: { music: number; sfx: number; ambience: number; reducedMotion: boolean; textScale: 1 | 1.25 | 1.5 };
  player: { name: string; zoneId: string; x: number; y: number };
}
export type CommandPayload =
  | { type: "PLANT"; plotId: string; flowerId: string }
  | { type: "HARVEST"; plotId: string; cropUid: string }
  | { type: "UPROOT"; plotId: string; cropUid: string }
  | { type: "BUY_SEED" | "BUY_DECOR" | "SELL"; itemId: string; count: number }
  | { type: "CLEAR_DEBRIS"; debrisId: string }
  | { type: "RESTORE"; upgradeId: string }
  | { type: "PLACE_DECOR"; itemId: string; zoneId: string; x: number; y: number; rotation: 0 | 90 | 180 | 270 }
  | { type: "MOVE_DECOR"; instanceId: string; x: number; y: number; rotation: 0 | 90 | 180 | 270 }
  | { type: "STORE_DECOR"; instanceId: string }
  | { type: "CLAIM_QUEST"; questId: string }
  | { type: "COMPLETE_PUZZLE"; puzzleId: string; mode: "solved" | "assisted" }
  | { type: "ADOPT_PET"; petId: string }
  | { type: "TALK"; neighborId: string }
  | { type: "GIFT"; neighborId: string; itemId: string }
  | { type: "RESCUE_SEEDS" }
  | { type: "RESUME_TIME"; nowWallMs: number };
export type Command = CommandPayload & { commandId: string; expectedRevision: number };
export type ErrorCode =
  | "STALE_REVISION" | "NOT_READY" | "LOCKED" | "INSUFFICIENT_ITEMS"
  | "ALREADY_CLAIMED" | "INVALID_DATA" | "STORAGE_FAILED" | "PATH_BLOCKED";
export type Result<T> = { ok: true; value: T } | { ok: false; code: ErrorCode };
export interface Clock { wallMs(): number; monotonicMs(): number }
export interface SaveRepository {
  read(): Promise<GameState | null>;
  // Implement with one IDB readwrite transaction; compute must remain synchronous.
  commit(expectedRevision: number, compute: (current: GameState) => Result<GameState>): Promise<Result<GameState>>;
}
// RESUME_TIME adapter must reconcile from the latest persisted anchor inside its
// transaction; the command dispatcher treats stale UI snapshots as a rehydrate,
// never as permission to reapply the old time interval.
