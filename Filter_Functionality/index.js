// Add input element inside form, before button, to take fruit description
const form = document.querySelector("form");
const submitBtn = document.querySelector("button[type='submit']");
const ul = document.querySelector(".fruits");

const newInput = document.createElement("input");
newInput.type = "text";
newInput.id = "description";

form.insertBefore(newInput, submitBtn);

// Show the fruit description in italics on the next line

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const fruitToAdd = document.getElementById("fruit-to-add").value;
  const description = document.getElementById("description").value;

  const newLi = document.createElement("li");
  newLi.className = "fruit";
  newLi.innerHTML = `${fruitToAdd} <p style="font-style:italic">${description}</p>
    <button class="delete-btn">x</button>`;
  ul.appendChild(newLi);
});

// Create a filter that shows only those fruits whose either name or description or both matches the entered text

const filterInput = document.getElementById("filter");

filterInput.addEventListener("keyup", function (event) {
  const fruits = document.getElementsByClassName("fruit");

  for (let i = 0; i < fruits.length; i++) {
    if (
      !fruits[i].textContent
        .toLowerCase()
        .includes(filterInput.value.toLowerCase())
    ) {
      fruits[i].style.display = "none";
    } else {
      fruits[i].style.display = "flex";
    }
  }
});
