function changeColor() {
  let colorA = Math.floor(Math.random() * 255)
  let colorB = Math.floor(Math.random() * 255)
  let colorC = Math.floor(Math.random() * 255)
  document.querySelector("#box").style.backgroundColor='rgb(' + colorA + ',' + colorB + ',' + colorC + ')';
  document.querySelector("p").innerHTML= colorA + ',' + colorB + ',' + colorC
}

