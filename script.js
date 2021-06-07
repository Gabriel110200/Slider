let buttons = document.querySelectorAll(".buttonIcon img");
let content = document.querySelector(".content");
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
    p.classList.remove("animation");
    p.remove();

    if (count % 2 == 0) {
        content.prepend(p);

        console.log(p.classList);
        johnPicture.style.display = "block";
        johnPicture.style.animation = "fadeIn 1s"
        tanyaPicture.style.display = "none";


        p.innerText = johnText;
        p.classList.toggle("animation");


        name.innerText = " John Tarkpor";
        occupation.innerText = "Front end Developer";




    }
    else {
        content.prepend(p);



        johnPicture.style.display = "none";
        tanyaPicture.style.display = "block";
        tanyaPicture.style.animation = "fadeIn 1s";
        p.innerText = tanyaText;
        p.classList.toggle("animation");



        name.innerText = "Tanya Sinclair";
        occupation.innerText = "UX Engineer";

    }

    count++;



}


