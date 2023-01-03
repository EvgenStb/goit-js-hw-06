const collectionValue = document.querySelector('#controls input');
const createCollectionBtn = document.querySelector('button[data-create]')
const destroyCollectionBtn = document.querySelector('button[data-destroy]')
const collectionContainer = document.getElementById('boxes')
const boxQuantity = collectionValue.value;
console.log(collectionValue.value);

createCollectionBtn.addEventListener('click',handleBoxCreating)
function handleBoxCreating (boxQuantity){
  const boxCollection = [];
  const width = 20;
  const hight = 20;
  for (let i=1; i <= boxQuantity; i +=1){
    const box = document.createElement('div');
    console.log (box);
    box.width = `${width+10}px`
    box.hight = `${hight+10}px`
    box.backgroundColor = getRandomHexColor();
    console.log(box);
    // collectionContainer.append(...box);
}}
console.log(handleBoxCreating());
console.log(boxCollection);
console.log(collectionValue.currentTarget.value)
// function createBoxes(amount) {
//   for (let i = 1; )
// }


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
