document.querySelectorAll(".header-menu__list--menu").forEach(elem => {
    elem.addEventListener("click", (e) => {
        let existClass = e.target;
        if (existClass.querySelector(".dropDown")) {
            existClass.querySelector(".dropDown").classList.toggle("active")
        }

        existClass.closest("ul").classList.remove("active")
    })
})