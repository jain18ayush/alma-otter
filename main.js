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

const geo = new THREE.BoxGeometry(2, 10, 20);
const mesh = new THREE.Mesh(geo, materialText);
mesh.position.set(25,8,5);
scene.add(mesh)

const geometry = new THREE.BoxGeometry( 100, 100, 0.1 );
const material = new THREE.MeshPhongMaterial({ color: 0xe4d8c7 });
const cube = new THREE.Mesh( geometry, material );
scene.add(cube);

cube.rotation.x = (Math.PI) / 2;
cube.position.y = -29.95;

const wallHeight = 60;
const wallGeometry = new THREE.BoxGeometry(100, wallHeight, 0.1);
const wallMaterial = new THREE.MeshStandardMaterial({ color: 0xece4d8 });
const backWall = new THREE.Mesh(wallGeometry, wallMaterial);
backWall.position.z = -50;
scene.add(backWall);

const leftWall = new THREE.Mesh(wallGeometry, wallMaterial);
leftWall.position.x = -50;
leftWall.rotation.y = Math.PI / 2;
scene.add(leftWall);

const rightWall = new THREE.Mesh(wallGeometry, wallMaterial);
rightWall.position.x = 50;
rightWall.rotation.y = Math.PI / 2;
scene.add(rightWall);

const counterMaterial = new THREE.MeshStandardMaterial({ color: 0x754207 });
const counterTopGeo = new THREE.BoxGeometry(80, 1, 10);
const counterTop = new THREE.Mesh(counterTopGeo, counterMaterial);
counterTop.position.x = 15;
counterTop.position.y = -9.4;
counterTop.position.z = 10;
counterTop.rotation.y = Math.PI / 2;
scene.add(counterTop);

var textureLoader = new THREE.TextureLoader();                             
var texture0 = textureLoader.load('chalkboard.jpeg');  

var menuMaterial = [
	new THREE.MeshStandardMaterial({color: 0x1b3627}),
	new THREE.MeshStandardMaterial({color: 0x1b3627}),
	new THREE.MeshStandardMaterial({color: 0x1b3627}),
	new THREE.MeshStandardMaterial({color: 0x1b3627}),
	new THREE.MeshStandardMaterial({color: 0x1b3627}),
	new THREE.MeshStandardMaterial({map: texture0})
];

const menuGeometry = new THREE.BoxGeometry(80, 20, 1);
const menu = new THREE.Mesh(menuGeometry, menuMaterial);
menu.position.x = 49;
menu.position.y = 15;
menu.rotation.y = Math.PI / 2;
scene.add(menu);

const tablegeo = new THREE.CylinderGeometry(15, 15, 3.0, 32, 32, false);
const table = new THREE.Mesh(tablegeo, counterMaterial);
table.position.x = -22.5;
table.position.y = -10;
table.position.z = -22.5;
scene.add(table);

const tableLegGeo = new THREE.CylinderGeometry(5, 5, 20, 32, 32, false);
const tableLeg = new THREE.Mesh(tableLegGeo, counterMaterial);
tableLeg.position.x = -22.5;
tableLeg.position.y = -19;
tableLeg.position.z = -22.5;
scene.add(tableLeg);

const chair1Geo = new THREE.BoxGeometry(10, 10, 10);
const chair1 = new THREE.Mesh(chair1Geo, counterMaterial);
chair1.position.x = -35;
chair1.position.y = -24;
chair1.position.z = -35;
scene.add(chair1);

const chair2 = new THREE.Mesh(chair1Geo, counterMaterial);
chair2.position.x = -11.25;
chair2.position.y = -24;
chair2.position.z = -11.25;
scene.add(chair2);

const counterTopGeo1 = new THREE.BoxGeometry(100, 1, 10);
const counterTop1 = new THREE.Mesh(counterTopGeo1, counterMaterial);
counterTop1.position.x = 45;
counterTop1.position.y = -9.4;
counterTop1.rotation.y = Math.PI / 2;
scene.add(counterTop1);

const counterMat = new THREE.MeshStandardMaterial({color: 0xefefed});
const counterGeo = new THREE.BoxGeometry(80, 20, 10);
const counter = new THREE.Mesh(counterGeo, counterMat);
counter.position.x = 15;
counter.position.y = -19.9;
counter.position.z = 10;
counter.rotation.y = Math.PI / 2;
scene.add(counter);

const counterGeo1 = new THREE.BoxGeometry(100, 20, 10);
const counter1 = new THREE.Mesh(counterGeo1, counterMat);
counter1.position.x = 45;
counter1.position.y = -19.9;
counter1.rotation.y = Math.PI / 2;
scene.add(counter1);

const personGeo = new THREE.BoxGeometry(10, 30, 10);
const person = new THREE.Mesh(personGeo, wallMaterial);
person.position.x = 30;
person.position.y = -14.9;
person.position.z = 25;
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

camera.position.z = 100;
controls.update();

function animate() {
	requestAnimationFrame( animate );
	changeCanvas()
   texture.needsUpdate = true
    controls.update();
	renderer.render( scene, camera );
}

animate();