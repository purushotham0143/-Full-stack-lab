// let operand1=0;
// let operator="";
// let isNew=false;

// let elements=document.querySelectorAll(".btns");
// elements.forEach(function(element){
//     element.addEventListener("click",clickHandler);
// })

// let operations=document.querySelectorAll(".operations");
// operations.forEach(function(element){
//     element.addEventListener("click",operationHandler);
// })



// function operationHandler(e)
// {
//     if(e.target.innerText=="+")
//     {
//         operand1=parseInt(digits.innerText);
//         operator="+";
//         isNew=true;
    
//     }
//     if(e.target.innerText=="=")
//         {
//             if(operator=="+")
//             {
//                 let operand2=parseInt(digits.innerText);
//                 let add=operand1+operand2;
//                 digits.innerHTML=add;
                

//             }

//         }
//         if(e.target.innerHTML=='-'){
//             operand1=parseInt(digits.innerText);
//             operator="-";
//             isNew=true;
//         }
//         if(e.target.innerText=="=")
//             {
//                 if(operator=="-")
//                 {
//                     let operand2=parseInt(digits.innerText);
//                     let minus=operand1-operand2;
//                     digits.innerHTML=minus; 
                    
    
//                 }
    
//             }
    

// }


// function clickHandler(e)
// {
//     if(digits.innerText=="0")
//         digits.innerText="";
//     if(isNew==true)
//     {
//         digits.innerText="";
//         isNew=false;
//     }    



//     let target=e.target;
//     digits.innerText=digits.innerText+target.innerText;


// }




let operand1 = 0;
let operator = "";
let isNew = false;

let elements = document.querySelectorAll(".btns");
elements.forEach(function(element) {
    element.addEventListener("click", clickHandler);
});

let operations = document.querySelectorAll(".operations");
operations.forEach(function(element) {
    element.addEventListener("click", operationHandler);
});

function operationHandler(e) {
    const operation = e.target.innerText;
    const currentValue = parseInt(digits.innerText);

    if (operation === "+" || operation === "-") {
        operand1 = currentValue;
        operator = operation;
        isNew = true;
    }

    if (operation === "=") {
        if (operator === "+") {
            const operand2 = currentValue;
            const result = operand1 + operand2;
            digits.innerText = result;
        } else if (operator === "-") {
            const operand2 = currentValue;
            const result = operand1 - operand2;
            digits.innerText = result;
        }
        // Reset operator and operand1 after calculation
        operator = "";
        operand1 = 0;
    }
}

function clickHandler(e) {
    // console.log(e.target);
    if(digits.innerText=="0")
                digits.innerText="";
            if(isNew==true)
            {
                digits.innerText="";
                isNew=false; 
            }    
            let target=e.target;
            digits.innerText=digits.innerText+target.innerText;
}

