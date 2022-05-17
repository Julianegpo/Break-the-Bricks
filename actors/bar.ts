import { Actor } from "./actor";
import { Constants } from "../assets/utils/Constants";

export class Bar implements Actor {
    position: { x: number; y: number; };
    ctx: CanvasRenderingContext2D;

    constructor(position, ctx: CanvasRenderingContext2D) {
        this.position = { x: position.x, y: position.y };
        this.ctx = ctx;
    }
    update(delta: number) {
    }
    draw(delta: number, ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = "red";
        ctx.fillStyle = "red";
        ctx.rect(this.position.x, this.position.y, 50, 25);
        ctx.fill();
    }
    keyboard_event(key: string) {
        switch (key) {
            case Constants.KEYDOWN_ARROW_RIGHT:
                console.log("right");
                break;
            case Constants.KEYDOWN_ARROW_LEFT:
                console.log("left");
                break;
            default:
                console.log("not a valid key");
                break;
        }
    }
}