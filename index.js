var randomNumber1 = Math.floor(Math.random() * 6 + 1); // 0-0.99*6+1 = 1-6
var randomNumber2 = Math.floor(Math.random() * 6 + 1);


document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png")

document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png")



// if player 1 wins
if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "No losers, try again!"
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 has won! 🚩 "
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 has won! 🚩 "
}
