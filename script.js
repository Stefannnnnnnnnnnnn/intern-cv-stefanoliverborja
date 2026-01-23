const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️ Light Mode";
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
    }
});

const hideButtons = document.querySelectorAll(".hide-btn");

hideButtons.forEach(button => {
    button.addEventListener("click", function () {
        const section = button.parentElement;
        const content = Array.from(section.children).filter(
            child => child !== button && child.tagName.toLowerCase() !== "h2"
        );

        content.forEach(el => {
            if (el.style.display === "none") {
                el.style.display = "";
                button.textContent = "Hide";
            } else {
                el.style.display = "none";
                button.textContent = "Show";
            }
        });
    });
});
