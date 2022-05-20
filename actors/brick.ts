import { Actor } from "./Actor";
import { Ball } from "./Ball";

export class Brick implements Actor {
    position: { x: number; y: number; };
    ctx: CanvasRenderingContext2D;
    width: number;
    height: number;
    destroyed: boolean;
    ball: Ball;

    constructor(position, ctx: CanvasRenderingContext2D, ball: Ball, width = 100, height = 25) {
        this.position = { x: position.x, y: position.y }
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.destroyed = false;
        this.ball = ball;
    }
    update(delta: number) { }
    draw(delta: number, ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = "yellow";
        ctx.fillStyle = "yellow";
        ctx.rect(this.position.x, this.position.y, 125, 25);
        ctx.fill();
    }
    keyboard_event(key: any) { }
}