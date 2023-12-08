"use strict";

const userName = document.getElementById("userid");
const passWord = document.getElementById("pass");
const fullName = document.getElementById("emri");
const email = document.getElementById("adresaEmailit");
const submitBtn = document.getElementById("submitBtn");

let ni = false;
let dy = false;
let tre = false;
let kat = false;

function homePage() {
  if (ni && dy && tre && kat) window.location.href = "/index.html";
}

document.addEventListener("DOMContentLoaded", function (event) {
  const validate = (event) => {
    event.preventDefault();

    if (userName.value === "") {
      document.getElementById("h1").classList.remove("hide");
      userName.focus();
      submitBtn.disabled = true;
      submitBtn.classList.add("nope");
      ni = false;
      userName.classList.add("red");
      return false;
    } else {
      submitBtn.classList.remove("nope");
      document.getElementById("h1").classList.add("hide");
    }
    if (
      passWord.value.length < 8 &&
      !(passWord.value.charAt(0) >= "A" && passWord.value.charAt(0) <= "Z") &&
      !endsWithSpecialCharacter(passWord.value)
    ) {
      document.getElementById("h2").classList.remove("hide");
      passWord.focus();
      submitBtn.disabled = true;
      dy = false;
      passWord.classList.add("red");
      submitBtn.classList.add("nope");
      return false;
    } else {
      submitBtn.classList.remove("nope");
      document.getElementById("h2").classList.add("hide");
    }

    if (!(fullName.value.length > 3 && fullName.value.includes(" "))) {
      document.getElementById("h3").classList.remove("hide");
      fullName.focus();
      submitBtn.disabled = true;
      fullName.classList.add("red");
      tre = false;
      submitBtn.classList.add("nope");
      return false;
    } else {
      submitBtn.classList.remove("nope");
      document.getElementById("h3").classList.add("hide");
    }

    if (
      !(email.value.includes("@") && email.value.includes(".")) &&
      !(
        email.value.toLowerCase().charAt(0) >= "a" &&
        email.value.toLowerCase().charAt(0) <= "z"
      )
    ) {
      document.getElementById("h4").classList.remove("hide");
      email.focus();
      submitBtn.disabled = true;
      email.classList.add("red");
      kat = false;
      submitBtn.classList.add("nope");
      return false;
    } else {
      submitBtn.classList.remove("nope");
      document.getElementById("h5").classList.add("hide");
    }
  };
  submitBtn.addEventListener("click", validate);
  submitBtn.addEventListener("click", homePage);
});

userName.addEventListener("input", function () {
  if (userName.value !== "") {
    document.getElementById("h1").classList.add("hide");
    userName.classList.remove("red");
    submitBtn.classList.remove("nope");
    ni = true;
    submitBtn.disabled = false;
  }
});
passWord.addEventListener("input", function () {
  if (
    passWord.value.length >= 8 &&
    passWord.value.charAt(0) >= "A" &&
    passWord.value.charAt(0) <= "Z" &&
    endsWithSpecialCharacter(passWord.value)
  ) {
    document.getElementById("h2").classList.add("hide");
    passWord.classList.remove("red");
    submitBtn.classList.remove("nope");
    dy = true;
    submitBtn.disabled = false;
  } else {
    document.getElementById("h2").classList.remove("hide");
    passWord.classList.add("red");
    submitBtn.classList.add("nope");
    dy = false;
    submitBtn.disabled = true;
  }
});

fullName.addEventListener("input", function () {
  if (fullName.value.length > 3 && fullName.value.includes(" ")) {
    document.getElementById("h3").classList.add("hide");
    fullName.classList.remove("red");
    submitBtn.classList.remove("nope");
    tre = true;
    submitBtn.disabled = false;
  }
});

email.addEventListener("input", function () {
  if (
    email.value.includes("@") &&
    email.value.includes(".") &&
    email.value.toLowerCase().charAt(0) >= "a" &&
    email.value.toLowerCase().charAt(0) <= "z"
  ) {
    document.getElementById("h4").classList.add("hide");
    email.classList.remove("red");
    submitBtn.classList.remove("nope");
    kat = true;
    submitBtn.disabled = false;
  }
});

function endsWithSpecialCharacter(str) {
  const specialChars = /[0123456789!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  return specialChars.test(str.charAt(str.length - 1));
}
