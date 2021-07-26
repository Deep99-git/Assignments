let container = document.querySelector(".container")
let btn = document.getElementById("spinner")
let val = Math.ceil(Math.random() * 2000)
btn.onclick = function(){
    container.style.transform = "rotate("+val+"deg)"
    val += Math.ceil(Math.random()*2000)
}