var hone = document.querySelector("#one")
hone.addEventListener("click", () => {
    hone.textContent = "am clicked";
    hone.style.color = "red";
})
var htwo = document.querySelector("#two")
htwo.addEventListener("dblclick", () => {
    htwo.textContent = "doubleclicked";
    htwo.style.color = "blue";
})

var hthree = document.querySelector("#three")
hthree.addEventListener("mouseout", () => {
    hthree.textContent = "mouse currently not over me";
    hthree.style.color = "green";
})
