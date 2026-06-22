function cleanText(text){
return text
.toLowerCase()
.replace(/[^\w\s]/g,'')
.trim();
}

function similarity(input, question){

const inputWords =
cleanText(input).split(" ");

const questionWords =
cleanText(question).split(" ");

let common = inputWords.filter(
word => questionWords.includes(word)
);

return common.length;
}

function getAnswer(){

const userInput =
document.getElementById("userInput").value;

if(userInput.trim()===""){
return;
}

let bestScore = 0;

let bestAnswer =
"Sorry, I couldn't understand your question.";

faqs.forEach(faq=>{

const score =
similarity(userInput, faq.question);

if(score > bestScore){
bestScore = score;
bestAnswer = faq.answer;
}

});

addMessage(userInput,"user");
addMessage(bestAnswer,"bot");

document.getElementById("userInput").value="";
}

function addMessage(text,type){

const chatBox =
document.getElementById("chatBox");

const div =
document.createElement("div");

div.classList.add("message");
div.classList.add(type);

div.innerText = text;

chatBox.appendChild(div);

chatBox.scrollTop =
chatBox.scrollHeight;
}

document
.getElementById("userInput")
.addEventListener("keypress",function(e){

if(e.key==="Enter"){
getAnswer();
}

});
