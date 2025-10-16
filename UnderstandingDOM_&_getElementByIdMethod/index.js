const mainHeading = document.getElementById("main-heading");
mainHeading.textContent = "Fruit World";
mainHeading.style.color = "orange";

const header = document.getElementById("header");
header.style.backgroundColor = "green";
header.style.borderBottom = "3px solid orange";

const basketHeading = document.getElementById("basket-heading");
basketHeading.style.color = "green";

const thanks = document.getElementById("thanks");

const p = document.createElement("p");
p.textContent = "Please visit us again";

thanks.appendChild(p);
