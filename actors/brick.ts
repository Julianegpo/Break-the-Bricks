import { Actor } from "./actor";

export class Brick implements Actor{
    position: { x: number; y: number; };
    ctx: CanvasRenderingContext2D;
    
    update(delta: number) {
        throw new Error("Method not implemented.");
    }
    draw(delta: number, ctx: CanvasRenderingContext2D) {
        throw new Error("Method not implemented.");
    }
    keyboard_event(key: any) {
        throw new Error("Method not implemented.");
    }

}