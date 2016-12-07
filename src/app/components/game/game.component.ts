import {Component} from '@angular/core';
import './monsters/demon/demon.class';
import movement from './engine/movement';
import drawMap from "./engine/drawMap";

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
        const canvas: any = document.getElementById("canvas");
        const ctx: any = canvas.getContext("2d");


        // ToDo: emit event on imageOnLoad = true;
        setTimeout(() => {
            drawMap();
        }, 3000)
    }
}