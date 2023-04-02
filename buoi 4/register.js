const regContainer = document.createElement("div");
const title = document.createElement("h3");
title.innerHTML = "Create your account";
regContainer.classList.add("app");


const emailInput = document.createElement("input")
emailInput.placeholder="Enter your email"

const nameInput = document.createElement("input")
nameInput.placeholder = "Enter your name"

const passInput = document.createElement("input")
passInput.type ="password"
passInput.placeholder = "Enter your password"

const confirmPassInput = document.createElement("input")
confirmPassInput.type ="password"
confirmPassInput.placeholder = "Enter your password"


const submitButton = document.createElement("input")
submitButton.type = "submit"
submitButton.value= "Register"


const linktoLogin = document.createElement("a")
linktoLogin.innerHTML = "You already have an account"

regContainer.appendChild(title);
regContainer.appendChild(emailInput);
regContainer.appendChild(nameInput);
regContainer.appendChild(passInput);
regContainer.appendChild(confirmPassInput);
regContainer.appendChild(submitButton );
regContainer.appendChild(linktoLogin);

const regForm = document.createElement("form");
regForm.appendChild(regContainer);

const app = document.getElementById("app")
app.appendChild(regForm);

