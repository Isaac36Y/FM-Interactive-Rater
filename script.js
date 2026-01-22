const rateBtns = document.querySelectorAll(".rate__button")
const submitBtn = document.querySelector("#submit-button")
const userRating = document.querySelector("#user-rating")


rateBtns.forEach((btn, index) => {
    btn.addEventListener("keydown", (e) => {
        let newIndex;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
            e.preventDefault();
            newIndex = (index + 1) % rateBtns.length;
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
            e.preventDefault();
            newIndex = (index - 1 + rateBtns.length) % rateBtns.length;
        }
        if (newIndex !== undefined) {
            
            rateBtns.forEach(btn => btn.setAttribute("tabindex", "-1"));
            rateBtns[newIndex].setAttribute("tabindex", "0");
            rateBtns[newIndex].focus();

            rateBtns.forEach(btn => btn.setAttribute("aria-checked", "false"));
            rateBtns[newIndex].setAttribute("aria-checked", "true");
        }
    })
    btn.addEventListener("click", () => {
        rateBtns.forEach(b => {
            b.setAttribute("aria-checked", "false")
            b.setAttribute("tabindex", "-1")
        })
        btn.setAttribute("aria-checked", "true")
        btn.setAttribute("tabindex", "0")
        btn.focus()
        userRating.textContent = btn.value
    })
})

submitBtn.addEventListener("click", () => {
    if ([...rateBtns].some(btn => btn.getAttribute("aria-checked") === "true")) {
        document.querySelector(".rate").setAttribute("hidden", "hidden")
        document.querySelector(".thanks").removeAttribute("hidden")
    }
})
