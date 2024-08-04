import './assets/style/style.css';
import * as THREE from '/node_modules/three/build/three.module.js';
import { OrbitControls } from '/node_modules/three/examples/jsm/controls/OrbitControls';

// AxesHelper

import { AxesHelper } from 'three/src/helpers/AxesHelper.js';

// LoaderUtils

// GLTFLoader

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { normalMap } from 'three/examples/jsm/nodes/Nodes.js';


// create scene
const scene = new THREE.Scene(); // define scene

// camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // define camera

// renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight)

// torus
const torusGeometryTexture = new THREE.TextureLoader().load('images/pexels-cottonbro-9665188-min.jpg'); // define texture
const torusGeometryNormalTexture = new THREE.TextureLoader().load('images/188_norm-min.jpg');

const torusGeometry = new THREE.TorusGeometry(16, 2, 100, 100); // define geometry
const torusMaterial = new THREE.MeshStandardMaterial({
  // the color map
  map: torusGeometryTexture,
  // the texture to create a normal map. The RGB values affect the surface normal for each pixel 
  // fragment and change the way the color is lit. Normal maps do not change the actual shape of 
  // the surface, only the lighting
  normalMap: torusGeometryNormalTexture,
}); // define material
const torus = new THREE.Mesh(torusGeometry, torusMaterial); // define the mesh
//scene.add(torus); // add torus to scene

// lights
const pointLight = new THREE.PointLight(0xffffff); // define pointLight
pointLight.position.set(10, 10, 10); // set pointLight position
const ambientLight = new THREE.AmbientLight(0xffffff); // define ambientLight
scene.add(pointLight, ambientLight); // add pointLight and ambientLight to scene

// helpers
// const lightHelper = new THREE.PointLightHelper(pointLight); // define pointLight
// const gridHelper = new THREE.GridHelper(200, 50); // define gridHelper
// scene.add(lightHelper, gridHelper); // add pointLight and gridHelper to scene

// orbit controls
const controls = new OrbitControls(camera, renderer.domElement); // define orbitControls

// scene background
const spaceTexture = new THREE.TextureLoader().load('images/pexels-nicole-avagliano-2312040-min.jpg'); // define texture
//scene.background = spaceTexture; // define scene background

// dodecahedron
const dodecahedronGeometryTexture = new THREE.TextureLoader().load('images/pexels-bella-chew-1368317-min.jpg'); // define texture
const dodecahedronGeometryNormalTexture = new THREE.TextureLoader().load('images/197_norm-min.jpg'); // define normal texture

const dodecahedron = new THREE.Mesh(
  new THREE.DodecahedronGeometry(12, 0), // define geometry
  new THREE.MeshStandardMaterial({
    // the color map
    map: dodecahedronGeometryTexture,
    // the texture to create a normal map. The RGB values affect the surface normal for each pixel 
    // fragment and change the way the color is lit. Normal maps do not change the actual shape of 
    // the surface, only the lighting
    normalMap: dodecahedronGeometryNormalTexture,
  }) // define material
); // define mesh
//scene.add(dodecahedron); // add dodecahedron to scene

// capsule
const capsuleGeometryTexture = new THREE.TextureLoader().load('images/pexels-karolina-grabowska-4040567-min.jpg'); // define texture
const capsuleGeometryNormalTexture = new THREE.TextureLoader().load('images/151_norm-min.jpg'); // define normal texture

const capsule = new THREE.Mesh(
  new THREE.CapsuleGeometry(6, 1, 4, 10), // define geometry
  new THREE.MeshStandardMaterial({
    map: capsuleGeometryTexture,
    normalMap: capsuleGeometryNormalTexture,
  }) // define material
); // define mesh
capsule.position.set(-40, 50, -5); // set position
//scene.add(capsule); // add capsule to scene

// icosahedron
const icosahedronTexture = new THREE.TextureLoader().load('images/pexels-maksim-romashkin-7108217-min.jpg');
const icosahedronNormalTexture = new THREE.TextureLoader().load('images/161_norm-min.jpg');

const icosahedron = new THREE.Mesh(
  new THREE.IcosahedronGeometry(8, 0),
  new THREE.MeshStandardMaterial({
    map: icosahedronTexture,
    normalMap:icosahedronNormalTexture,
  })
);
icosahedron.position.set(-50, 20, 30);
//scene.add(icosahedron);

