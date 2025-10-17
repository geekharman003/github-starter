// Add the Edit Button:

// Implement the code as in video but with one extra 'Edit' button in 'li'
const ul = document.querySelector(".fruits");
const fruitToAdd = document.getElementById("fruit-to-add");
const form = document.getElementById("add-fruits-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  li.className = "fruit";
  li.textContent = fruitToAdd.value;
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "x";
  editBtn.textContent = "Edit";
  editBtn.className = "edit-btn";
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
  ul.appendChild(li);
});

const deleteBtns = document.getElementsByClassName("delete-btn");

for (let i = 0; i < deleteBtns.length; i++) {
  deleteBtns[i].addEventListener("click", function (event) {
    deleteBtns[i].parentElement.remove();
  });
}
