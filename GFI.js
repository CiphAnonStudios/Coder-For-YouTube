(() => {
  const size =40;
  const speed = 5;

//background

  const bgBlock =
    document.createElement('div');

  object.assign(bgBlock.style, {
    position:'fixed',
    left:'0px',
    top:'0px',
    width:'100%',
    height:'100%',
    background:'green',
    zIndex:'1',
    PointerEvents:'none'
  });

document.body.appendChild(bgBlock);
  
//player
 const block =
   document.createElement('div');

 Object.assign(block.style, {
   position:'fixed',
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

  const keys = new Set();

  window.addEventListener('keydown', (e) =>
    {
     keys.add(e.key.toLowerCase());
    });

  window.addEventListener('keyup', (e) =>
   {
    keys.delete(e.key.toLowerCase());
});

function update() {
  if (keys.has('w')) y -= speed;
  if (keys.has('s')) y += speed;
  if (keys.has('a')) x -= speed;
  if (keys.has('d')) x += speed;

  block.style.left = x + 'px';
  block.style.top = y + 'px';

  requestAnimationFrame(update);
}

update();
})();













































