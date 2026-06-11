// const addBtn = document.querySelector("#addItem");

// const removeBtn = document.getElementById("removeItem");

// const box = document.getElementById("box");

// let message;

// addBtn.addEventListener("click", function () {
//   message = document.createElement("p");
//   message.textContent = "Hello, welcome to JS Class";
//   box.appendChild(message);
//   message.style.color = "blue"
//    message.style.fontSize = "20px";
//     message.style.fontFamily = "tahoma";
// });

// removeBtn.addEventListener("click", () => {
//   if (box.lastElementChild) {
//     box.lastChild.remove();
//   }
// });

/*

Manipulating HTML & CSS WITH JAVASCRIPT



*/

const loadBtn = document.getElementById("loadBtn");
const themeBtn = document.getElementById("themeBtn");
const loader = document.getElementById("loader");
const card = document.getElementById("card");
const textName = document.getElementById("name");
const roleText = document.getElementById("role");
const title = document.getElementById("title");
const profileImg = document.getElementById("profileImg");

let darkMode = false;

loadBtn.addEventListener("click", function () {
  title.textContent = "Loading Profile...";
  title.style.color = "orange";

  loader.classList.remove("hidden");
  card.classList.add("hidden");

  setTimeout(function () {
    loader.classList.add("hidden");

    textName.textContent = "James";
    roleText.textContent = "web developer"

    profileImg.src = "https://i.pravatar.cc/100"
    profileImg.alt = "Mr. James"

    card.style.backgroundColor = "#d1ffe3"
    card.style.border = "2px solid green"

    card.classList.remove("hidden")

    title.textContent = "profile loaded successfully!"
    title.style.color = "green"
  }, 2000);
});


// theme toggle
themeBtn.addEventListener("click", function() {
    if (darkMode === false){
        document.body.classList.add("dark")
        document.textContent = "switch to Light Mode"
        darkMode = true
    }
    else {
        document.body.classList.remove("dark")
        themeBtn.textContent = "Toggle Dark  mode"
        darkMode = false
    }
})