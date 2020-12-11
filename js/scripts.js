function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}
gsap.to("h3.title", {duration: 2, x: 440});