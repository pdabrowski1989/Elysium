'use strict';
import textures from '../textures/textures';

let drawHero: any = () => {
    const canvas: any = document.getElementById("canvas");
    const ctx: any = canvas.getContext("2d");

    console.log(textures.monsters.demon.demon1_0.img, 'asdas');
debugger;
    ctx.drawImage(textures.monsters.demon.demon1_0.img, 20, 20, 70, 70);
};


export default drawHero;