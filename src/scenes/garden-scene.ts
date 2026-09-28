import { Scene } from 'phaser';
import type { GameStore } from '../application/store.ts';

export class GardenScene extends Scene {
  private statusText!: Phaser.GameObjects.Text;
  private tapIndicator!: Phaser.GameObjects.Text;
  private plotsContainer!: Phaser.GameObjects.Container;
  private resizeHandler!: (gameSize: Phaser.Structs.Size) => void;

  constructor() {
    super('GardenScene');
  }

  create(): void {
    const { width, height } = this.scale;

    // Background gradient canvas effect
    this.cameras.main.setBackgroundColor(0x2d4a22);

    // Grid rendering (representing the 64-unit grid baseline from D05)
    const gridGraphics = this.add.graphics();
    gridGraphics.lineStyle(1, 0x3d6330, 0.5);
    const gridSize = 64;
    for (let x = 0; x < 1536; x += gridSize) {
      gridGraphics.moveTo(x, 0);
      gridGraphics.lineTo(x, 1152);
    }
    for (let y = 0; y < 1152; y += gridSize) {
      gridGraphics.moveTo(0, y);
      gridGraphics.lineTo(1536, y);
    }
    gridGraphics.strokePath();

    // Plots container with initial 4 plots (baseline P0)
    this.plotsContainer = this.add.container(width / 2, height / 2);
    const plotOffsets = [
      { x: -70, y: -70, id: 'plot_01' },
      { x: 70, y: -70, id: 'plot_02' },
      { x: -70, y: 70, id: 'plot_03' },
      { x: 70, y: 70, id: 'plot_04' }
    ];

    plotOffsets.forEach((pos) => {
      const plot = this.add.image(pos.x, pos.y, 'plot_placeholder');
      plot.setInteractive({ useHandCursor: true });
      this.plotsContainer.add(plot);
    });

    // Decorative flower on first plot
    const flower = this.add.image(-70, -70, 'flower_placeholder');
    this.plotsContainer.add(flower);

    // Title / Status banner in canvas
    this.statusText = this.add.text(width / 2, 60, 'Blooming Home — Khu Vườn Đợi Nở', {
      fontFamily: 'Outfit, Inter, sans-serif',
      fontSize: '24px',
      color: '#ffffff',
      stroke: '#1b3014',
      strokeThickness: 4,
      align: 'center'
    });
    this.statusText.setOrigin(0.5);

    this.tapIndicator = this.add.text(width / 2, height - 60, 'Chạm vào màn hình để chăm sóc khu vườn', {
      fontFamily: 'Outfit, Inter, sans-serif',
      fontSize: '16px',
      color: '#e2f0d9',
      stroke: '#1b3014',
      strokeThickness: 3,
      align: 'center'
    });
    this.tapIndicator.setOrigin(0.5);

    // Input Tap / Click handling
    this.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
      this.handleTap(pointer.x, pointer.y);
    });

    // Resize handling
    this.resizeHandler = (gameSize: Phaser.Structs.Size) => {
      this.handleResize(gameSize.width, gameSize.height);
    };
    this.scale.on('resize', this.resizeHandler, this);

    this.events.once('shutdown', () => {
      this.scale.off('resize', this.resizeHandler, this);
    });
  }

  private handleTap(x: number, y: number): void {
    // Visual feedback ripple/pulse
    const ripple = this.add.circle(x, y, 10, 0xffffff, 0.7);
    this.tweens.add({
      targets: ripple,
      radius: 40,
      alpha: 0,
      duration: 400,
      ease: 'Power2',
      onComplete: () => {
        ripple.destroy();
      }
    });

    this.tapIndicator.setText(`Đã tương tác tại (${Math.round(x)}, ${Math.round(y)})`);

    const store = this.registry.get('store') as GameStore | undefined;
    if (store) {
      store.dispatch({ type: 'TAP_GARDEN', x, y });
    }
  }

  public handleResize(width: number, height: number): void {
    if (this.statusText) {
      this.statusText.setPosition(width / 2, 60);
    }
    if (this.tapIndicator) {
      this.tapIndicator.setPosition(width / 2, height - 60);
    }
    if (this.plotsContainer) {
      this.plotsContainer.setPosition(width / 2, height / 2);
    }
  }
}
