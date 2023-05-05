
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  90,
  window.innerWidth / window.innerHeight,
  0.1,
  500
);

//create an object
const geometry = new THREE.SphereGeometry(2, 10, 9);
var material = new THREE.MeshBasicMaterial({
  color: 0xfffff,
  wireframe: false,
});
var cube = new THREE.Mesh(geometry, material);
cube.setColor = function (color) {
  cube.material.color.set(color);
};

// ReactDOM.render(
//   <Button onClick={() => cube.setColor(getRandomColor())} />,
//   document.getElementById('root')
// );
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//create renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);

//add OrbitControls for mouse rotation
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // smooth mouse movement
controls.enableZoom = false; // disable zoom
controls.rotateSpeed = 0.5; // set rotation speed

scene.add(cube);
camera.position.z = 5;
// const buttonContainer = document.createElement("div");
// document.body.appendChild(buttonContainer);
// ReactDOM.render(
//   React.createElement(Button, { onClick: () => cube.setColor(getRandomColor()) }),
//   buttonContainer
// );
const button = document.getElementById("colorButton");
button.addEventListener("click", () => {
  cube.setColor(getRandomColor());
});

//animation loop
const animate = () => {
  requestAnimationFrame(animate);
  controls.update(); // update mouse controls
  renderer.render(scene, camera);
};

animate();
