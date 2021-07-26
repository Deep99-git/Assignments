function big(img){
    img.style.width = "400px"
    img.style.hight = "500px"
}
function normal(img){
    img.style.width = "300px"
    img.style.hight = "300px"
}

function show(){
    document.getElementById("image").src = "img2.jpg"
}

function show_four(){
    document.getElementById("four").style.display = "block"
}

function hide_four(){
    document.getElementById("four").style.display = "none"
}
function change(){
    document.getElementById("second").style.background = 'linear-gradient(to right,cadetblue,aquamarine)'
    document.getElementById("para").style.color = 'yellow'
}
