import '@pixi/spine-pixi';

import { Application, Assets } from 'pixi.js';
import { loadAssests } from './init';
import { SpineBoy } from './spineBoy';

// Asynchronous IIFE
const main = async () => {
    // Create a PixiJS application.
    const app = new Application();

    // Intialize the application.
    await app.init({ background: '#1099bb', resizeTo: window });

    // Then adding the application's canvas to the DOM body.
    document.body.appendChild(app.canvas);

    // Load the assets.
    await loadAssests();

    // Create our character
    const spineBoy = new SpineBoy();

    // Adjust character transformation.
    spineBoy.view.x = app.screen.width / 2;
    spineBoy.view.y = app.screen.height - 80;
    spineBoy.spine.scale.set(0.5);

    // Add character to the stage.
    app.stage.addChild(spineBoy.view);
}

main();
