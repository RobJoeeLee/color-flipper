document.addEventListener("DOMContentLoaded" , () => {
    greenButton = document.querySelector(".green-button");
    redButton = document.querySelector(".red-button");
    blueButton = document.querySelector(".blue-button");
    randomButton = document.querySelector(".random-button");

    greenButton.addEventListener("click" , () =>{
        document.body.style.backgroundColor = "green";
    })
    redButton.addEventListener("click" , () =>{
        document.body.style.backgroundColor = "red";
    })
    blueButton.addEventListener("click" , () =>{
        document.body.style.backgroundColor = "blue";
    })
    randomButton.addEventListener("click", () => {
        document.body.style.backgroundColor = randomColor();
    })

    function randomColor(){
        let choices = ["green", "red", "blue"];
        let randomColorChoice = Math.floor(Math.random() * choices.length);
        return choices[randomColorChoice];
    }
})