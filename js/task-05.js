const inputField = document.getElementById('name-input');
const outputName = document.getElementById('name-output')

inputField.addEventListener('input', (event) => {
    if (event.currentTarget.value !=""){
        outputName.textContent = event.currentTarget.value;
    } else {outputName.textContent = "Anonymous";}
    
});
