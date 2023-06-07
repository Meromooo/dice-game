var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg = "dice" + randomNumber1 + ".png";

var randomSourceImg = "images/" + randomDiceImg;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomSourceImg);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg2 = "dice" + randomNumber2 + ".png";

var randomSourceImg2 = "images/" + randomDiceImg2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomSourceImg2);


if (randomNumber1 > randomNumber2) {
     document.querySelector("h1").innerHTML = "Let's Goooo You Win!";
} 

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Loooooser!";
}

else {
    document.querySelector("h1").innerHTML = "It's A Draw, We need A Winner Man...";
}

