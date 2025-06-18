function displayPoem(response){
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
 
}



function generatePoem(event) {
    event.preventDefault();
    let poemBoxElement = document.querySelector("#poem");
let questionInput = document.querySelector("#question-input");
let apiKey = "46o4ft0aa94fd28cbcf4b985bc283d4f";
let context ="Your are a smart AI assisant and you know everything. please generate a 6 line poem, and separate each line with a <br/> and space after each line. Do not write a line on top of the other. Make sure to follow User Instructions. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem.";
let prompt = `User Instructions: Generate a poem about  ${questionInput.value}`;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
let poem = document.querySelector("#poem");
poem.classList.remove("hidden");
poem.innerHTML = `<div class="blink">⌛ Generating something for you about ${questionInput.value}, please wait...😊 </div>`

axios.get(apiUrl).then(displayPoem);
    
}

let poemElement = document.querySelector("#form-generator");
poemElement.addEventListener("submit", generatePoem);