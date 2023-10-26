// Cache the DOM elements
const $btnShootElement = document.querySelector('.btnShoot');
const $txtAmmoElement = document.querySelector('.txtAmmo');
const $btnReloadElement = document.querySelector('.btnReload');
console.log($btnShootElement, $txtAmmoElement, $btnReloadElement);

// Variables
let ammo = 6;

// Default Ammo
$txtAmmoElement.innerHTML = `Ammo: ${ammo}`;

// Register Event Listeners
$btnShootElement.addEventListener('click', (ev) => {
  let txtAmmo = ``;
  if (ammo - 1 > 0) {
    ammo--;
    txtAmmo = `Ammo: ${ammo}`;
  } else {
    txtAmmo = `No Ammo`;
  }
  $txtAmmoElement.innerHTML = txtAmmo;
});

$btnReloadElement.addEventListener('click', (ev) => {
  ammo += 6;
  $txtAmmoElement.innerHTML = `Ammo: ${ammo}`;
});

document.body.addEventListener('mousemove', (ev) => {
  // document.body.style.transform = `skewX(${ev.clientX}deg)`;
});

document.body.addEventListener('keypress', (ev) => {
  const x = Math.random() * document.body.clientWidth;
  const y = Math.random() * document.body.clientHeight;
  const fSize = 1 + Math.random() * 100;
  const rColor = Math.round(Math.random() * 365);

  const $elem = document.createElement('div');
  $elem.classList.add('key');
  $elem.innerText = ev.key;
  $elem.style.left = `${x}px`;
  $elem.style.top = `${y}px`;
  $elem.style.fontSize = `${fSize}rem`;
  $elem.style.color = `hsl(${rColor}, 50%, 50%)`;
  document.body.appendChild($elem);
});