import { Actor } from "./actor";

export class Brick implements Actor{
    x: number;
    y: number;
    ctx: CanvasRenderingContext2D;
    super(x: number, y: number, ctx: CanvasRenderingContext2D) {
        throw new Error("Method not implemented.");
    }
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