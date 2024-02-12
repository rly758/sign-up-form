let password = "";
let confirmPassword = "";

const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirmPassword");

const errorText = document.querySelector("#errorText");
const passwordError = "*Passwords do not match";

passwordInput.addEventListener("change", (event) => {
    password = passwordInput.value;
    if (password != confirmPassword && password && confirmPassword) {
        passwordInput.classList.add("error");
        confirmPasswordInput.classList.add("error");
        errorText.textContent = passwordError;
    }
    if (password === confirmPassword) {
        passwordInput.classList.remove("error");
        confirmPasswordInput.classList.remove("error");
        errorText.textContent = "";
    }
});

confirmPasswordInput.addEventListener("change", (event) => {
    confirmPassword = confirmPasswordInput.value;
    if (password != confirmPassword && password && confirmPassword) {
        passwordInput.classList.add("error");
        confirmPasswordInput.classList.add("error");
        errorText.textContent = passwordError;
    }
    if (password === confirmPassword) {
        passwordInput.classList.remove("error");
        confirmPasswordInput.classList.remove("error");
        errorText.textContent = "";
    }
})

