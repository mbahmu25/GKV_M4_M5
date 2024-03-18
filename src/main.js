import * as THREE from 'three';
var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.SphereGeometry( 1, 10, 10 );
var geometry2 = new THREE.BoxGeometry( 1, 1, 1 );
var geometry3 = new THREE.CylinderGeometry( 1, 1, 2, 32 ); 
var geometry4 = new THREE.TorusGeometry( 1, 0.1, 10, 100 ); 
var material = new THREE.MeshNormalMaterial();
var sphere = new THREE.Mesh( geometry, material );
var cube = new THREE.Mesh( geometry2, material );
var cylinder = new THREE.Mesh( geometry3, material );
var donut = new THREE.Mesh( geometry4, material );
cube.position.x= -2.5
cylinder.position.x= 2.5
donut.position.y = 3
scene.add( sphere,cube,cylinder,donut );
camera.position.z = 5;
camera.position.y = 2;
renderer.render( scene, camera );
// }
// var render = () => {
//     requestAnimationFrame( render );
//     document.addEventListener('keydown',(event)=>{
        
//     })
//     cube.rotation.x += 0.1;
//     cube.rotation.y += 0;
//     // cube.position.y <= 1 ? cube.position.y += 0.1 : cube.position.y = 1;
//     cube2.position.x = -3
//     renderer.render( scene, camera );
// }

// render();