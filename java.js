function toggleWelcome() {
    let text = document.getElementById("welcomeText");
    text.classList.toggle("hidden");
}

// Form validation for the Contact page
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("messageBox").value;
    let output = document.getElementById("formMsg");

    if (name === "" || email === "" || message === "") {
        output.style.color = "red";
        output.innerHTML = "Please fill in all fields.";
    } else {
        output.style.color = "green";
        output.innerHTML = "Your message has been sent successfully!";
    }
}

