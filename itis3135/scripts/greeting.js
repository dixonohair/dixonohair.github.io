	var name = prompt("Hello! What is your name?");
	var mood = prompt("How are you today?");
	var time = new Date();
	document.write("Today is " + time.toDateString() + ". The Time is " + time.getHours() +
		 ":" + time.getMinutes() + ". The Disfunctional Ostrich welcomes you, " + name + "!" + " We're glad you are doing " + mood);




function option1(){
	var option = prompt("Ostrich or Panda?");
	if(option.toLowerCase() == "panda"){
		document.getElementById("option1").innerHTML = ("Wrong Answer! Ostrich for life!!");
	}else if(option.toLowerCase() == "ostrich"){
		document.getElementById("option1").innerHTML = ("Correct! Ostrich for life!!");
	}else{
		document.getElementById("option1").innerHTML = ("That is not an option!");
	}
}
