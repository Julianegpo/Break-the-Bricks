import { Constants } from "../assets/utils/Constants";
import { Actor } from "./actor";
import { Bar } from "./bar";

export class Ball implements Actor {
    position: { x: number; y: number; };
    ctx: CanvasRenderingContext2D;
    speed: { dx: number, dy: number };
    playerBar: Bar;

    constructor(playerBar, ctx: CanvasRenderingContext2D) {
        this.position = { x: playerBar.position.x, y: 450 };
        this.ctx = ctx;
        this.speed = { dx: 2, dy: 4 };
        this.playerBar = playerBar;
    }
    update(delta: number, canvasWidth, canvasHeight) {
        // canvas limits
        if (this.position.x + this.speed.dx >= canvasWidth
            || this.position.x + this.speed.dx <= 0)
            this.speed.dx = -this.speed.dx;
        if (this.position.y + this.speed.dy >= canvasHeight
            || this.position.y + this.speed.dy <= 0)
            this.speed.dy = -this.speed.dy;

        // colider with bar
        if (this.position.x > this.playerBar.position.x
            && this.position.x < this.playerBar.position.x + 125
            && this.position.y > this.playerBar.position.y
            && this.position.y < this.playerBar.position.y + 25) {
            console.log("colide");
            this.speed.dy = -this.speed.dy;
        }

        // ball movement
        this.position.x += this.speed.dx * (delta * 200);
        this.position.y += this.speed.dy * (delta * 200);
    }
    draw(delta: number, ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = "pink";
        ctx.fillStyle = "pink";
        ctx.beginPath();
        ctx.arc(this.position.x + 25, this.position.y - 20, 10, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
    }
    keyboard_event(key: string) { }

}