
console.log("JavaScript Connected");

const textArray = [
    "Mern Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer"
];

let index = 0;

function changeText(){

    document.getElementById("typing").innerText = textArray[index];

    index++;

    if(index >= textArray.length){
        index = 0;
    }
}

setInterval(changeText, 2000);

changeText();

const form = document.querySelector(".contact-form");

form.addEventListener("submit" , function(event){

    event.preventDefault();

    alert("Message Sent Successfully!");
    
});

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click",function(){

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        themeButton.innerText = "☀️";
    }
    else{
        themeButton.innerText = "🌙";
}

});

const hiddenElements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", function(){

    hiddenElements.forEach(function(element){

        const elements = elements.getBoundClientRect().top;

        const windowHeight =window.innerHeight;

        if(elementsTop < windowHeight - 100){

            element.classlist.add("show");
        }
    });
});
window.dispatchEvent(new Event("scroll"));