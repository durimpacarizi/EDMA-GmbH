"use strict";

const navbari = document.querySelector(".navbari");

const imgg = document.createElement("img");

const linkcontainer = document.createElement("ul");
const link1 = document.createElement("li");
const a1 = document.createElement("a");
const link2 = document.createElement("li");
const a2 = document.createElement("a");
const link3 = document.createElement("li");
const a3 = document.createElement("a");
const link4 = document.createElement("li");
const a4 = document.createElement("a");

a1.textContent = "Home";
a1.href = "./index.html";
a2.textContent = "About us";
a2.href = "./aboutus.html";
a3.textContent = "Projects";
a3.href = "./projects.html";
a4.textContent = "Contact";
a4.href = "./contact.html";

link1.appendChild(a1);
link2.appendChild(a2);
link3.appendChild(a3);
link4.appendChild(a4);

linkcontainer.appendChild(link1);
linkcontainer.appendChild(link2);
linkcontainer.appendChild(link3);
linkcontainer.appendChild(link4);

imgg.src = "./images/logo.png";

navbari.appendChild(imgg);
navbari.appendChild(linkcontainer);

const currentPath = window.location.pathname;

const navLinks = document.querySelectorAll(".navbari ul li a");
let li = true;

navLinks.forEach((link) => {
  if (link.getAttribute("href") === `.${currentPath}`) {
    li = false;
    link.classList.add("active");
  }
});
if (li) {
  a1.classList.add("active");
}
