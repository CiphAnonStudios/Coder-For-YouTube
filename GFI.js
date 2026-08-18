(() => {
  const size =40;

 const block =
   document.createElement('div');

 Object.assign(block.style, {
   postion:'fixed',
   left:'50%',
   top:'50%',
   width: size +'px',
   height: size +'px',
   background:'tan',
   border:'2px solid black',
   borderRadius:'6px',
   transform:'translate(-50%, -50%)',
   zIndex: 2147483647
   });

document.body.appendChild(block);

  //Player position
  let x =window.innerWidth / 2 - size / 2;
  let y =window.innerHeight / 2 - size / 2;

  const key = new Set();

  window.addEventListener('keydown', (e) =>
    {
      keys.add(e.key.toLowerCase());
    });

  window.addEventListener('keyup', (e) =>
    keys.delete(e.key.toLowerCase());
});

function update() {
  if (key.has('w')) y -= speed;
  if (key.has('s')) y += speed;
  if (key.has('a')) x -= speed;
  if (key.has('d')) x += speed;

  block.style.left = x + 'px';
  block.style.top = y + 'px';

  requestAnimationFrame(update);
}

update();
})();













































