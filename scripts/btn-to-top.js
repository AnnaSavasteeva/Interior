let upButton = document.getElementById("up-button");

window.onscroll = function () {
    if (pageYOffset > document.documentElement.clientHeight) {
        upButton.classList.add("up-btn-show");
    } else {
        upButton.classList.remove("up-btn-show");
    }
};

upButton.onclick = function () {
    window.scrollTo(0, 0);
};