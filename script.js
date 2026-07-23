let form = document.getElementById("sign-up");
let password1 = document.getElementById("user-password");
let password2 = document.getElementById("user-confirm-password");
form.addEventListener("submit", () => {
    if (password1.value !== password2.value) {
        event.preventDefault();
        password1.style.borderColor = "red";
        password2.style.borderColor = "red"; 
        alert("Passwords need to match!");
        password1.value = "";
        password2.value = "";
    } 
})