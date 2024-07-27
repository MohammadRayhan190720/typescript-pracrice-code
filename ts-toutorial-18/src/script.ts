const userForm = document.querySelector("form")as HTMLFormElement;

const userName = document.querySelector("#name") as HTMLInputElement;

const userEmail = document.querySelector("#email") as HTMLInputElement;

const userMessage = document.querySelector("#message") as HTMLTextAreaElement;

const userCountry = document.querySelector("#country") as HTMLSelectElement;



userForm.addEventListener("submit", (event : Event) => {
  event.preventDefault();
  const data = {
    username : userName.value,
    useremail : userEmail.value,
    usermessage : userMessage.value,
    usercountry : userCountry.value
  }
  console.log(data);

})