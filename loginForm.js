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
      alert("Ju lutem shtoni perdoruesin!");
      userName.focus();
      return false;
    }
    if (passWord.value === "") {
      alert("Ju lutem shtoni passwordin!");
      passWord.focus();
      return false;
    }
    if (fullName.value === "") {
      alert("Ju lutem shtoni emrin tuaj te plote!");
      fullName.focus();
      return false;
    }
    if (email.value === "") {
      alert("Ju lutem shtoni emailin!");
      email.focus();
      return false;
    }
  };
  submitBtn.addEventListener("click", validate);
});
