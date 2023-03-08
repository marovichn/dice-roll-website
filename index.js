function imageSelector() {
    var rand1 = Math.floor(Math.random() * 6) + 1;
    var rand2 = Math.floor(Math.random() * 6) + 1;

    var imgPick1 = "/images/dice" + rand1 + ".png";
    var imgPick2 = "/images/dice" + rand2 + ".png";

    document.querySelector("img.img1").setAttribute("src", imgPick1);
    document.querySelector("img.img2").setAttribute("src", imgPick2);

    if (rand1 > rand2) {
        document.querySelector("h1.heading").innerHTML = "Player 1 WINS!!! &#128681"
    } else if (rand1 === rand2) {
        document.querySelector("h1.heading").innerHTML = "DRAW!"
    } else {
        document.querySelector("h1.heading").innerHTML = "Player 2 WINS!!! &#128681"
    }
}

imageSelector();