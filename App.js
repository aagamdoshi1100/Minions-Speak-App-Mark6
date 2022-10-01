var TextInputArea = document.querySelector("#txt-area");
var Buttn = document.querySelector("#Cl");
var OutputArea = document.querySelector("#Output");

// OutputArea.innerText = "Helloworld";
// console.log(Buttn)
// console.log(TextInputArea)

var URL = "https://api.funtranslations.com/translate/minion.json";

function ConnectionURL(text1){  
    console.log(text1);
    var finalUrl = URL + "?" + "text=" + text1;
    console.log(finalUrl);
    return finalUrl;
}

function errorHandler(error){
    console.log("error occured",error)
}

function ClickHandler(){

    var text = TextInputArea.value;
    console.log(text);

    fetch(ConnectionURL(text))
    .then(response => response.json())
    .then(json => {console.log(json);
        var TranslatedText = json.contents.translated;
        console.log(TranslatedText);
        OutputArea.innerText = TranslatedText;
    })
    .catch(errorHandler)
    // console.log(Buttn);
    // console.log("input", TextInputArea.value);
    // var abc = TextInputArea.value;
    // OutputArea.innerText = abc;
};
Buttn.addEventListener("click", ClickHandler);