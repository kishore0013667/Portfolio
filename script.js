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