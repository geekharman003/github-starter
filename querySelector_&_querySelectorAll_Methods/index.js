// Write the code as shown in the video below:

// Write answer to the questions asked below:
const basketHeading = document.querySelector("#basket-heading");

basketHeading.style.color = "brown";

const ul = document.querySelector(".fruits");
ul.style.backgroundColor = "#7e7e7e";
ul.style.padding = "10px";

const fruits = document.querySelectorAll(".fruit");
fruits.forEach(function (fruit) {
  fruit.style.padding = "10px";
  fruit.style.borderRadius = "10px";
  fruit.style.listStyleType = "none";
  fruit.style.backgroundColor = "#d1d1d1";
  fruit.style.marginBottom = "2px";
});

const evenFruits = document.querySelectorAll(".fruit:nth-child(even)");

evenFruits.forEach(function (fruit) {
  fruit.style.backgroundColor = "brown";
  fruit.style.color = "white";
});
