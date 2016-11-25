'use strict';

import loadTextures from './loadTextures';
import textures from '../textures/textures';
import map from '../map/map';

let drawMap = (x:number, y:number) => {
    const canvas: any = document.getElementById("canvas");
    const ctx: any = canvas.getContext("2d");
    let i: number, j: number;

       if(loadTextures()) {
           for (i = 0; i < map.grounds.length; i++) {
               for (j = 0; j < map.grounds[i].length; j++) {

                   switch (map.grounds[i][j]) {
                       case 0:
                           ctx.drawImage(textures.grounds.grass.grass1_0, x, y, 70, 70);
                           break;
                       case 1:
                           ctx.drawImage(textures.grounds.lava.lava1_0, x, y, 70, 70);
                   }

                   x += 70;
               }
               x = 0;
               y += 70
           }
       }

};

export default drawMap;