let outputScreen = document.getElementById("box");

function display(num) {
    outputScreen.value += num;
}

function calculate() {
    try {
        outputScreen.value = eval(outputScreen.value);
    }
    catch(error) {
        alert("Invalid Operation");
    }
}