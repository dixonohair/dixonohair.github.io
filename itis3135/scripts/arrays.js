//Links: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces


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
    // [12, 30, 10, 40]
    var sum = 0;
    for(var i =0; i<salaries.length; i++){
        sum += parseInt(salaries[i]);
    }
    var average = sum / (salaries.length);

    var max = salaries[0];
    for(var i =0; i<salaries.length; i++){
        if(salaries[i] > max){
            max = salaries[i];
        }
    }
    //header in h2 and max and salaries in p
    document.getElementById("results").innerHTML = ("<h3>Max: " + max + "</h3>" + "\n<p>Average: " + average + "</p>");
}

//table
function displaySalary()
{
    //help from: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
    //create the table
    var body = document.getElementsByTagName("body")[0];
    var table = document.createElement("table");
    var tableBody = document.createElement("tableBody");

    for(var i =0; i< person.length; i++)
    {
        var row = document.createElement("row");
        var cells = document.createElement("data");
        var cellsData = document.createTextNode(person[i] + salaries[i]);
        cells.appendChild(cellsData);
        row.appendChild(cells);
        
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    body.appendChild(table);
    table.setAttribute("border", "3");
    table.setAttribute("color", "black");

}

