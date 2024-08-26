let isnew=false;

console.log("Script loaded successfully");

    let elements = document.querySelectorAll(".btns");
    elements.forEach(function(element) {
        element.addEventListener("click", clickHandler);
    });
function clickHandler(e){
console.log("function called ");
// console.log(e.target);

}