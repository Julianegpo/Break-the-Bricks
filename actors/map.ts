import { Actor } from "./actor";

export class Map implements Actor{
    position: { x: number; y: number; };
    ctx: CanvasRenderingContext2D;
    map: string;
    constructor() {
        this.map = `
        BBBBBBBBBBBBBBBBBBB
        BBBBBBBBBBBBBBBBBBB
        BBBB...........BBBB
        ........BBB........
        ...................
        `;
    }

    update(delta: number) {
        throw new Error("Method not implemented.");
    }
    draw(delta: number, ctx: CanvasRenderingContext2D) {
        throw new Error("Method not implemented.");
    }
    keyboard_event(key: any) {
        throw new Error("Method not implemented.");
    }

}