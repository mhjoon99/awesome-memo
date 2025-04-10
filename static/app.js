function createMemo(event) {
  event.preventDefault();
  console.log("submit completed!");
}

const form = document.querySelector("#memo-form");
form.addEventListener("submit", createMemo);
