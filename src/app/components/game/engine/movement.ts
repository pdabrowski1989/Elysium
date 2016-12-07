'use strict';

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
                break;
            case 38:
                y+=70;
                console.log('up');
                break;
            case 39:
                x+=70;
                console.log('right');
                break;
            case 40:
                y-=70;
                console.log('down');
                break;
        }

        console.log(x);

        ctx.translate(x, y);
    });
};

export default movement;