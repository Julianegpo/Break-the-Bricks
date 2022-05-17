import { Actor } from "./actor";

export class Brick implements Actor{
    position: { x: number; y: number; };
    ctx: CanvasRenderingContext2D;
    
    update(delta: number) {
        throw new Error("Method not implemented.");
    }
    draw(delta: number, ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = "yellow";
        ctx.fillStyle = "yellow";
        ctx.rect(this.position.x, this.position.y, 125, 25);
        ctx.fill();
    }
    keyboard_event(key: any) {
        throw new Error("Method not implemented.");
    }

}