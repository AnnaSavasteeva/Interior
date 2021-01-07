let menuElement = document.getElementById("header-menu");
let btnOpenMenu = document.getElementById("btn-open-menu");
let btnCloseMenu = document.getElementById("btn-close-menu");

btnOpenMenu.addEventListener("click", function () {
    menuElement.classList.add("open-menu");
});

btnCloseMenu.addEventListener("click", function () {
    menuElement.classList.remove("open-menu");
});
