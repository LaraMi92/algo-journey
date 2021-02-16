
let menuButton = document.querySelector("#menu-button");
let menuFly = document.querySelector("#menu-fly");
let closeMenuBtn = document.querySelector('.close-menu');

const showMenu = () => {
    menuFly.classList.add("show");
    document.body.style.overflow = "hidden";
};

const hideMenu = () => {
    menuFly.classList.remove("show");
    document.body.style.overflow = "auto";
}

menuButton.addEventListener("click", showMenu, false);
menuFly.addEventListener("click", hideMenu, false);
closeMenuBtn.addEventListener("click", hideMenu, false);
