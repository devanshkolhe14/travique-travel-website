const menuBtn = document.getElementById("menu-btn");
const navLink = document.getElementById("nav-link");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLink.classList.toggle("open");

    const isOpen = navLink.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
})

navLink.addEventListener("click", (e) => {
    navLink.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
})

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,

};

ScrollReveal().reveal(".header-image img", {
    ...scrollRevealOption,
    origin: "right",
    delay: 500
})

ScrollReveal().reveal(".header-content p", {
    ...scrollRevealOption,
    delay: 1000
})

ScrollReveal().reveal(".header-content h1", {
    ...scrollRevealOption,
    delay: 1500
})

ScrollReveal().reveal(".header-btn", {
    ...scrollRevealOption,
    delay: 2000
})

ScrollReveal().reveal(".destination-card", {
    ...scrollRevealOption,
    interval: 500
})

ScrollReveal().reveal(".showcase-image img", {
    ...scrollRevealOption,
    origin: "left"
})

ScrollReveal().reveal(".showcase-content h4", {
    ...scrollRevealOption,
    delay: 500
})

ScrollReveal().reveal(".showcase-content p", {
    ...scrollRevealOption,
    delay: 1000
})

ScrollReveal().reveal(".showcase-btn", {
    ...scrollRevealOption,
    delay: 1500
})

ScrollReveal().reveal(".banner-card", {
    ...scrollRevealOption,
    interval: 500
})

ScrollReveal().reveal(".discover-card", {
    ...scrollRevealOption,
    interval: 500
})

const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
});