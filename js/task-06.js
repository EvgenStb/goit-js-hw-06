const inputField = document.querySelector("input");
inputField.addEventListener('blur',onImputBlur)

function onImputBlur () {
    if (inputField.value.length >= inputField.dataset.length){
        inputField.classList.remove("invalid");
        inputField.classList.add("valid")
    } else 
        {inputField.classList.add ("invalid"); 
    inputField.classList.remove("valid")
}
    
}



