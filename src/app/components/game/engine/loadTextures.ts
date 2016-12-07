'use strict';
import textures from '../textures/textures';

let loadTextures = (): any => {
    let i: any, j: any, k: any;

    for (i in textures) {
        for (j in textures[i]) {
            for (k in textures[i][j]) {
                let promise = new Promise((res, rej) => {
                    let newImg: any = new Image();

                    newImg.src = textures[i][j][k].src;
                    newImg.onload = () => {
                        textures[i][j][k].loaded = true;
                    };

                    if (textures[i][j][k].loaded = true) {
                        textures[i][j][k].img = newImg;
                    }

                    res( textures[i][j][k].loaded)
                })

                promise.then(()=> {
                   console.log('success')
                })
            }
        }
    }
};

export default loadTextures;