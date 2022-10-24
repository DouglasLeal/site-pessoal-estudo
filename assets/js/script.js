let btnMenu = document.querySelector(".btn-menu");
let linksMenu = document.querySelectorAll(".navbar-link");

let menu = document.querySelector(".navbar-menu");

btnMenu.addEventListener("click", (e)=>{
    menu.classList.toggle("show-menu");
});

linksMenu.forEach(link => {
    link.addEventListener("click", (e)=>{
        menu.classList.remove("show-menu");
    });
});