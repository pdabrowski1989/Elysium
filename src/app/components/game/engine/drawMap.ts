'use strict';

let draw = (x:number, y:number, map:number[][], ctx:any, i1:any, i2:any) => {
    let i: number, j: number;

    console.log(x, y, map, ctx)

    for (i = 0; i < map.length; i++) {
        for (j = 0; j < map[i].length; j++) {
            if (map[i][j] === 0) {
                ctx.drawImage(i1, x, y, 70, 70);
            } else if (map[i][j] === 1) {
                ctx.drawImage(i2, x, y, 70, 70);
            }

            x += 70;
        }
        x = 0;
        y += 70
    }
};

export default draw;