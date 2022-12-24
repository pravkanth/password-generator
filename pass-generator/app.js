const passwordLengthInput = document.getElementById("password-length-input");
const passwordLengthValue = document.getElementById("password-length-value");
const capitalCheckbox = document.getElementById("capital-checkbox");
const numberCheckbox = document.getElementById("number-checkbox");
const symbolCheckbox = document.getElementById("symbol-checkbox");

let capital,number,symbol = false;
let finalText = "Click generate text";

passwordLengthInput.addEventListener("input",()=>passwordLengthValue.textContent = passwordLengthInput.value)
capitalCheckbox.addEventListener("click",()=>capital = capitalCheckbox.checked)
numberCheckbox.addEventListener("click",()=>number = numberCheckbox.checked)
symbolCheckbox.addEventListener("click",()=>symbol = symbolCheckbox.checked)

function generatePassword(){
    let totalLength = passwordLengthInput.value;
    let randomNumber;
    let text = "";
    const specialChars = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;
    if(capital==true){
        totalLength-=1;
        randomNumber = Math.floor(Math.random() * (90 - 65+1) + 65);
        text += String.fromCharCode(randomNumber)
    }
    if(number==true){
        randomNumber = Math.floor(Math.random() * 9);
        randomNumber.toString()
        text += randomNumber
        totalLength-=1
    }if(symbol==true){
        randomNumber = Math.floor(Math.random() * 32);
        text += specialChars[randomNumber]
        totalLength-=1
    }
    for(let i=0;i<totalLength;i++){
        randomNumber = Math.floor(Math.random() * (122 - 97 + 1) + 97);
        text+=String.fromCharCode(randomNumber)
    }
    finalText = text.split('').sort(function(){return 0.5-Math.random()}).join('');
    document.getElementById("password").textContent = finalText;
}

function copyText() {
    navigator.clipboard.writeText(finalText);
}