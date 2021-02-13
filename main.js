
let menuButton = document.querySelector("#menu-button");
let menuFly = document.querySelector("#menu-fly");

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


/*  function getOffsetTop(element) {
        let offsetTop = 0;
    while(element) {
      offsetTop += element.offsetTop;
      element = element.offsetParent;
    }
    return  scroll({
            top: offsetTop,
            behavior: 'smooth'
        });
    };


const menuLinks = document.querySelectorAll(".menu-link");

for(const menuLink of menuLinks){
    menuLink.addEventListener("click", getOffsetTop);
} */