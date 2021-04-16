"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  const form = document.querySelector("form");
  const inputs = form.querySelectorAll("input");

  inputs.forEach((input) => {
    input.addEventListener("input", checkInput);
  });
}

function checkInput() {
  const inputContent = this.value.length;
  const maxLength = this.getAttribute("size");

  if (inputContent == maxLength) {
    focusNextInput(this);
  }
}

function focusNextInput(element) {
  if (element.name === "cvv") {
    element.blur();
  } else {
    const nextElement = element.parentElement.nextElementSibling.querySelector("input");
    nextElement.focus();
  }
}
