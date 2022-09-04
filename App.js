
var TextInputArea = document.querySelector("#txt-area");
var Buttn = document.querySelector("#Cl");
var OutputArea = document.querySelector("#Output");

OutputArea.innerText = "Helloworld";

console.log(Buttn)
console.log(TextInputArea)



function ClickHandler(){
    console.log(Buttn);
    console.log("input", TextInputArea.value);

    var abc = TextInputArea.value;

OutputArea.innerText = abc;
};


Buttn.addEventListener("click", ClickHandler);