export interface Actor {
    x: number;
    y: number;
    ctx: CanvasRenderingContext2D;

    constructor(x:number, y:number, ctx:CanvasRenderingContext2D)
    update(delta:number);
    draw(delta:number, ctx:CanvasRenderingContext2D);
    keyboard_event(key);
}