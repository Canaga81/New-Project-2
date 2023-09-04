const toggles = document.querySelectorAll(".joke-toggle");

toggles.forEach((toggle) => {

    toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle('active');
    });

});