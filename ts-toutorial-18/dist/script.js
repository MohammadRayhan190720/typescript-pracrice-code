"use strict";
const userForm = document.querySelector("form");
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userMessage = document.querySelector("#message");
const userCountry = document.querySelector("#country");
userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        username: userName.value,
        useremail: userEmail.value,
        usermessage: userMessage.value,
        usercountry: userCountry.value
    };
    console.log(data);
});
