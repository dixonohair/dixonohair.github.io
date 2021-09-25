	var name = prompt("Hello! What is your name?");
	var mood = prompt("How are you today?");
	var time = new Date();
	document.write("Today is " + time.toDateString() + ". The Time is " + time.getHours() +
		 ":" + time.getMinutes() + ". The Disfunctional Ostrich welcomes you, " + name + "!" + " We're glad you are doing " + mood);




function option1(){
	var option = prompt("Would you like to own an ostrich?");
	if(option.toLowerCase().includes("yes")){
		var why = prompt("Why would you like to own an ostrich?");
		document.getElementById("option1").innerHTML = ("OMG! That is a great reason!");
	}else if(option.toLowerCase().includes("no")){
		document.getElementById("option1").innerHTML = ("OMG! You totally should own an ostrich!");
	}else{
		document.getElementById("option1").innerHTML = ("You need more ostriches.");
	}
}

function option2(){
	var choice = prompt("Guess how many years an average ostrich lives for in captivity!?");
	if(choice < 40){
		document.getElementById("option2").innerHTML = ("A little low! An ostrich can live in captivity for 40-60 years!");
	}else if(choice >60){
		document.getElementById("option2").innerHTML = ("Too High! An ostrich can live in captivity for 40-60 years!");
	}else{
		document.getElementById("option2").innerHTML = ("Right on the money! An ostrich can live in captivity for 40-60 years!");
	}
}

function option3(){
	var choice = prompt("What would you name your pet ostrich?");
	document.getElementById("option3").innerHTML = (choice + " is a great name! Come here " + choice +"!");

}

function option4(){
	var numOwned = prompt("Enter the number of ostriches you curently own");
	var numWant = prompt("Enter the number of ostriches you want");
	var total = parseInt(numOwned) + parseInt(numWant);
	document.getElementById("option4").innerHTML = ("You would have " + total + " ostriches! You need more!");

}

function option5(){
	var choice = prompt("What would you feed your pet ostrich?");
	document.getElementById("option5").innerHTML = ("HA! " + choice + " might not be the best choice...");

}
