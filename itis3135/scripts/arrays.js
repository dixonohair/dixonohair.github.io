//Links:

var person = [];
var salaries = [];


function addSalary()
{
    person.push(document.getElementById("people").value);
    salaries.push(document.getElementById("sal").value);
    document.getElementById("sal").value = "";
}

function displayResults()
{
    var sum = 0;
    for(var i =0; i<=salaries.length-1; i++){
        sum += parseInt(salaries[i]);
    }
    var average = sum / (salaries.length-1);

    var max = salaries[0];
    for(var i =0; i<=salaries.length; i++){
        if(salaries[i] > max){
            max = salaries[i];
        }
    }
    //header in h2 and max and salaries in p
    document.getElementById("results").innerHTML = ("<h3>Max: " + max + "</h3>" + "\n<p>Average: " + sum + "</p>");
}

//table
function displaySalary()
{
    
    
}


