/* QuestForm JavaScript file 
For use with QuestForm.html

Created by James Kevin D Aleman
Last updated 4/29/18

Contents: Form Validation */

function validateTitle () {
	var title = document.forms["questform"]["title"].value;
	if (title == "") {
		alert("Quest must be given a title");
		return false;
	}
}
function validateDifficulty () {
	var difficulty = document.getElementById("difficulty").value;
	//alert( "value is " + difficulty); //test to determine output
	if (difficulty == 0) {
		alert("Quest must be given a difficulty");
		document.getElementById("difficulty").blur();
		return false;
	}
}
function validateGame () {
	var gameName = document.forms["questform"]["gameName"].value;
	if (gameName == "") {
		alert("Game must be chosen for quest");
		return false;
	}
}
function validateWinConditions () {
	var win = document.forms["questform"]["winConditions"].value;
	if (win == "") {
		alert("Quest must be given victory conditions");
		return false;
	}
}
function validateReward () {
	var reward = document.forms["questform"]["reward"].value;
	if (reward == "" || reward == "$") {
		alert("Quest must be given a reward amount");
		document.forms["questform"]["reward"].blur; //blur to unfocus input box
		return false;
	}
}
function validateCharity () {
	
	var charity = document.getElementById("charity").value;
	var otherCharity = document.getElementById("otherCharity").value;
	//alert("value is " + charity + " value is " + otherCharity ); //Test of outputs for charity validation function
	if (charity == "Other") {
		if (otherCharity == "") {
			alert("Charity must be manually entered");
		}
		else{
		}
	}
	else if (charity == "blank"){
		alert("Charity must be picked from list or manually entered");
		return false;
	}
	else {
	}
}
function validateUsername () {
	var username = document.forms["questform"]["username"].value;
	if (username = "") {
	username = "anonymous"
	}
}
function validateEmail () {
	var email = document.forms["questform"]["email"].value;
	if (email == "") {
	alert("Email must be entered");
	}
}
function validateConfirmation () {
	var confirmation = document.forms["questform"]["confirmation"].value;
	if (confirmation == "") {
	alert("Donation Confirmation number must be entered");
	}
}

	