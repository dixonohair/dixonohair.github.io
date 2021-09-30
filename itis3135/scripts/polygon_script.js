//keep prompting the user until they enter a number below 10
var userNum = prompt("Hello! Welcome to the Dysfunctional Ostrich Polygon Namer! Please enter a number 0 - 10.");


do{

    if(!(validateEntry(userNum))){
        userNum = prompt("ERROR! Please enter a number 0 - 10.");
    }

    }while(userNum > 10);

//take the number and make it positive
userNum = Math.abs(userNum);

//take the number and round it to the nearest integer
userNum = Math.ceil(userNum);

//call the name function to store the name of the polygon
var polygonName = getShape(userNum);

//Present the name of the polygon name to the user
alert("Name of Polygon: " + polygonName);

//function to take in the number of sides from the user and return the name of the polygon 
//  depending on the number of sides 
function getShape(numSides){
    switch(numSides){
        case 0:
            return "Not a polygon";
        case 1:
            return "Henagon";
        case 2:
            return "Digon";
        case 3:
            return "Trigon";
        case 4:
            return "Tetragon";
        case 5:
            return "Pentagon";
        case 6:
            return "Hexagon";
        case 7:
            return "Heptagon";
        case 8:
            return "Octagon";
        case 9:
            return "Enneagon";
        case 10:
            return "Decagon";
    }

}


//Validate that the user entered a number 0 - 10 inclusive
function validateEntry(num){
	if(num > 10){
        return false;
    }else{
        return true;
    }
}
