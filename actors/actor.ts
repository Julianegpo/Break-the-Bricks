export interface Actor {
    position: {x:number, y:number}
    ctx: CanvasRenderingContext2D;

    update(delta: number, canvasWidth:number, canvasHeight:number);
    draw(delta:number, ctx:CanvasRenderingContext2D);
    keyboard_event(key:string);
}