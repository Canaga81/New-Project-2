const xMarkButton = document.querySelector('.icon-mark');
const barsButton = document.querySelector(".icon-list");

const picture = document.getElementById("header");
const pictureActive = document.querySelector(".header-active")

barsButton.addEventListener("click", () => {
    pictureActive.style.display = "block";
    picture.style.display = "none";
})

xMarkButton.addEventListener("click", () => {
    pictureActive.style.display = "none";
    picture.style.display = "block";
})