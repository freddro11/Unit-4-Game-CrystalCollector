$(document).ready(function(){

// Selects a random number to be shown at the start of the game
// Number should be should be between 19 - 120

var Random = Math.floor(Math.random()*101+19)

// Appending random number to the randomNumber id in the html doc

$('#randomNumber').text(Random);

// Setting random numbers for each crystal, random number should be between 1-12

var num1= Math.floor(Math.random()*11+1)
var num2= Math.floor(Math.random()*11+1)
var num3= Math.floor(Math.random()*11+1)
var num4= Math.floor(Math.random()*11+1)

// Variables for tallies

var finalScore= 0;
var wins= 0;
var losses =0;

// Used to append to users loss or win total

$('#wins').text(wins);
$('#losses').text(losses);

// Game reset 

function reset(){
    Random=Math.floor(Math.random()*101+19);
    console.log(Random)
    $('#randomNumber').text(Random);
    num1= Math.floor(Math.random()*11+1);
    num2= Math.floor(Math.random()*11+1);
    num3= Math.floor(Math.random()*11+1);
    num4= Math.floor(Math.random()*11+1);
    finalScore=0;
    $('#finalScore').text(finalScore)
}

// Adds to wins total

function winner() {
    alert("You Win!");
    wins++;
    $('#wins').text(wins);
    reset();
}

// Adds to losses total

function loser() {
    alert ("You Lose!");
    losses++;
    $('#losses').text(losses);
    reset();
}

// Setting up click event for crystals

$('#one').on ('click', function(){
    finalScore = finalScore + num1;
    console.log("new finalScore=" + finalScore);
    $('#finalScore').text(finalScore);
    if (finalScore == Random) {
        winner();
    }
    else if (finalScore > Random){
      loser();
    }
})

$('#two').on ('click', function(){
    finalScore = finalScore + num2;
    console.log("new finalScore=" + finalScore);
    $('#finalScore').text(finalScore);
    if (finalScore == Random) {
        winner();
    }
    else if (finalScore > Random){
      loser();
    }
})

$('#three').on ('click', function(){
    finalScore = finalScore + num3;
    console.log("new finalScore=" + finalScore);
    $('#finalScore').text(finalScore);
    if (finalScore == Random) {
        winner();
    }
    else if (finalScore > Random){
      loser();
    }
})

$('#four').on ('click', function(){
    finalScore = finalScore + num4;
    console.log("new finalScore=" + finalScore);
    $('#finalScore').text(finalScore);

    if (finalScore == Random) {
        winner();
    }
    else if (finalScore > Random){
      loser();
    }

  });
  
});