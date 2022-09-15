function imgSlider(e){
    document.querySelector('#phone').src = e;
}

const hamburguer = document.querySelector(".hamburguer");
const linksheader = document.querySelector(".links-header");

hamburguer.addEventListener("click", () => {
    linksheader.classList.toggle("menu");
    hamburguer.classList.toggle("menu");
})