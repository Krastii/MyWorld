import * as THREE from "three";

const GLOBE_RADIUS = 10

export class WorldApp {
  _scene: THREE.Scene;
  _camera: THREE.PerspectiveCamera;
  _renderer: THREE.WebGLRenderer;
 // _sphere: THREE.Mesh;

  constructor() {
    this._scene = new THREE.Scene();
    this._camera = new THREE.PerspectiveCamera(
      45,
      1,
      0.1,
      1000
    );

    this._renderer = new THREE.WebGLRenderer();

    // const geometry = new THREE.SphereGeometry(GLOBE_RADIUS, 32, 16);
    // const material = new THREE.MeshBasicMaterial({ color: 0x351c75 });
    // this._sphere = new THREE.Mesh(geometry, material);
    // this._scene.add(this._sphere);

    // const geometry = new THREE.CircleGeometry( GLOBE_RADIUS, 32 );
    // const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
    // this._sphere = new THREE.Mesh( geometry, material );
    // this._scene.add( this._sphere );

    this._camera.position.z = 45;

    this._createMap()
  }

  addToDOM(domParent: HTMLElement | null) {
    if (!domParent) return;
    console.log(domParent);
    const minSize = Math.min(domParent.clientWidth, domParent.clientHeight)
    this._renderer.setSize(minSize, minSize);
    domParent.appendChild(this._renderer.domElement);
    this._animate();
  }

  _animate() {
    const animate = () => {
      requestAnimationFrame(animate);

      //this._scene.rotation.x += 0.01
      this._scene.rotation.y += 0.01

      this._renderer.render(this._scene, this._camera);
    };
    animate();
  }

  _createMap() {
    const rows = 90
    const DEG2RAD = 0.0174533
    const dotDensity = 0.8 

    const arrCordPoints = [] 

    for (let lat = -90; lat <= 90; lat += 180/rows) {
      const radius = Math.cos(Math.abs(lat) * DEG2RAD) * GLOBE_RADIUS;
      const circumference = radius * Math.PI * 2;
      const dotsForLat = circumference * dotDensity;

      const y = Math.sin(lat * DEG2RAD) * GLOBE_RADIUS
      
      for (let plosk = 0; plosk < dotsForLat; plosk++) {
        const long = -180 + plosk*360/dotsForLat;
        console.log(long,'long',y);
        const z = Math.sin(long * DEG2RAD) * radius
        const x = Math.cos(long * DEG2RAD) * radius
        arrCordPoints.push(y, x, z)
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( arrCordPoints, 3 ) );

    const material = new THREE.PointsMaterial( { color: 0x351c75 } );
    const points = new THREE.Points( geometry, material );

    this._scene.add( points );
  }
}


