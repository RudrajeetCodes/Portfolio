new Typed("#element", {
    strings: [
        "Front-End Developer",
        "Game Developer",
        "Linux Enthusiast"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    if (currentTheme === "light") {
        document.documentElement.removeAttribute("data-theme");
        themeToggle.textContent = "🌙";
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        themeToggle.textContent = "☀️";
    }
});