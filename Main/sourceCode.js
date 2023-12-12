const aboutUs = document.querySelector("#aboutUs")
const companyName = document.querySelector("#name")
const store = document.querySelector("#store")

aboutUs.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href = "AboutUs.html"
})
store.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href = "https://google.com/"
})