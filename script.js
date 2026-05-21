const toggleButton = document.getElementById("themeToggle");

toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleButton.textContent = "Light Mode";
    } else {
        toggleButton.textContent = "Dark Mode";
    }
});


// Typing Animation
const text = "Beginner Web Developer | Student | Designer";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typingText").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Message sent successfully!");

    this.reset();
});