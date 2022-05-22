import { Actor } from "./Actor";

export class BrickManager implements Actor {
    bricks: number[][];
    nrows: number = 5;
    ncols: number = 5;
    padding: number = 1;
    brickWidth: number;
    brickHeight: number;
    ctx: CanvasRenderingContext2D;
    position: { x: number; y: number; };

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
        this.bricks = new Array(this.nrows);
        for (let i = 0; i < this.nrows; i++) {
            this.bricks[i] = new Array(this.ncols);
            for (let j = 0; j < this.ncols; j++) {
                this.bricks[i][j] = 1;
            }
        }
    }
    update(delta: number, canvasWidth: number, canvasHeight: number) {
        // check if theres 1 or 0 on the position
        // if [i][j] = 0 -> theres a brick destroyed
        // else [i][j] = 1 -> draw brick 
        for (let i = 0; i < this.nrows; i++) {
            for (let j = 0; j < this.ncols; j++) {
                if (this.bricks[i][j] == 1) {
                    this.ctx.strokeStyle = "yellow";
                    this.ctx.fillStyle = "yellow";
                    this.ctx.rect(
                        (j * (this.brickWidth + this.padding)) + this.padding,
                        (i * (this.brickHeight + this.padding)) + this.padding,
                        this.brickWidth, this.brickHeight
                    );
                    this.ctx.fill();
                }
            }
        }
    }
    draw(delta: number, ctx: CanvasRenderingContext2D) {
        // check if theres 1 or 0 on the position
        // if [i][j] = 0 -> theres a brick destroyed
        // else [i][j] = 1 -> draw brick 
        for (let i = 0; i < this.nrows; i++) {
            for (let j = 0; j < this.ncols; j++) {
                if (this.bricks[i][j] == 1) {
                    this.ctx.strokeStyle = "yellow";
                    this.ctx.fillStyle = "yellow";
                    this.ctx.rect(
                        (j * (this.brickWidth + this.padding)) + this.padding,
                        (i * (this.brickHeight + this.padding)) + this.padding,
                        this.brickWidth, this.brickHeight
                    );
                    this.ctx.fill();
                }
            }
        }
    }
    keyboard_event(key: string) { }
}