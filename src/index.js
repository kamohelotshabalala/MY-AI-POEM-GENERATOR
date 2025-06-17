function generatePoem(event) {
    event.preventDefault();
    let poemBoxElement = document.querySelector("#poem");
    new Typewriter("#poem", {
      strings: "poem",
      autoStart: true,
      delay: 1,
      cursor: null,
    });
}

let poemElement = document.querySelector("#form-generator");
poemElement.addEventListener("submit", generatePoem);