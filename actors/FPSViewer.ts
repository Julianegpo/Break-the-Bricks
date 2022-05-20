import { Actor } from "./Actor";

export class FPSViewer implements Actor {
    position: { x: number; y: number; };
    ctx: CanvasRenderingContext2D;

    constructor(position) {
        this.position = position;
    }
    update(delta: number, canvasWidth: number, canvasHeight: number) { }
    draw(delta: number, ctx: CanvasRenderingContext2D) {
        const fps = (1 / delta).toFixed(2);
        ctx.font = '10px Arial';
        ctx.fillStyle = 'yellow';
        ctx.fillText(`FPS: ${fps}`, this.position.x, this.position.y)
    }
    keyboard_event(key: string) { }
}