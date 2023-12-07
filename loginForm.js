"use strict";

const userName = document.getElementById("userid");
const passWord = document.getElementById("pass");
const fullName = document.getElementById("emri");
const email = document.getElementById("adresaEmailit");
const submitBtn = document.getElementById("submit-btn");

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
      submitBtn.disabled = true;
      submitBtn.classList.add("nope");
      userName.classList.add("red");
      userName.focus();
      return false;
    }

    if (
      passWord.value.length < 8 &&
      !(passWord.value.charAt(0) >= "A" && passWord.value.charAt(0) <= "Z") &&
      !endsWithSpecialCharacter(passWord.value)
    ) {
      document.getElementById("h2").classList.remove("hide");
      passWord.focus();
      submitBtn.disabled = true;
      passWord.classList.add("red");
      submitBtn.classList.add("nope");
      return false;
    }

    submitBtn.classList.remove("nope");
    document.getElementById("h2").classList.add("hide");

    if (!(fullName.value.length > 3 && fullName.value.includes(" "))) {
      document.getElementById("h3").classList.remove("hide");
      fullName.focus();
      submitBtn.disabled = true;
      fullName.classList.add("red");
      submitBtn.classList.add("nope");
      return false;
    }
    submitBtn.classList.remove("nope");
    document.getElementById("h3").classList.add("hide");

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
      submitBtn.classList.add("nope");
      return false;
    }
    submitBtn.classList.remove("nope");
    document.getElementById("h5").classList.add("hide");
  };
  submitBtn.addEventListener("click", validate);
  submitBtn.addEventListener("click", homePage);
});

userName.addEventListener("input", function () {
  if (userName.value !== "") {
    document.getElementById("h1").classList.add("hide");
    submitBtn.disabled = false;
    userName.classList.remove("red");
    submitBtn.classList.remove("nope");
    ni = true;
  }
});
passWord.addEventListener("input", function () {
  if (
    passWord.value.length > 8 &&
    passWord.value.charAt(0) >= "A" &&
    passWord.value.charAt(0) <= "Z" &&
    endsWithSpecialCharacter(passWord.value)
  ) {
    document.getElementById("h2").classList.add("hide");
    submitBtn.disabled = false;
    passWord.classList.remove("red");
    submitBtn.classList.remove("nope");
    dy = true;
  }
});

fullName.addEventListener("input", function () {
  if (fullName.value.length > 3 && fullName.value.includes(" ")) {
    document.getElementById("h3").classList.add("hide");
    submitBtn.disabled = false;
    fullName.classList.remove("red");
    submitBtn.classList.remove("nope");
    tre = true;
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
    submitBtn.disabled = false;
    email.classList.remove("red");
    submitBtn.classList.remove("nope");
    kat = true;
  }
});

function endsWithSpecialCharacter(str) {
  const specialChars = /[0123456789!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  return specialChars.test(str.charAt(str.length - 1));
}
