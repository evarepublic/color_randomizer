'use strict';

const background = document.querySelector("body"),
  title = document.getElementById("color"),
  changeBtn = document.getElementById("change");

const generateRGBValue = function () {
  return Math.floor(Math.random() * 256).toString(16);
};

const generateColorCode = function () {
  const red = generateRGBValue(),
    green = generateRGBValue(),
    blue = generateRGBValue();
  return "#" + red + green + blue;
};

const paintPage = function () {
  const color = generateColorCode();
  background.style.background = color;
  changeBtn.style.color = color;
  title.textContent = color;
};

paintPage();

changeBtn.addEventListener("click", paintPage);
