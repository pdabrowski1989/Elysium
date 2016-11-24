import {Component} from '@angular/core';
@Component({
    selector: "my-game",
    template: "<canvas height='1000' width='1000' id='canvas'></canvas>"
})

export class GameComponent {
    ngAfterViewInit() {
        this.renderGrid();
    }

    renderGrid() {
        let i: number, j: number;
        const canvas: any = document.getElementById("canvas");
        const ctx: any = canvas.getContext("2d");

        // Textures
        const grass_0: any = new Image();
        grass_0.onload = (): void => {

        };

        grass_0.src = "./src/app/components/game/textures/grounds/grass/grass1_0.png";

        // Map
        const map: any = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];

        let x: number = 0;
        let y: number = 0;

        // ToDo: emit event on imageOnLoad = true;
        let loop = (): void => {
            for (i = 0; i < map.length; i++) {
                for (j = 0; j < map[i].length; j++) {
                    ctx.drawImage(grass_0, x, y, 50, 50);
                    x += 50;
                }
                x = 0;
                y += 50
            }
        };

        loop();
    }
}