

function option1(){
	
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