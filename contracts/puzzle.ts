// The engine validates a definition before createState; do not trust saved input.
export type PuzzleMove =
  | { kind: "flip"; index: number }
  | { kind: "slide"; tileIndex: number }
  | { kind: "rotate"; index: number }
  | { kind: "reset" };
export interface PuzzleEngine<Definition, State> {
  validateDefinition(definition: unknown): definition is Definition;
  createState(definition: Definition, seed: number): State;
  applyMove(definition: Definition, state: State, move: PuzzleMove): State;
  isSolved(definition: Definition, state: State): boolean;
  getHint(definition: Definition, state: State, tier: 1 | 2 | 3): { textKey: string; focusIndices: number[] };
  serialize(state: State): unknown;
  validateSavedState(definition: Definition, state: unknown): state is State;
}
