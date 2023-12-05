"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
  const submitBtn = document.getElementById("submit-btn");

  const validate = (event) => {
    event.preventDefault();
    const userName = document.getElementById("userid");
    const passWord = document.getElementById("pass");
    const fullName = document.getElementById("emri");
    const email = document.getElementById("adresaEmailit");

    if (userName.value === "") {
      document.getElementById("h1").classList.remove("hide");
      userName.focus();
      submitBtn.classList.add("nope");
      return false;
    }
    submitBtn.classList.remove("nope");
    document.getElementById("h1").classList.add("hide");

    if (passWord.value === "") {
      document.getElementById("h2").classList.remove("hide");
      passWord.focus();
      submitBtn.classList.add("nope");
      return false;
    }
    submitBtn.classList.remove("nope");
    document.getElementById("h2").classList.add("hide");

    if (fullName.value === "") {
      document.getElementById("h3").classList.remove("hide");
      fullName.focus();
      submitBtn.classList.add("nope");
      return false;
    }
    submitBtn.classList.remove("nope");
    document.getElementById("h3").classList.add("hide");

    if (email.value === "") {
      document.getElementById("h4").classList.remove("hide");
      email.focus();
      submitBtn.classList.add("nope");
      return false;
    }
    submitBtn.classList.remove("nope");
    document.getElementById("h4").classList.add("hide");
    if (!(email.value.includes("@") && email.value.includes("."))) {
      document.getElementById("h5").classList.remove("hide");
      email.focus();
      submitBtn.classList.add("nope");
      return false;
    }
    submitBtn.classList.remove("nope");
    document.getElementById("h5").classList.add("hide");
  };
  submitBtn.addEventListener("click", validate);
});
