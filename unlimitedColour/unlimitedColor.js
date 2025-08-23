const randomColour = function () {
  const letters = '0123456789ABCDEF';
  let colour = '#';
  for (let i = 0; i < 6; i++) {
    colour += letters[Math.floor(Math.random() * 16)];
  }
  return colour;
}
let intervalId;
document.querySelector('#start').addEventListener('click', function () {
   if (!intervalId) {
     intervalId = setInterval(function() {
       document.body.style.backgroundColor = randomColour();
    } , 1000)
   }
})

document.querySelector('#stop').addEventListener('click', function () {
    clearInterval(intervalId);
    intervalId = null;
    
})
