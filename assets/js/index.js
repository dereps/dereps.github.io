let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle("bx-x")
    navlist.classList.toggle("open")
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 1000,
    delay: 0,
    reset: true
});

sr.reveal('.icons', {delay:100, origin: 'left'})
sr.reveal('.hero-text', {delay:200, origin: 'top'})
sr.reveal('.hero-img', {delay:300, origin: 'top'})
sr.reveal('.scroll-down', {delay:400, origin: 'right'})