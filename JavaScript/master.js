let checkboxInput = document.querySelector("input[type=checkbox]")
let theBtn = document.querySelector(".top-txt .container .dark-light-btn label")


let link = document.createElement("link")
link.rel = "stylesheet"
link.href = "CSS/light-mode.css"
document.querySelector("head").appendChild(link)

theBtn.addEventListener("click" , (e) => {
    if (checkboxInput.checked) {
        e.target.classList.add("active")
        link.rel = "stylesheet"
        link.href = "CSS/dark-mode.css"
        document.querySelector("head").appendChild(link)

        localStorage.setItem("mode", true)
    } else {
        e.target.classList.remove("active")
        link.href = "CSS/light-mode.css"
        document.querySelector("head").appendChild(link)

        localStorage.setItem("mode", false)
    }
})


// Local Storage Check
if (localStorage.getItem("mode") === "true") {
    checkboxInput.checked = false
    theBtn.classList.add("active")
    link.rel = "stylesheet"
    link.href = "CSS/dark-mode.css"
    document.querySelector("head").appendChild(link)
}