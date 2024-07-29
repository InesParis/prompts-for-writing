function generatePrompt(event) {
  event.preventDefault();

  new Typewriter("#prompts", {
    strings:
      "Tell me about your weekend, start like this: the most exciting this was when...",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
let promptFormElement = document.querySelector("#prompt-generator-form");
promptFormElement.addEventListener("submit", generatePrompt);
