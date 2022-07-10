function refresh(){    
    
    location.reload();
    
}

function operation() {

    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const operation = document.getElementById("options").value;
    const operationCheck = document.getElementById("options");

    const val1 = Number(num1.value);
    const val2 = Number(num2.value);

    const answer = document.getElementById("answer");
    answer.style.background = "#43e647";
    answer.style.color = "white";

    if(operationCheck.value == "" || val1 == 0 || val2 == 0){
        answer.innerText = "Insert all fields to perform your operation successfully."
        answer.style.background = "red"
        answer.style.color = "white"
    }

    if(operation == "+" && val1 != 0 && val2 != 0) {

        let result = val1 + val2;
        answer.innerText = "Result: "  + result;

    }else if(operation == "-" && val1 != 0 && val2 != 0){

        let result = val1 - val2;
        answer.innerText = "Result: "  + result;

    }else if(operation == "x" && val1 != 0 && val2 != 0){

        let result = val1 * val2;
        answer.innerText = "Result: "  +  result;

    }else if(operation == "/" && val1 != 0 && val2 != 0){

        let result = val1 / val2;
        answer.innerText = "Result: "  + result;
    }

}