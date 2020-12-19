const btn = document.getElementById("btn");
const box = document.getElementById("box");

function onClick(){
  box.classList.toggle("box_hidden");
}

btn.addEventListener("click", onClick);
