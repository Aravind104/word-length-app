const textInput=document.querySelector(".inputText");
const displayLength=document.querySelector(".showLength");
const showBtn=document.querySelector(".btn");
showBtn.addEventListener("click",lengthCalculator);

function lengthCalculator(){
    let userInput=textInput.value;
    let lengthOfWord=userInput.length;
    displayLength.innerHTML=lengthOfWord;
}