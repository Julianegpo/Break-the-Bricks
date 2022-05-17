import { Actor } from "./actor";
import { Bar } from "./bar";

export class Ball implements Actor{
    position: { x: number; y: number; };
    ctx: CanvasRenderingContext2D;
    
    constructor(playerBar: Bar) {
        
    }
    update(delta: number) {
        throw new Error("Method not implemented.");
    }
    draw(delta: number, ctx: CanvasRenderingContext2D) {
        throw new Error("Method not implemented.");
    }
    keyboard_event(key: string) {
        throw new Error("Method not implemented.");
    }

}