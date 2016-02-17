var rides;

function ridesCount(){
	rides = document.getElementById("rides").value;
	total = (rides * 2.75) * 4;
	alert ("You are spending $" + total + " on the metro each month!");
		

	rightRides();
}

	function rightRides(){
		if (total > 116) {
			alert ("You are a frivolous dummy and should buy a monthly MetroCard immediately!");
		} else {
			alert("Oh, good for you, you hardly use the MTA. I hope you give your chauffeur paid vacations!")
	}

}

