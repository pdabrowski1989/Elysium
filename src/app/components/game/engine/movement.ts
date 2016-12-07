'use strict';
import drawHero from './drawHero';
import drawMap from './drawMap'

let movement = () => {
    const canvas: any = document.getElementById("canvas");
    const ctx: any = canvas.getContext("2d");
    let x: number = 0;
    let y: number = 0;

    console.log('tutaj')

    ////

    document.addEventListener("keydown", (e) => {
        console.log(x, y)

        switch (e.keyCode) {
            case 37:
                x -= 80;
                drawMap(0, 0)
                drawHero(x, y);
                break;
            case 38:
                y -= 80;
                drawMap(0, 0)
                drawHero(x, y);
                break;
            case 39:
                x += 80;
                drawMap(0, 0)
                drawHero(x, y);
                break;
            case 40:
                y += 80;
                drawMap(0, 0)
                drawHero(x, y);
                break;
        }
    });
};

export default movement;