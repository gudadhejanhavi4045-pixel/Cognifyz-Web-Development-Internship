
// Contact Form Submission

document.getElementById("contactForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name.trim() === "" ||
        email.trim() === "" ||
        message.trim() === "") {

        alert("Please fill in all fields.");
        return;
    }

    document.getElementById("formMessage").textContent =
        "Thank you, " + name +
        "! Your inquiry has been recorded in this demo.";

    document.getElementById("contactForm").reset();
});
