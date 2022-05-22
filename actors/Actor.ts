import { BrickManager } from "./BrickManager";

export interface Actor {
    position: {x:number, y:number}
    ctx: CanvasRenderingContext2D;

    update(delta: number, canvasWidth: number, canvasHeight: number,
        brickManager: BrickManager);
    draw(delta:number, ctx:CanvasRenderingContext2D, brickManager: BrickManager);
    keyboard_event(key:string);
}