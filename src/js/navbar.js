let button = document.querySelector("#mobile-button")
let links = document.querySelector("#mobile-menu")
let list = document.querySelector("#mobile-list")

button.addEventListener("click", function() {
    const divHeight = links.getBoundingClientRect().height
    const listHeight = list.getBoundingClientRect().height

    if (divHeight === 0) {
        links.style.height = `${listHeight}px`
    } else {
        links.style.height = 0
    }
})