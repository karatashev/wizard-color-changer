document.getElementById('green').onclick = changeToGreen;
document.getElementById('yellow').onclick = changeToYellow;
document.getElementById('blue').onclick = changeToBlue;
const title = document.getElementById('title');

let green = document.getElementById('green');
let yeloow = document.getElementById('yellow');
let blue = document.getElementById('blue');

function changeToGreen() {
  document.querySelector('body').style.backgroundColor = '#509724';
  title.innerHTML = '<h1>The background is GREEN</h1>';
}

function changeToYellow() {
  document.querySelector('body').style.backgroundColor = '#fbe300';
  title.innerHTML = '<h1>The background is YELLOW</h1>';
}

function changeToBlue() {
  document.querySelector('body').style.backgroundColor = '#00b8ff';
  title.innerHTML = '<h1>The background is BLUE</h1>';
}


function removeOthers() {
  if (isActive === true) {
    green.style.display = 'none';
    blue.style.display = 'none';
  }
}
  
