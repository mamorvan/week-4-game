$(document).ready(function() {

var goalScore;
var currentScore;
var winsCounter = 0;
var lossesCounter = 0;
var wonOrLost;

function initializeVariables() {
	goalScore = 0;
	currentScore = 0;
	wonOrLost = false;
}

$("#startGame").on("click", function() {

	initializeVariables();

	//generate random goal from 19-120 and write to goal h2
	goalScore = Math.floor(Math.random() * 100) + 19;
console.log("goalScore:" + goalScore);
	$("#goal").text(goalScore);
	$("#current").text(currentScore);

	//assign a random value 1-12 to each crystal
	var random1 = Math.floor(Math.random() * 12) + 1;
	var random2 = Math.floor(Math.random() * 12) + 1;
	var random3 = Math.floor(Math.random() * 12) + 1;
	var random4 = Math.floor(Math.random() * 12) + 1;

console.log("randoms:" + random1 + " " + random2 + " " + random3 + " " + random4);
	
	$("#blueCrystal").attr("value",random1);
	$("#greenCrystal").attr("value",random2);
	$("#purpleCrystal").attr("value",random3);
	$("#yellowCrystal").attr("value",random4);

}) // end of new game on click

	$("button").on("click", function() {

		if (wonOrLost) return;

		//add sound when crystal is clicked
		var crystalSound = document.createElement("audio");
		crystalSound.setAttribute("src", "assets/sounds/crystal.mp3");
		
		crystalSound.play();

		// get value of crystal clicked, add value to currentScore and display currentScore to page
		var crystalValue = $(this).attr("value");
console.log("crystalValue" + crystalValue);
		currentScore += parseInt(crystalValue);
		$("#current").text(currentScore);

		// WIN

		if (currentScore === goalScore) {
			//change style and add text on start game box
			$("#startGame").attr("id", "wonMessage");	
			$("#message").text("You won! Click here to start new game");
			
			winsCounter += 1;
			$("#wins").text(winsCounter);
			wonOrLost = true;
		} // end of if current equal to goal - add to wins

		// LOSE

		else if (currentScore > goalScore) {
			//change style and add text to start game box
			$("#startGame").attr("id", "loseMessage");
			$("#message").text("You lost. Click here to start new game");
			
			lossesCounter += 1;
			$("#losses").text(lossesCounter);
			wonOrLost = true;
		} // end of if current more than goal - add to losses	

	}) // end of button click



}) // end of document ready
