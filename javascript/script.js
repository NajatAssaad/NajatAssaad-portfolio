const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const menuIcon = menuToggle.querySelector("i");



menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const menuIsOpen = navLinks.classList.contains("active");

    if (menuIsOpen) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
        menuToggle.setAttribute("aria-label", "Close navigation menu");
    } else {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

        menuToggle.setAttribute("aria-label", "Open navigation menu");
    }

});


// Close menu when a navigation link is selected
const links = navLinks.querySelectorAll("a");

links.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        // Change X back to hamburger
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

        menuToggle.setAttribute("aria-label", "Open navigation menu");

    });

});