function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open"); // iza ken 3nda lclass open bta3mlu remove w iza ma ken mawjud bta3mlu add
    icon.classList.toggle("open");

}