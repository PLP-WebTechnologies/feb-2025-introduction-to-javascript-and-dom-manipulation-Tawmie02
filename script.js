function changeText() {
  document.getElementById("message").textContent = "Text has been changed!";
}

function changeColor() {
  document.getElementById("main-title").style.color = "blue";
}

function addElement() {
  let newPara = document.createElement("p");
  newPara.id = "new-paragraph";
  newPara.textContent = "A new paragraph was added!";
  document.getElementById("container").appendChild(newPara);
}

function removeElement() {
  let para = document.getElementById("new-paragraph");
  if (para) {
    para.remove();
  }
}
