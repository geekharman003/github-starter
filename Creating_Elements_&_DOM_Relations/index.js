// Write your code below:
const h3 = document.createElement("h3");

const h3Text = document.createTextNode(
  "Buy high quality organic fruits online."
);

h3.appendChild(h3Text);
h3.style.fontStyle = "italic";

const header = document.getElementById("header");
header.appendChild(h3);

const p = document.createElement("p");

const pText = document.createTextNode("Total fruits:4");

p.appendChild(pText);
p.id = "fruits-total";

const divs = document.getElementsByTagName("div");
const ul = document.querySelector(".fruits");

divs[1].insertBefore(p, ul);
