let i = 0;
let txt = "Welcome to my portfolio website!"; 
let speed = 50; 

typeWriter();

//change colour of heading line by line instead
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("sentence").innerText += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}