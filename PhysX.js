// PhysX startup sequence
console.log('PhysX has successfully launched the application.');
console.log('PhysX has successfully loaded the 3D props and assets for the game.');
console.log('PhysX has successfully loaded the textures for the game.');
console.log('PhysX has successfully loaded UI elements for the game.');

let PXloaded = false;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function loadPhysX() {
  if (PXloaded) return;
  PXloaded = true;
  console.log('PhysX has successfully loaded the physics engine for the game.');
  console.log('PhysX has successfully loaded the collision detection system for the game.');
  console.log('PhysX has successfully loaded the physics simulation system for the game.');
  console.log('PhysX has successfully loaded the physics rendering system for the game.');
  console.log('PhysX has successfully loaded the physics debugging system for the game.');
}

async function bootPhysX() {
  loadPhysX();
  await delay(5000);
  console.log('Welcome to PhysX, our new web based game engine built for both 2D and 3D games. This engine is designed to be easy to use and understand, while also being powerful enough to create complex games. We hope you enjoy using PhysX and we look forward to seeing what you create with it!');

  if (typeof window !== 'undefined' && window.dispatchEvent) {
    window.dispatchEvent(new CustomEvent('physx-ready'));
  }
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootPhysX, { once: true });
  } else {
    bootPhysX();
  }
} else {
  bootPhysX();
}