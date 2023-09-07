//! Modal-1 

const btnActive = document.getElementById('prdc-btn');
const activeContainer = document.querySelector('.active-container');
const prdcContainer = document.querySelector('.prdc-container');
const closeBtn = document.querySelector(".modal_close_btn");

btnActive.addEventListener("click", () => {
    activeContainer.classList.add('bg-gray');
    prdcContainer.classList.add('active');
});

closeBtn.addEventListener("click", () => {
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

//! Modal-3

const btnLoading = document.getElementById("loading");
const prdcContainerLoading = document.querySelector(".prdc-container-loading");
const closeBtn3 = document.querySelector(".modal_close_btn_3")

btnLoading.addEventListener("click", () => {
    prdcContainerCash.classList.remove('passif');
    prdcContainerLoading.classList.add('active');
});


closeBtn3.addEventListener("click", () => {
    prdcContainerLoading.classList.remove('active');
    activeContainer.classList.remove('bg-gray');

    prdcContainerTrue.classList.add("true")
});


// function removeClassesAfterTimeout() {
//     setTimeout(() => {
//         prdcContainerLoading.classList.remove('active');
//         activeContainer.classList.remove('bg-gray');
//         console.log("Classes forcefully removed after 3 seconds");
//     }, 3000); 
// }


// removeClassesAfterTimeout();


//! Modal-4

const prdcContainerTrue = document.querySelector(".prdc-container-true");
const closeBtn4 = document.querySelector(".modal_close_btn_4");

closeBtn4.addEventListener("click", () => {
    prdcContainerTrue.classList.remove("true")
});