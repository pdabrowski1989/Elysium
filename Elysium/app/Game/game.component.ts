import {Component} from '@angular/core';

@Component({
    selector: 'game',
    template: '<div id="container"></div>'
})
export class GameComponent {
    constructor() {
    }

    ngOnInit() {
        this.renderView()
    }

    renderView() {
        let container = document.getElementById('container');
        let scene = new THREE.Scene();
        let renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth - 100, window.innerHeight - 100);

        // PerspectiveCamera( fov, aspect, near, far )
        let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);

        camera.position.z = 1000;
        camera.position.x = 500;
        camera.position.y = 500;

        var cubegeometry = new THREE.BoxGeometry(30, 30, 30);
        var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
        var cube = new THREE.Mesh( cubegeometry, material );
        scene.add( cube );

        renderer.render(scene, camera);


        container.appendChild(renderer.domElement);
    }
}