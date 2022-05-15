import { Actor } from "./actor";

export class Bar implements Actor {
    position: { x: number; y: number; };
    ctx: CanvasRenderingContext2D;

    constructor(position, ctx: CanvasRenderingContext2D) {
        
    }
    update(delta: number) {
    }
    draw(delta: number, ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = "black";
        // ctx.fillStyle = "";
        ctx.rect(10, 20, 150, 100);
        ctx.fill();
    }
    keyboard_event(key: any) {
    }
}