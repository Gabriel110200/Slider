let buttons = document.querySelectorAll(".buttonIcon img");
let p = document.querySelector("p");
console.log(buttons);

let tanyaPicture = document.querySelector("#tanya");
let johnPicture = document.querySelector("#John");
let tanyaText = "“I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ” ";
let johnText = "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”";


console.log(tanyaPicture);

let name = document.querySelector("#name");
let occupation = document.querySelector("#occupation");


let count = 0;


buttons[0].addEventListener("click", () => {

    changeVisibility();

})

buttons[1].addEventListener("click", () => {

    changeVisibility();

})



function changeVisibility() {
    if (count % 2 == 0) {
        johnPicture.style.display = "block";
        tanyaPicture.style.display = "none";
        p.innerText = johnText;
        name.innerText = " John Tarkpor";
        occupation.innerText = "Front end Developer";
    }
    else {
        johnPicture.style.display = "none";
        tanyaPicture.style.display = "block";
        p.innerText = tanyaText;
        name.innerText = "Tanya Sinclair";
        occupation.innerText = "UX Engineer";

    }

    count++;

}