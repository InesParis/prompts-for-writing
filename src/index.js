function displayPrompt(response) {
  let promptText = response.data.answer;
  promptText = promptText.replace(/\n/g, "<br>");

  new Typewriter("#prompts", {
    strings: promptText,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePrompt(event) {
  event.preventDefault();
  let topicInput = document.querySelector("#topic").value;
  let fictionNonfictionInput = document.querySelector(
    "#fiction-nonfiction"
  ).value;
  let topicsYouLoveInput = document.querySelector("#topics-you-love").value;

  let apiKey = "4f2360cc5d2fbf9f02a9o90ddad3f50t";
  let prompt = `generate a writing prompt with the ${topicInput} using the information to set the scene, include ${fictionNonfictionInput} to decide with the prompt should make the writer write a fictional story or a nonfictional one and finally use ${topicsYouLoveInput} to adapt the writing prompt to what the writer really likes. include a first sentence to their writing to help them start.`;
  let context =
    "You are a great English teacher that wants their students to achieve their maximum capacities and you want to help them in particular with their writing skills, generating prompts that are adapted to their needs and fun, the prompts should be short and give and encouraging first line for the students to continue";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let promptElement = document.querySelector("#prompts");
  promptElement.classList.remove("hidden");
  promptElement.innerHTML = "Coming up with your prompt, give me a second 🤗";

  axios.get(apiUrl).then(displayPrompt);
}
let promptFormElement = document.querySelector("#prompt-generator-form");
promptFormElement.addEventListener("submit", generatePrompt);
