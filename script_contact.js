window.addEventListener("load", () => {
  const form = document.querySelector("#contact-form");
  form.addEventListener("submit", sendMessage);
});

function sendMessage(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  const {name, email, message} = data;
  const dataArray = [name, email, message];

  const formOutputHeader = document.querySelector("#form-info-header");
  formOutputHeader.innerHTML = "The below details have been sent:";  

  // below code to simulate sending the message to a server/ mailbox.
  dataArray.forEach((i) => {
    const newElement = document.createElement("li");
    const formOutput = document.querySelector("#form-info");
    newElement.innerHTML = i;

    formOutput.appendChild(newElement);
  })
}