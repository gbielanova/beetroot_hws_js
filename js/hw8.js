//task1
const divEl = document.getElementById('divToEdit');
const textAreaEl = document.getElementById('textAreaToEdit');

window.addEventListener('keydown', function (event) {
    if (event.ctrlKey == true && event.code == "KeyE") {
        event.preventDefault();

        textAreaEl.classList.add("edit__block--visible");
        divEl.classList.remove("edit__block--visible");
        divEl.classList.add("edit__block--hidden");

        textAreaEl.value = divEl.innerText;
        textAreaEl.focus();
    }
});

// for text - '+' is generated by Shift + '=', so need to press Ctrl + Shift + '='
window.addEventListener('keydown', function (event) {
    if (event.ctrlKey == true && event.key == '+') {
        event.preventDefault();

        divEl.classList.add("edit__block--visible");
        textAreaEl.classList.remove("edit__block--visible");
        textAreaEl.classList.add("edit__block--hidden");

        divEl.innerText = textAreaEl.value;
    }
});