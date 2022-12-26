const changeColorBtn = document.querySelector('.change-color');
const bodyColor = document.querySelector('body')
const backgroundColor = document.querySelector('.color')


changeColorBtn.addEventListener('click',onBodyChangeColor)

function onBodyChangeColor (event) {
  bodyColor.style.backgroundColor = getRandomHexColor();
  backgroundColor.textContent = bodyColor.style.backgroundColor

}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
