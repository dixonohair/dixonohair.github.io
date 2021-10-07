var person = [];
var salaries = [];

//person = [Dobi Cameron, Dave Charlotte, Gilly Eldon ,John Best,
 //Michael Taylor, Hayden Connor];

function addSalary()
{
    //CHANGE TO INPUT THRU A FORM
    person[person.length] = prompt("Enter Employees Salary: ");
    salaries[person.length] = prompt("Enter Employees Salary: ");

}

function displayResults()
{
    var sum = 0;
    for(var i =0; i<=salaries.length; i++){
        sum += salaries[i];
    }
    var average = sum / (salaries.length);

    var max = salaries[0];
    for(var i =0; i<=salaries.length; i++){
        if(salaries[i] > max){
            max = salaries[i];
        }
    }
    document.getElementById("results").innerHTML = ("Average Salary: " + average + "\nMax Salary: " +max);
}

function displaySalary()
{
    document.getElementById("results_table").innerHTML = ("Hi " + salaries);
}
