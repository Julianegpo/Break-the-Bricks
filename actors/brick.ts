import { Actor } from "./actor";

export class Brick implements Actor {
    position: { x: number; y: number; };
    ctx: CanvasRenderingContext2D;
    width: number;
    height: number;
    padding: number;
    bricks: any;
    rows: number;
    col: number;

    constructor(position, ctx, width, height, padding = 1) {
        this.rows = 5;
        this.col = 5;
        this.bricks = new Array(NROWS);
        for (i = 0; i < NROWS; i++) {
            bricks[i] = new Array(NCOLS);
            for (j = 0; j < NCOLS; j++) {
                bricks[i][j] = 1;
            }
        }
    }
    update(delta: number) {
        throw new Error("Method not implemented.");
    }
    draw(delta: number, ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = "yellow";
        ctx.fillStyle = "yellow";
        ctx.rect(this.position.x, this.position.y, 125, 25);
        ctx.fill();

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < col; j++) {
                if (this.bricks[i][j] == 1) {
                    rect((j * (BRICKWIDTH + PADDING)) + PADDING,
                        (i * (BRICKHEIGHT + PADDING)) + PADDING,
                        BRICKWIDTH, BRICKHEIGHT);
                }
            }
        }
    }
    keyboard_event(key: any) {
        throw new Error("Method not implemented.");
    }

}