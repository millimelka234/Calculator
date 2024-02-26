let memory = 0;
//document object gives acces to all html elements of a document
function display(val)
{
    document.getElementById("answer").value+=val
//returns an element object representing the element answer in the html
//the value property sets or returns the value of the value atribute of a text field to be displayed
}

function calculate()
{
    let given1  = document.getElementById("answer").value
    let given2 = eval(given1)
//the eval function is responsible for all the calculations that are being computed
//it evaluates js code represented as a string
    document.getElementById("answer").value = given2
//this then returns the answer into the display text box
}

function empty()
{
    document.getElementById("answer").value = ""
//to clear the text box for new operations to evaluate
}

function addToMemory() {
    let currentValue = parseFloat(document.getElementById("answer").value);
    if (!isNaN(currentValue)) {
        memory += currentValue;
        alert("Value added to memory: " + currentValue);
    } else {
        alert("Invalid value to add to memory.");
    }
}

function subtractFromMemory() {
    let currentValue = parseFloat(document.getElementById("answer").value);
    if (!isNaN(currentValue)) {
        memory -= currentValue;
        alert("Value subtracted from memory: " + currentValue);
    } else {
        alert("Invalid value to subtract from memory.");
    }
}

function recallMemory() {
    document.getElementById("answer").value = memory;
}

function clearMemory() {
    memory = 0;
    alert("Memory cleared.");
}