import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

let width = window.innerWidth
let height = window.innerHeight
const size = 256
const container = document.querySelector('#threejs-container')
const canvas = document.createElement('canvas'),
ctx = canvas.getContext('2d')
function changeCanvas() {
	ctx.font = '20pt Arial'
	ctx.fillStyle = 'white'
	ctx.fillRect(0, 0, canvas.width, canvas.height)
	ctx.fillStyle = 'black'
	ctx.textAlign = 'center'
	ctx.textBaseline = 'middle'
	const text = 'Do you want your \ndrink in plastic cup \nor reusable cup?';
	const lines = text.split('\n');
	const lineHeight = 30; // Adjust this value to set the spacing between lines
	lines.forEach((line, index) => {
		ctx.fillText(line, canvas.width / 2, canvas.height / 2 - (lines.length - 1) / 2 * lineHeight + index * lineHeight);
	});
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
container.append(renderer.domElement);
renderer.render(scene, camera);

const texture = new THREE.Texture(canvas)

var materialText = [
	new THREE.MeshStandardMaterial({color: 0xFFFFFF}),
	new THREE.MeshStandardMaterial({map: texture}),
	new THREE.MeshStandardMaterial({color: 0xFFFFFF}),
	new THREE.MeshStandardMaterial({color: 0xFFFFFF}),
	new THREE.MeshStandardMaterial({color: 0xFFFFFF}),
	new THREE.MeshStandardMaterial({color: 0xFFFFFF})
];

const geo = new THREE.BoxGeometry(0.2, 1, 2);
const mesh = new THREE.Mesh(geo, materialText);
mesh.position.set(2.5,1,0.5);
scene.add(mesh)

const geometry = new THREE.BoxGeometry( 10, 10, 0.1 );
const material = new THREE.MeshPhongMaterial({ color: 0xe4d8c7 });
const cube = new THREE.Mesh( geometry, material );
scene.add(cube);

cube.rotation.x = (Math.PI) / 2;
cube.position.y = -2.95;

const wallHeight = 6;
const wallGeometry = new THREE.BoxGeometry(10, wallHeight, 0.1);
const wallMaterial = new THREE.MeshStandardMaterial({ color: 0xece4d8 });
const backWall = new THREE.Mesh(wallGeometry, wallMaterial);
backWall.position.z = -5;
scene.add(backWall);

const leftWall = new THREE.Mesh(wallGeometry, wallMaterial);
leftWall.position.x = -5;
leftWall.rotation.y = Math.PI / 2;
scene.add(leftWall);

const rightWall = new THREE.Mesh(wallGeometry, wallMaterial);
rightWall.position.x = 5;
rightWall.rotation.y = Math.PI / 2;
scene.add(rightWall);

const counterMaterial = new THREE.MeshStandardMaterial({ color: 0x754207 });
const counterTopGeo = new THREE.BoxGeometry(8, 0.1, 1);
const counterTop = new THREE.Mesh(counterTopGeo, counterMaterial);
counterTop.position.x = 1.5;
counterTop.position.y = -0.85;
counterTop.position.z = 1;
counterTop.rotation.y = Math.PI / 2;
scene.add(counterTop);

const menuMaterial = new THREE.MeshStandardMaterial({color: 0x1b3627});
const menuGeometry = new THREE.BoxGeometry(8, 2, 0.1);
const menu = new THREE.Mesh(menuGeometry, menuMaterial);
menu.position.x = 4.9;
menu.position.y = 1.5;
menu.rotation.y = Math.PI / 2;
scene.add(menu);

const tablegeo = new THREE.CylinderGeometry(1.5, 1.5, 0.3, 32, 32, false);
const table = new THREE.Mesh(tablegeo, counterMaterial);
table.position.x = -2.25;
table.position.y = -1.0;
table.position.z = -2.25;
scene.add(table);

const tableLegGeo = new THREE.CylinderGeometry(0.5, 0.5, 2, 32, 32, false);
const tableLeg = new THREE.Mesh(tableLegGeo, counterMaterial);
tableLeg.position.x = -2.25;
tableLeg.position.y = -1.9;
tableLeg.position.z = -2.25;
scene.add(tableLeg);

const chair1Geo = new THREE.BoxGeometry(1, 1, 1);
const chair1 = new THREE.Mesh(chair1Geo, counterMaterial);
chair1.position.x = -3.5;
chair1.position.y = -2.4;
chair1.position.z = -3.5;
scene.add(chair1);

const chair2 = new THREE.Mesh(chair1Geo, counterMaterial);
chair2.position.x = -1.125;
chair2.position.y = -2.4;
chair2.position.z = -1.125;
scene.add(chair2);

const counterTopGeo1 = new THREE.BoxGeometry(10, 0.1, 1);
const counterTop1 = new THREE.Mesh(counterTopGeo1, counterMaterial);
counterTop1.position.x = 4.5;
counterTop1.position.y = -0.85;
counterTop1.rotation.y = Math.PI / 2;
scene.add(counterTop1);

const counterMat = new THREE.MeshStandardMaterial({color: 0xefefed});
const counterGeo = new THREE.BoxGeometry(8, 2, 1);
const counter = new THREE.Mesh(counterGeo, counterMat);
counter.position.x = 1.5;
counter.position.y = -1.9;
counter.position.z = 1;
counter.rotation.y = Math.PI / 2;
scene.add(counter);

const counterGeo1 = new THREE.BoxGeometry(10, 2, 1);
const counter1 = new THREE.Mesh(counterGeo1, counterMat);
counter1.position.x = 4.5;
counter1.position.y = -1.9;
counter1.rotation.y = Math.PI / 2;
scene.add(counter1);

const personGeo = new THREE.BoxGeometry(1, 3, 1);
const person = new THREE.Mesh(personGeo, wallMaterial);
person.position.x = 3;
person.position.y = -0.9;
person.position.z = 2.5;
person.rotation.y = Math.PI / 2;
scene.add(person);


renderer.setClearColor(0xffffff); // Set background color to black

const ambientLight = new THREE.AmbientLight(0xfcfafa); // Soft white light
scene.add(ambientLight);

const light = new THREE.AmbientLight(0xfcfafa); // Soft white light
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.75);
directionalLight.position.set(1, 1, 1).normalize();
camera.add(directionalLight);
scene.add(camera);

const controls = new OrbitControls( camera, renderer.domElement );

camera.position.z = 10;
controls.update();

function animate() {
	requestAnimationFrame( animate );
	changeCanvas()
   texture.needsUpdate = true
    controls.update();
	renderer.render( scene, camera );
}

animate();