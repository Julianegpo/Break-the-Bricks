import { Actor } from "./actor";
import { Constants } from "../assets/utils/Constants";

export class Bar implements Actor {
    position: { x: number; y: number; };
    ctx: CanvasRenderingContext2D;
    speed: number;

    constructor(position, ctx: CanvasRenderingContext2D, speed = 0) {
        this.position = { x: position.x, y: position.y };
        this.ctx = ctx;
        this.speed = speed;
    }
    update(delta: number, canvasWidth) {
        let newPosition = this.position.x + (this.speed * delta)
        if (newPosition + 80 <= canvasWidth
            && newPosition >= 0) {
            this.position.x = newPosition;
        }
    }
    draw(delta: number, ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = "white";
        ctx.fillStyle = "white";
        ctx.rect(this.position.x, this.position.y, 80, 15);
        ctx.fill();
    }
    keyboard_event(key: string) {
        switch (key) {
            case Constants.KEYDOWN_ARROW_RIGHT:
                this.speed = 225;
                break;
            case Constants.KEYDOWN_ARROW_LEFT:
                this.speed = -225;
                break;
            default:
                break;
        }
    }
}