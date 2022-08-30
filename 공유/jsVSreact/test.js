const p = document.querySelector(".p")
const openBtn = document.querySelector(".open")
const closeBtn = document.querySelector(".close")

openBtn.addEventListener("click", () => {
  p.classList.add("show")
})
closeBtn.addEventListener("click", () => {
  p.classList.remove("show")
})

