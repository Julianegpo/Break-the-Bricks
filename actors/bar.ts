import { Actor } from "./actor";
import { Constants } from "../assets/utils/Constants";

export class Bar implements Actor {
    position: { x: number; y: number; };
    ctx: CanvasRenderingContext2D;
    speed: number;

    constructor(position, ctx: CanvasRenderingContext2D, speed = 5) {
        this.position = { x: position.x, y: position.y };
        this.ctx = ctx;
        this.speed = speed;
    }
    update(delta: number) {
        // this.position.x += this.speed;
        // if (condition) {
            
        // }
        // if (condition) {
            
        // }
    }
    draw(delta: number, ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = "white";
        ctx.fillStyle = "white";
        ctx.rect(this.position.x, this.position.y, 125, 25);
        ctx.fill();
    }
    keyboard_event(key: string) {
        switch (key) {
            case Constants.KEYDOWN_ARROW_RIGHT:
                break;
            case Constants.KEYDOWN_ARROW_LEFT:
                break;
            default:
                break;
        }
    }
}