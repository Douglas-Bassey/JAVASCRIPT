const addBtn = document.querySelector("#addItem");

const removeBtn = document.getElementById("removeItem");

const box = document.getElementById("box");

let message;

addBtn.addEventListener("click", function () {
  message = document.createElement("p");
  message.textContent = "Hello, welcome to JS Class";
  box.appendChild(message);
  message.style.color = "blue"
   message.style.fontSize = "20px";
    message.style.fontFamily = "tahoma";
});

removeBtn.addEventListener("click", () => {
  if (box.lastElementChild) {
    box.lastChild.remove();
  }
});
