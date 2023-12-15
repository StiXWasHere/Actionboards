const aboutUs = document.querySelector("#aboutUs")
const companyName = document.querySelector("#name")
const store = document.querySelector("#store")
const facebook = document.querySelector("#facebook")
const twitterX = document.querySelector("#twitterX")
const instagram = document.querySelector("#instagram")
const gmail = document.querySelector("#gmail")

aboutUs.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href = "AboutUs.html"
})
store.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href = "https://google.com/"
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