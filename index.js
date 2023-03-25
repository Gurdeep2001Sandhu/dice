var randomNumber1 = Math.floor(Math.random()*6+1);
var randomDiceImage = "images/dice" + randomNumber1 + ".png";
var output1 = document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage);

var randomNumber2 = Math.floor(Math.random()*6+1);
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
var output2 = document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player1 win!";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 win!🚩";
}
else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw";
}

//reload function here

document.querySelector(".reload").addEventListener("click",function(){
    window.location.reload();
})

//footer date
const d = new Date().getFullYear();
document.getElementById("demo").innerHTML = "&#169;" + d;
