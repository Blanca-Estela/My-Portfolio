let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 80,
});
 
typewriter
  .pauseFor(2600)
  .typeString('Desarrolladora front-end en proceso')
  .pauseFor(400)
  .deleteChars(50)
  .start();