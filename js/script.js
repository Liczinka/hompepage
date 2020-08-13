console.log("hej Bobasku! Skoro czytasz tę wiadomość, jesteś niezłym hakerem!");


let changeColorButton = document.querySelector(".changeBackground");
console.log("changeColor");
let container = document.querySelector(".container");


changeColorButton.addEventListener("click", () => {
    container.classList.toggle("yellowBackground");
})

let number1 = 25;
let number2 = 10;

if (number1 < number2) {
    console.log("number 1 jest mniejszesze");
}
else {
    console.log("number 1 nie jest mniejsze");
}

let container2 = document.querySelector(".container2");
console.log(container2);

let nav = document.querySelector(".nav");

let buttonMotyw = document.querySelector(".buttonMotyw");
buttonMotyw.addEventListener("click", () => {
    if (buttonMotyw.innerText === "Włącz ciemny motyw") {
        container.classList.toggle("darkBackground");
        nav.classList.toggle("darkBackground");
        buttonMotyw.innerText = "Włącz kolorowy motyw";
    }
    else {
        buttonMotyw.innerText = "Włącz ciemny motyw";
        container.classList.toggle("darkBackground");
        nav.classList.toggle("darkBackground");
    }

})
