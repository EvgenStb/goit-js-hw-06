let counterValue = 0;
const counterText = document.getElementById("value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const handleClickDecrementBtn = () => {
    counterValue -=1;
    counterText.textContent = counterValue;
}
const handleClickIncrementBtn = () => {
    counterValue +=1;
    counterText.textContent = counterValue;
}
decrementBtn.addEventListener('click', handleClickDecrementBtn);
incrementBtn.addEventListener('click', handleClickIncrementBtn);