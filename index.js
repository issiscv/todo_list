const name = document.querySelector("#title");

const CLICKED_NAME = "clicked";

function handle() {
    name.classList.toggle(CLICKED_NAME);
}

function init() {
    name.addEventListener("click", handle);
}
init();