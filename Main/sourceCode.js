const aboutUs = document.querySelector("#aboutUs")
const companyName = document.querySelector("#name")
const contact = document.querySelector("#contact")
const facebook = document.querySelector("#facebook")
const twitterX = document.querySelector("#twitterX")
const instagram = document.querySelector("#instagram")
const gmail = document.querySelector("#gmail")
const navbar = document.querySelector("header")

aboutUs.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href = "AboutUs.html"
})
companyName.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href = "LandingPage.html"
})
contact.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href = "ContactPage.html"
})
facebook.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href = "https://facebook.com"
})
twitterX.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href = "https://twitter.com"
})
instagram.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href = "https://instagram.com"
})
gmail.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href = "https://mail.google.com/"
})

let lastScrollY = window.scrollY;

window.addEventListener("scroll", (e) => {
    if (lastScrollY < window.scrollY) {
        console.log("scrolling down")
        navbar.classList.remove("fadeIn");
        navbar.classList.add("fadeOut");
    } else {
        console.log("scrolling up")
        navbar.classList.remove("fadeOut");
        navbar.classList.add("fadeIn");
    }
    lastScrollY = window.scrollY;
})
