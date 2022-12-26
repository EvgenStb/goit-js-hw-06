const collectionValue = document.getElementsByTagName('input');
const createCollectionBtn = document.querySelector('button[data-create]')
const destroyCollectionBtn = document.querySelector('button[data-destroy]')
const collectionContainer = document.getElementById('boxes')
console.log(collectionContainer)






console.log(destroyCollectionBtn)



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
