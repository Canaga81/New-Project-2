const xMarkButton = document.querySelector('.icon-mark');
const barsButton = document.querySelector(".icon-list");

const picture = document.getElementById("header");
const pictureActive = document.querySelector(".header-active");

barsButton.addEventListener("click", () => {
    pictureActive.style.display = "block";
    picture.style.display = "none";
})

xMarkButton.addEventListener("click", () => {
    pictureActive.style.display = "none";
    picture.style.display = "block";
});


//! ----------------------------------------------------------------

const faChevronDown = document.querySelector(".btn-i");
const btnIcon = document.querySelector(".btn-icon2");

faChevronDown.addEventListener("click", () => {
    btnIcon.classList.toggle('active');
    console.log('ses');
});


const headerBtnsToggle = document.querySelector('.header-btns-toggle');
const btnForm = document.querySelector('.btn-form');

btnForm.addEventListener("click", () => {
    headerBtnsToggle.classList.toggle('active');
});