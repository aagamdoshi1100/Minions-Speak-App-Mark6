var TextInputArea = document.querySelector("#txt-area");
var Buttn = document.querySelector("#Cl");
var OutputArea = document.querySelector("#Output");

// OutputArea.innerText = "Helloworld";
// console.log(Buttn)
// console.log(TextInputArea)

var URL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function ConnectionURL(text1){  

    return finalUrl = URL + "?" + "text=" + text1;
}

function errorHandler(error){
    console.log("error occured",error)
}

function ClickHandler(){

    var text = TextInputArea.innerText;

    fetch(ConnectionURL(text))
    .then(response => response.json())
    .then(json => {
        var TranslatedText = json.contents.translated;
        OutputArea.innerText =  TranslatedText;
    })
    .catch(errorHandler)
    // console.log(Buttn);
    // console.log("input", TextInputArea.value);
    // var abc = TextInputArea.value;
    // OutputArea.innerText = abc;
};
Buttn.addEventListener("click", ClickHandler);