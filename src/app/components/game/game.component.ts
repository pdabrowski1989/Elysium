import {Component} from '@angular/core';
import './monsters/demon/demon.class';
import movement from './engine/movement';
import drawMap from "./engine/drawMap";

@Component({
    selector: "my-game",
    template: "<canvas height='8800' width='8800' id='canvas'></canvas>"
})

export class GameComponent {
    ngAfterViewInit() {
        this.renderGrid();
        movement();
    }

    renderGrid() {
        let x: number = 0;
        let y: number = 0;

        // ToDo: emit event on imageOnLoad = true;
        drawMap(x, y)
    }
}