import { Scene } from 'phaser';

export class BootScene extends Scene {
  constructor() {
    super('BootScene');
  }

  create(): void {
    // Generate procedural placeholder textures for the vertical slice prototype
    const plotGraphics = this.make.graphics({ x: 0, y: 0 });
    plotGraphics.fillStyle(0x6b4226, 1);
    plotGraphics.fillRoundedRect(0, 0, 64, 64, 8);
    plotGraphics.lineStyle(2, 0x8b5a2b, 1);
    plotGraphics.strokeRoundedRect(0, 0, 64, 64, 8);
    plotGraphics.generateTexture('plot_placeholder', 64, 64);
    plotGraphics.destroy();

    const flowerGraphics = this.make.graphics({ x: 0, y: 0 });
    flowerGraphics.fillStyle(0xffe066, 1);
    flowerGraphics.fillCircle(16, 16, 12);
    flowerGraphics.fillStyle(0xffffff, 1);
    flowerGraphics.fillCircle(16, 16, 6);
    flowerGraphics.generateTexture('flower_placeholder', 32, 32);
    flowerGraphics.destroy();

    this.scene.start('GardenScene');
  }
}
