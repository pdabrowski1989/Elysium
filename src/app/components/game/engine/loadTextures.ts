'use strict';
import textures from '../textures/textures';

let loadTextures = (): any => {
    let i: any, j: any, k: any;

    for(i in textures) {
        for(j in textures[i]) {
            for(k in textures[i][j]) {
                let img: any = new Image();

                img.src = textures[i][j][k].src;
                img.onload = () => {
                    textures[i][j][k].loaded = true;
                };

                if(textures[i][j][k].loaded = true) {
                    textures[i][j][k].img = img;
                }
            }
        }
    }

    console.log(textures);

    return true;
};

export default loadTextures;