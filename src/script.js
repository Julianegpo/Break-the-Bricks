import { Ball } from "../actors/Ball";
import { Bar } from "../actors/bar";
import { Constants } from "../assets/utils/Constants";

window.onload = () => {
    // onload setup getting canvas and generating actors
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let actors = generateActors(ctx, canvas);

    // render phase
    let lastFrame = 0;
    const render = (time) => {
        let delta = (time - lastFrame) / 1000;
        lastFrame = time;
        actors.forEach((e) => {
            e.update(delta);
        });
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        actors.forEach((e) => {
            e.draw(delta, ctx);
        });
        window.requestAnimationFrame(render);
    };

    window.requestAnimationFrame(render);

    // registering keyboard inputs for player movement
    document.body.addEventListener(Constants.KEY_EVENT_KEYDOWN, (e) => {
        actors.forEach((actor) => {
            actor.keyboard_event(e.key);
        });
    });
}

// generate the player bar and bricks for game start
function generateActors(ctx, canvas) {
    console.log("generating actors");
    const actors = [];
    let playerBar = new Bar({ x: (canvas.width) / 2, y: (canvas.width) / 9 }, ctx);
    let ball = new Ball(playerBar);
    actors.push(playerBar);
    actors.ball(ball);
    return actors;
}

// spawn bricks based on map
function spawnBricks() { }