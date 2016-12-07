'use strict';

import loadTextures from './loadTextures';
import textures from '../textures/textures';
import map from '../map/map';

let drawMap = () => {
    const canvas: any = document.getElementById("canvas");
    const ctx: any = canvas.getContext("2d");
    let type: any, i: number, j: number;

    loadTextures();

    /*if (loadTextures()) {
        for (type in map) {

            let x: number = 0;
            let y: number = 0;

            if (map.hasOwnProperty(type)) {
                for (i = 0; i < 28; i++) {

                    for (j = 0; j < map[type][i].length; j++) {
                        switch (map[type][i][j]) {
                            case 0:
                                ctx.drawImage(i0, x, y, 70, 70);
                                break;
                            case 11:
                                ctx.drawImage(i1, x, y, 70, 70);
                                break;
                            case 1:
                                ctx.drawImage(i2, x, y, 70, 70);
                                break;
                        }
                        x += 70;
                    }
                    x = 0;
                    y += 70
                }
            }
        }
    }*/
};

export default drawMap;