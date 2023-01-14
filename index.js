
/* Detecting Button Press */

let numberOfDrumBtns = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumBtns; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

/* Detecting Keyboard Press */

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    let audio = null;
    switch (key) {
        case "w":
            audio = new Audio("sounds/crash.mp3");
            break;
        case "a":
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case "s":
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        case "d":
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case "j":
            audio = new Audio("sounds/tom-4.mp3");
            break;
        case "k":
            audio = new Audio("sounds/snare.mp3");
            break;
        case "l":
            audio = new Audio("sounds/tom-3.mp3");
            break;
        default:
            break;
    }
    audio.play();
}

function buttonAnimation(key) {
    let activeBtn = document.querySelector("." + key);
    activeBtn.classList.add("pressed");
    setTimeout(function () {
        activeBtn.classList.remove("pressed");
    }, 100);
}  