// octahedron
const octahedronTexture = new THREE.TextureLoader().load('images/seamless-g8ce10d423_1920-min.jpg');
const octahedronNormalTexture =  new THREE.TextureLoader().load('images/165_norm-min.jpg');

const octahedron = new THREE.Mesh(
  new THREE.OctahedronGeometry(6, 0),
  new THREE.MeshStandardMaterial({
    map: octahedronTexture,
    normalMap: octahedronNormalTexture,
  })
);
octahedron.position.set(50, -40, -20);
//scene.add(octahedron);

// moon
///const moonTexture = new THREE.TextureLoader().load('images/7XyId7s-min.jpeg');

//const moonTexture = new THREE.TextureLoader().load('images/dragon-texture.jpg');

//planet_texture_by_thunorrad
const moonTexture = new THREE.TextureLoader().load('images/planet_texture_by_thunorrad.jpg');


const moonNormalTexture = new THREE.TextureLoader().load('images/172_norm-min.jpg');

const moon = new THREE.Mesh(
  
  //new THREE.SphereGeometry(12, 32, 32),

  //new THREE.SphereGeometry(20, 20, 20),

  new THREE.SphereGeometry(200, 200, 200),


  new THREE.MeshStandardMaterial({
    map: moonTexture,
    //normalMap: moonNormalTexture,
    //normalMap: moonTexture,
    
  })
);
//moon.position.set(-30, -20, 35);

moon.position.set(0, 0, 0);

//moon.position.set(-30, -20, 35);


scene.add(moon);


// load glb file
/*
YELLOW VOXEL
( -47.086 , 42.943 , -122.245 )



BLUE VOXEL
( -64.1 , 33.168 , -156.455 )
 */

const loader = new GLTFLoader();

loader.load('/images/yellow.glb', function(gltf) {
  scene.add(gltf.scene);
  gltf.scene.position.set(-47.086, 42.943, -122.245);
  gltf.scene.scale.set(1, 1, 1);

  // addCoordinateMarkers

  const axesHelper = new AxesHelper(15);

  //scene.add( axesHelper );

  //gltf.scene.add(axesHelper);

  axesHelper.position.set(-47.086, 42.943, -122.245);
  gltf.scene.add(axesHelper);




});

// addCoordinateMarkers

//const axesHelper = new AxesHelper( 50 );
//scene.add( axesHelper );


/*
loader.load('/images/green.glb', function(gltf) {
  scene.add(gltf.scene);
  gltf.scene.position.set(-51.858, 33.168, -118.778);
  gltf.scene.scale.set(0.5, 0.5, 0.5);
});
*/

loader.load('/images/blue.glb', function(gltf) {
  scene.add(gltf.scene);
  gltf.scene.position.set(-64.1, 33.168, -156.455);
  gltf.scene.scale.set(1, 1, 1);

  const axesHelper = new AxesHelper(15);

  axesHelper.position.set(-64.1, 33.168, -156.455);
  gltf.scene.add(axesHelper);




});


//GREEN VOXEL
//( -51.858 , 33.168 , -118.778 )

loader.load('/images/green.glb', function(gltf) {
  scene.add(gltf.scene);
  gltf.scene.position.set(-51.858, 33.168, -118.778);
  gltf.scene.scale.set(1, 1, 1);

  const axesHelper = new AxesHelper(15);

  axesHelper.position.set(-51.858, 33.168, -118.778);
  gltf.scene.add(axesHelper);


});






// animation on scroll
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  
  /*
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;
  */

  moon.rotation.x += 0.5;
  moon.rotation.y += 0.5;
  moon.rotation.z += 0.5;


  dodecahedron.rotation.y += 0.08;
  dodecahedron.rotation.z += 0.04;
  dodecahedron.rotation.z += 0.02;

  capsule.rotation.y += 0.03;
  capsule.rotation.z += 0.05;
  capsule.rotation.z += 0.01;

  icosahedron.rotation.y += 0.07;
  icosahedron.rotation.z += 0.09;
  icosahedron.rotation.z += 0.06;

  octahedron.rotation.y += 0.06;
  octahedron.rotation.z += 0.03;
  octahedron.rotation.z += 0.01;

  /*
  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
  */

  camera.position.z = t * -80;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;

}

