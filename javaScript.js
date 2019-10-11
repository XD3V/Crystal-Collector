// Global variables
var v = 1;
var w = 12;
var x = 19;
var y = 120;
var wins = 0;
var losses = 0;
var latteValue = [];
var targetNumber = [];
var counter = [];

var startGame = function(event) {


 counter = 0;
 targetNumber = Math.floor(Math.random() * ((y - x) + 1) + x);

latteValue = [Math.floor(Math.random() * ((w - v) + 1) + v), Math.floor(Math.random() * ((w - v) + 1) + v), Math.floor(Math.random() * ((w - v) + 1) + v), Math.floor(Math.random() * ((w - v) + 1) + v)];
console.log("Latte values are " + latteValue);


$("#number-to-guess").text(targetNumber);

$("#scores-text").text(counter);


}

startGame();

for (var i = 0; i < latteValue.length; i++) {

    var imagelatte = $("<img>");

    imagelatte.addClass("coffeepic1");

    imagelatte.attr("src", "https://images.unsplash.com/photo-1475241404975-c3ae90fdd9e6?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&dl=brigitte-tohm-BnrKDRn5sjg-unsplash.jpg,");

    imagelatte.attr("data-lattevalue", latteValue[i]);

    $("#coffeepic").append(imagelatte);
}

$(".coffeepic1").on("click", function () {
    var latteValue = ($(this).attr("data-lattevalue"));
    latteValue = parseInt(latteValue);
    counter += latteValue;
    
    $("#count-tracker-div").text(counter);

    if (counter === targetNumber) {
        alert("You win!");
        wins++;
        $("#win-tracker-div").text(wins);
        startGame();
    }

    else if (counter >= targetNumber) {
        alert("You lose!!");
        losses++;
        $("#loss-tracker-div").text(losses);
        startGame();
    }

});