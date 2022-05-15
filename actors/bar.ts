import { Actor } from "./actor";

export class Bar implements Actor {
    position: { x: number; y: number; };
    ctx: CanvasRenderingContext2D;

    update(delta: number) {
    }
    draw(delta: number, ctx: CanvasRenderingContext2D) {
    }
    keyboard_event(key: any) {
    }
}