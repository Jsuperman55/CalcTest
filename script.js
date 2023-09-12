const inputNumber = document.getElementById("input-number");
    const btnAdd = document.getElementById("btn-add");
    const btnSubtract = document.getElementById("btn-subtract");
    const btnMultiply = document.getElementById("btn-multiply");
    const btnDivide = document.getElementById("btn-divide");
    const btnEquals = document.getElementById("btn-equals"); 
    const result = document.querySelector(".result");
    
    let currentNumber = 0;
    let operator;
    
    btnAdd.addEventListener("click", () => {
      operator = "+";
      calculate();
    });
    
    btnSubtract.addEventListener("click", () => {
      operator = "-";
      calculate();
    });
    
    btnMultiply.addEventListener("click", () => {
      operator = "*";
      calculate();
    });
    
    btnDivide.addEventListener("click", () => {
      operator = "/";
      calculate();
    });

    btnEquals.addEventListener("click", () => {
      calculate();
});
    
    function calculate() {
      const enteredNumber = parseInt(inputNumber.value);
      if (isNaN(enteredNumber)) {
        return;
      }
    
      switch (operator) {
        case "+":
          currentNumber += enteredNumber;
          break;
        case "-":
          currentNumber -= enteredNumber;
          break;
        case "*":
          currentNumber *= enteredNumber;
          break;
        case "/":
          currentNumber /= enteredNumber;
          break;
      }
    
      result.textContent = `${currentNumber}`;
      inputNumber.value = "";
    }