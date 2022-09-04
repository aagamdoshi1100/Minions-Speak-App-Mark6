
var TextInputArea = document.querySelector("#txt-area");
var Buttn = document.querySelector("#Cl");
console.log(Buttn)
console.log(TextInputArea)

function ClickHandler(){
    console.log(Buttn);
    console.log("input", TextInputArea.value);
};


Buttn.addEventListener("click", ClickHandler);