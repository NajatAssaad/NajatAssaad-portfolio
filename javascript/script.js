const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const menuIcon = menuToggle.querySelector("i");

const navItems = navLinks.querySelectorAll("a");


function openMenu() {

    navLinks.classList.add("active");

    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");

    document.body.classList.add("menu-open");
}


function closeMenu() {

    navLinks.classList.remove("active");

    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");

    document.body.classList.remove("menu-open");
}


menuToggle.addEventListener("click", () => {

    if (navLinks.classList.contains("active")) {
        closeMenu();
    } else {
        openMenu();
    }

});


navItems.forEach((link) => {

    link.addEventListener("click", closeMenu);

});