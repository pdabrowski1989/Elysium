'use strict';
import textures from '../textures/textures';

let drawHero: any = (x: number, y: number) => {
    const canvas: any = document.getElementById("canvas");
    const ctx: any = canvas.getContext("2d");

    console.log(textures.monsters.demon.demon1_0.img, 'asdas');
    setTimeout(() => {
        ctx.drawImage(textures.monsters.demon.demon1_0.img, x, y, 70, 70);
    })
};


export default drawHero;