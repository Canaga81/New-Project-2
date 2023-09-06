//! Modal-1 

const btnActive = document.getElementById('prdc-btn');
const activeContainer = document.querySelector('.active-container');
const prdcContainer = document.querySelector('.prdc-container');
const closeBtn = document.querySelector(".modal_close_btn");

btnActive.addEventListener("click", () => {
    activeContainer.classList.add('bg-gray');
    prdcContainer.classList.add('active');
});

closeBtn.addEventListener("click",()=> {
    activeContainer.classList.remove('bg-gray');
    prdcContainer.classList.remove('active');
});

//! Modal-2

const btnCash = document.getElementById("cash");
const prdcContainerCash = document.querySelector(".prdc-container-cash");
const closeBtn2 = document.querySelector(".modal_close_btn_2");

btnCash.addEventListener("click", () => {
    prdcContainer.classList.remove('active');

    prdcContainerCash.classList.add('passif');
});

closeBtn2.addEventListener("click", () => {
    prdcContainerCash.classList.remove('passif');
    activeContainer.classList.remove('bg-gray');
});