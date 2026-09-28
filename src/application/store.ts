import type { GameState, DomainCommand } from '../domain/types.ts';
import { domainReducer } from '../domain/reducer.ts';
import { createInitialState } from '../domain/initial-state.ts';

export type StateListener = (state: GameState) => void;

export class GameStore {
  private state: GameState;
  private listeners: Set<StateListener> = new Set();

  constructor(initialState?: GameState) {
    this.state = initialState ?? createInitialState();
  }

  public getState(): GameState {
    return this.state;
  }

  public dispatch(command: DomainCommand): GameState {
    this.state = domainReducer(this.state, command);
    this.notify();
    return this.state;
  }

  public subscribe(listener: StateListener): () => void {
    this.listeners.add(listener);
    listener(this.state);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify(): void {
    for (const listener of this.listeners) {
      listener(this.state);
    }
  }
}