document.body.onscroll = moveCamera;
moveCamera();

// make canvas responsive
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight; // update aspect ratio
  camera.updateProjectionMatrix(); // apply changes

  renderer.setSize(window.innerWidth, window.innerHeight); // update size
  renderer.setPixelRatio(window.devicePixelRatio); // use to render at the native screen resolution
  // renderer.render(scene, camera); // Not needed since it is called in rendering()
});

function addStar() {

  ///const geometry = new THREE.SphereGeometry(0.25, 24, 24); // define geometry

  //const geometry = new THREE.SphereGeometry(1, 24, 24); // define geometry

  //const geometry = new THREE.SphereGeometry(3, 24, 24); // define geometry
  
  const geometry = new THREE.BoxGeometry(6, 6, 6); // define geometry
  
  ///const material = new THREE.MeshStandardMaterial({color:0xffffff}); // define material

  // color is green
  const material = new THREE.MeshStandardMaterial({color:0x00ff00}); // define material


  const star = new THREE.Mesh(geometry, material); // define the mesh



  // create an array of 3 values randomly generated from -100 and +100
  //const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(400));

  star.position.set(x, y, z); // set the position of the star

  scene.add(star); // add star to scene


  const axesHelper = new AxesHelper( 15 );
  axesHelper.position.set(x, y, z);
  scene.add(axesHelper);


}


function addStar2() {

  ///const geometry = new THREE.SphereGeometry(0.25, 24, 24); // define geometry

  //const geometry = new THREE.SphereGeometry(3, 24, 24); // define geometry
  
  const geometry = new THREE.BoxGeometry(6, 6, 6); // define geometry
  
  ///const material = new THREE.MeshStandardMaterial({color:0xffffff}); // define material

  // color is yellow
  const material = new THREE.MeshStandardMaterial({color:0xffff00}); // define material


  const star = new THREE.Mesh(geometry, material); // define the mesh



  // create an array of 3 values randomly generated from -100 and +100
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(400));

  star.position.set(x, y, z); // set the position of the star

  scene.add(star); // add star to scene

  const axesHelper = new AxesHelper( 15 );
  axesHelper.position.set(x, y, z);
  scene.add(axesHelper);
}

function addStar3() {

  ///const geometry = new THREE.SphereGeometry(0.25, 24, 24); // define geometry

  //const geometry = new THREE.SphereGeometry(3, 24, 24); // define geometry

  const geometry = new THREE.BoxGeometry(6, 6, 6); // define geometry

  
  
  ///const material = new THREE.MeshStandardMaterial({color:0xffffff}); // define material

  // color is Blue
  const material = new THREE.MeshStandardMaterial({color:0x0000ff}); // define material


  const star = new THREE.Mesh(geometry, material); // define the mesh



  // create an array of 3 values randomly generated from -100 and +100
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(400));

  star.position.set(x, y, z); // set the position of the star

  scene.add(star); // add star to scene

  const axesHelper = new AxesHelper( 15 );
  axesHelper.position.set(x, y, z);
  scene.add(axesHelper);
}



// create an array of X values and for each values call the addStar function
Array(550).fill().forEach(addStar);

Array(550).fill().forEach(addStar2);

Array(550).fill().forEach(addStar3);


// rendering the scene
function rendering() {
  // rerender every time the page refreshes (pause when on another tab)
  requestAnimationFrame(rendering);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.001;

  dodecahedron.rotation.x += 0.01;
  dodecahedron.rotation.y += 0.02;
  dodecahedron.rotation.z += 0.003;

  capsule.rotation.x += 0.003;
  capsule.rotation.y += 0.02;
  capsule.rotation.z += 0.01;

  icosahedron.rotation.x += 0.01;
  icosahedron.rotation.y += 0.002;
  icosahedron.rotation.z += 0.01;

  octahedron.rotation.x += 0.001;
  octahedron.rotation.y += 0.01;
  octahedron.rotation.z += 0.02;

  /*
  moon.rotation.x += 0.005;
  moon.rotation.y += 0.005;
  moon.rotation.z += 0.005;
  */

  // update OrbitControls controls 
  controls.update();

  renderer.render(scene, camera);
}

rendering();