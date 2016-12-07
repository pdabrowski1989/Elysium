import {Component} from '@angular/core';

import './monsters/demon/demon.class';
import movement from './engine/movement';
import textures from './textures/textures';
import loadTextures from './engine/loadTextures';
import drawMap from "./engine/drawMap";
import drawHero from "./engine/drawHero";


@Component({
    selector: "my-game",
    template: "<canvas height='800' width='800' id='canvas'></canvas>"
})

export class GameComponent {
    ngAfterViewInit() {
        this.renderGrid();
        movement();
    }

    renderGrid() {
        let x: number = 0;
        let y: number = 0;

        loadTextures().then(() => {
           console.log(textures)
            drawMap(x, y)
            drawHero()
        });
    }
}