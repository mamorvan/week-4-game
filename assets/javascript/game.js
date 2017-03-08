var goalScore = 0;
var currentScore = 0;
var winsCounter = 0;
var lossesCounter = 0;

$("#message").on("click", function() {

	//generate random goal from 19-120 and write to goal h2
	goalScore = Math.floor(Math.random() * 100) + 19;
console.log("goalScore:" + goalScore);
	$("#goal").text(goalScore);
	currentScore = 0;
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

	

		$("button").on("click", function() {
			if (currentScore < goalScore) {
				var crystalValue = $(this).attr("value");
				currentScore += parseInt(crystalValue);
				$("#current").text(currentScore);
			} //end of if current score less than goal - keep playing

			else if (currentScore === goalScore) {
				$("#message").text("You won! Click here to start new game");		
				winsCounter += 1;
				$("#wins").text(winsCounter);
			} // end of if current equal to goal - add to wins

			else if (currentScore > goalScore) {
				$("#message").text("You lost. Click here to start new game");
				lossesCounter += 1;
				$("#losses").text(lossesCounter);
			} // end of if current more than goal - add to losses


			}) // end of button click

	

	





}) // end of new game on click
