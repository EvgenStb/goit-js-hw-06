const text = document.querySelector("span#text")
const fontSizeController = document.getElementById('font-size-control');
fontSizeController.addEventListener('input', function() {
    text.style.fontSize = this.value + "px";
})
