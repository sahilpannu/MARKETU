document.addEventListener("DOMContentLoaded", function() {
    const ctaButtons = document.querySelectorAll(".cta-button");
    ctaButtons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Thank you for your interest! We will get in touch soon.");
        });
    });

    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Message sent successfully! We will get back to you shortly.");
            contactForm.reset();
        });
    }
});
