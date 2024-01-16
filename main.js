let toggle = document.querySelector(".toggle-menu");
let nav = document.querySelector(".nav");
let header = document.querySelector(".header");
let mainImage = document.getElementById("big-image");
toggle.onclick = function () {
    nav.classList.toggle("open");
    toggle.classList.toggle("open");
};
window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", this.window.scrollY > 0);
});
window.onscroll = () => {
    nav.classList.remove("open");
    toggle.classList.remove("open");
};
const sr = ScrollReveal ({
    distance : '40px',
    duration: '2000',
    reset: false ,
});
sr.reveal('.landing-text',{delay:200, origin:'bottom'})
sr.reveal('.banner-text, .insta, .col, .copyright, .main-text, .blog-container, .info, .shop-container, .cart-bottom',{delay:100, origin:'bottom'})
sr.reveal('.featured, .arrivals, .brand, .main-image, form, .map, .related, .cart-container',{delay:200, origin:'left'});
function change(shirt) {
    mainImage.src = shirt;
};




