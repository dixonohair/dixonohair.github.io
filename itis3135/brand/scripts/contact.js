
//take input from forms and print the to the page
//help: https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript


function returnForm(){

    //get the name, email, and phone from the form
var name = document.getElementById("name").value;
var email = document.getElementById("mail").value;
var phone = document.getElementById("phone").value;
//return these to the page
document.getElementById("contactInfo").innerHTML = "We will contact: " + name + " at " + email + " or " + phone;

    //check which text box they chose and return that method of contact

    //check which text box they chose and return yay or nah regarding answer to newsletter



}