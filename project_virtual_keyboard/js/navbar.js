const my_menu = document.querySelector(".my-menu");
const container = document.querySelector(".container");

my_menu.addEventListener("click", () => {
    container.classList.toggle("active");
})