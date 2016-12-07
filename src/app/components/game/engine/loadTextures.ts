'use strict';

import textures from '../textures/textures'

let loadTextures = (): any => {
    let i:number, j:number, a:any, b:any, c:any;


    for (a in textures) {
        console.log(a)


        for (b in textures[a]) {
            console.log(b)

           /* for(c in textures) {

            }*/
        }
    }
};

export default loadTextures;