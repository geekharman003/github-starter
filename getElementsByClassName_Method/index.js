// grabbing all elements with class fruit
const fruits = document.getElementsByClassName("fruit");

// changing the background color of third element with class fruit
fruits[2].style.backgroundColor = "yellow";

// changing the font weight of all elements with class fruit
for (let i = 0; i < fruits.length; i++) {
  fruits[i].style.fontWeight = "bold";
}
