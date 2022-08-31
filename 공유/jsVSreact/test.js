const toggle = document.querySelector(".p");
const openHandler = document.querySelector(".open")
const closeHandler = document.querySelector(".close")

openHandler.addEventListener("click", () => {
  toggle.classList.add("show")
})
closeHandler.addEventListener("click", () => {
  toggle.classList.remove("show")
})

