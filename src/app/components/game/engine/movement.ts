'use strict';
import drawMap from "./drawMap";

let movement = () => {
    const canvas: any = document.getElementById("canvas");
    const ctx: any = canvas.getContext("2d");
    let x: number = 0;
    let y: number = 0;

    ////

    document.addEventListener("keydown", (e) => {

        switch (e.keyCode) {
            case 37:
                x-=70;
                console.log('left');
                drawMap()
                break;
            case 38:
                y+=70;
                console.log('up');
                break;
            case 39:
                x+=70;
                console.log('right');
                drawMap()
                break;
            case 40:
                y-=70;
                console.log('down');
                drawMap()
                break;
        }

        console.log(x);

        ctx.translate(x, y);
    });
};

export default movement;