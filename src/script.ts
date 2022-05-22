import { Ball } from "../actors/Ball";
import { Bar } from "../actors/Bar";
import { BrickManager } from "../actors/BrickManager";
import { FPSViewer } from "../actors/FPSViewer";

window.onload = () => {
    // onload setup getting canvas and generating actors
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    let actors = generateActors(ctx, canvas);

    // render phase
    let lastFrame = 0;
    const render = (time) => {
        let delta = (time - lastFrame) / 1000;
        lastFrame = time;
        actors.forEach((e) => {
            e.update(delta, canvas.width, canvas.height);
        });
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        actors.forEach((e) => {
            e.draw(delta, ctx);
        });
        window.requestAnimationFrame(render);
    };

    window.requestAnimationFrame(render);

    // registering keyboard inputs for player movement
    document.body.addEventListener('keydown', (e) => {
        actors.forEach((actor) => {
            actor.keyboard_event(e.key);
        });
    });
}

// generate the player bar and bricks for game start
function generateActors(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    const fpsViewer = new FPSViewer({ x: (canvas.width / 2) - 50, y: canvas.height });
    const playerBar = new Bar({ x: (canvas.width / 2) - 40, y: 450 }, ctx);
    const ball = new Ball({ x: 250, y: 100 }, ctx, playerBar);
    const brickManager = new BrickManager(ctx);

    return [
        fpsViewer,
        playerBar,
        ball,
        brickManager
    ];
}