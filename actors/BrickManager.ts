import { Actor } from "./Actor";
import { Brick } from "./Brick";

export class BrickManager implements Actor {
    position: { x: number; y: number; };
    ctx: CanvasRenderingContext2D;
    currentBrick: Brick;
    bricks: Brick[];
    constructor() {

    }
    update(delta: number, canvasWidth: number, canvasHeight: number) { }
    draw(delta: number, ctx: CanvasRenderingContext2D) { }
    keyboard_event(key: string) { }
}