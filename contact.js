document.addEventListener("DOMContentLoaded", () => {
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener("click", (event) => {
            // Close all dropdown menus
            dropdownToggles.forEach(otherToggle => {
                if (otherToggle !== toggle) {
                    const otherDropdownMenu = otherToggle.nextElementSibling;
                    otherDropdownMenu.style.display = "none";
                }
            });

            // Toggle the clicked dropdown menu
            const dropdownMenu = toggle.nextElementSibling;
            dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
            event.stopPropagation();
        });
    });

    document.addEventListener("click", () => {
        dropdownToggles.forEach(toggle => {
            const dropdownMenu = toggle.nextElementSibling;
            dropdownMenu.style.display = "none";
        });
    });
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Validate the form
    const form = event.target;
    const isValid = form.checkValidity();
    if (!isValid) {
        showToast("Please fill all the required fields correctly.", "error");
        return;
    }

    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const buttonText = submitButton.querySelector(".cf-button-text");
    const spinner = submitButton.querySelector(".cf-spinner");

    submitButton.disabled = true;
    buttonText.textContent = "SENDING...";
    spinner.classList.remove("cf-hidden");

    // Submit the form using Fetch API
    const formData = new FormData(form);
    fetch(form.action, {
        method: "POST",
        body: formData,
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                form.reset();
                showToast("Message sent successfully!", "success");
            } else {
                showToast("Failed to send the message. Please try again.", "error");
            }
        })
        .catch(() => {
            showToast("An error occurred. Please try again later.", "error");
        })
        .finally(() => {
            submitButton.disabled = false;
            buttonText.textContent = "SUBMIT";
            spinner.classList.add("cf-hidden");
        });
});

function showToast(message, type = "success") {
    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toastMessage");

    toast.className = "cf-toast";
    toast.classList.add(type);
    toastMessage.textContent = message;

    // Show toast
    setTimeout(() => toast.classList.add("show"), 100);

    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}







document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navList = document.querySelector(".nav-list");

    // Toggle Hamburger Menu
    hamburgerMenu.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("active");
        navList.classList.toggle("active");
    });

    // Close menu when clicking a link
    navList.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            hamburgerMenu.classList.remove("active");
            navList.classList.remove("active");
        });
    });
});
