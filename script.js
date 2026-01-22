const rateBtns = document.querySelectorAll("#rating-number")
const submitBtn = document.querySelector("#submit-button")
const userRating = document.querySelector("#user-rating")

const clicksBtn = (btn) => {
    rateBtns.forEach(button => {
        button.classList.remove("clicked")
        button.setAttribute("aria-pressed", "false")
    })
    btn.classList.add("clicked")
    btn.setAttribute("aria-pressed", "true")
    userRating.textContent = btn.value
}

rateBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        clicksBtn(btn)
    })
})

submitBtn.addEventListener("click", () => {
    if ([...rateBtns].some(btn => btn.classList.contains("clicked"))) {
        document.querySelector(".rate").setAttribute("hidden", "hidden")
        document.querySelector(".thanks").removeAttribute("hidden")
    }
})
