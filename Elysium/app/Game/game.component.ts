import {Component} from '@angular/core';
@Component({
    selector: 'game',
    template: '<div id="canvas"></div>'
})
export class GameComponent {
    constructor() {
    }

    ngOnInit() {
        this.renderView()
    }

    renderView() {
       let canvas : any = document.getElementById("canvas");

        canvas.appendChild('<h1>aaa</h1>')
    }
}