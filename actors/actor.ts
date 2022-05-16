export interface Actor {
    position: {x:number, y:number}
    ctx: CanvasRenderingContext2D;

    update(delta:number);
    draw(delta:number, ctx:CanvasRenderingContext2D);
    keyboard_event(key:string);
}