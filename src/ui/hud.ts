import type { GameStore } from '../application/store.ts';
import type { GameState } from '../domain/types.ts';

export class HudView {
  private container: HTMLElement;
  private coinsElement!: HTMLElement;
  private tapsElement!: HTMLElement;
  private timeElement!: HTMLElement;
  private actionButton!: HTMLButtonElement;
  private unsubscribe?: () => void;

  constructor(private store: GameStore, parentElement: HTMLElement) {
    this.container = document.createElement('div');
    this.container.id = 'hud-container';
    this.container.className = 'hud-container';
    this.container.setAttribute('role', 'region');
    this.container.setAttribute('aria-label', 'Bảng điều khiển vườn');
    parentElement.appendChild(this.container);

    this.render();
    this.bindEvents();
  }

  private render(): void {
    this.container.innerHTML = `
      <header class="hud-header">
        <div class="hud-card" aria-live="polite">
          <span class="hud-label">💰 Tiền vàng:</span>
          <strong id="hud-coins" class="hud-value">0</strong>
        </div>
        <div class="hud-card" aria-live="polite">
          <span class="hud-label">🌱 Tương tác:</span>
          <strong id="hud-taps" class="hud-value">0</strong>
        </div>
        <div class="hud-card">
          <span class="hud-label">⏳ Mô phỏng:</span>
          <span id="hud-time" class="hud-value">0s</span>
        </div>
      </header>
      <footer class="hud-footer">
        <button id="btn-care-garden" class="hud-btn" type="button" aria-label="Chăm sóc khu vườn để nhận thưởng">
          🌿 Chăm sóc (+10 xu)
        </button>
      </footer>
    `;

    this.coinsElement = this.container.querySelector('#hud-coins') as HTMLElement;
    this.tapsElement = this.container.querySelector('#hud-taps') as HTMLElement;
    this.timeElement = this.container.querySelector('#hud-time') as HTMLElement;
    this.actionButton = this.container.querySelector('#btn-care-garden') as HTMLButtonElement;
  }

  private bindEvents(): void {
    this.actionButton.addEventListener('click', () => {
      this.store.dispatch({ type: 'REWARD_COINS', amount: 10 });
    });

    this.unsubscribe = this.store.subscribe((state: GameState) => {
      this.update(state);
    });
  }

  public update(state: GameState): void {
    if (this.coinsElement) {
      this.coinsElement.textContent = state.coins.toLocaleString('vi-VN');
    }
    if (this.tapsElement) {
      this.tapsElement.textContent = state.tapCount.toString();
    }
    if (this.timeElement) {
      const seconds = Math.floor(state.simTimeMs / 1000);
      this.timeElement.textContent = `${seconds}s`;
    }
  }

  public destroy(): void {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
    this.container.remove();
  }
}
