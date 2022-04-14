// getting the box element
let outputScreen = document.getElementById("box");

//  A function to display numbers or numeric operators in an iinput box
function display(num) {
    outputScreen.value += num;
}

//  A function to calculate or evaluate the arithmetic operations in an input box
function calculate() {
    try {
        outputScreen.value = eval(outputScreen.value);
    }
    catch(error) {
        alert("Invalid Operation");
    }
}

// A function to clear the input box
function Clear() {
    outputScreen.value = "";
}