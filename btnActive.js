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
}) 

