 const info1=document.getElementById("respuesta1")
 const info2=document.getElementById("respuesta2")
 const info3=document.getElementById("respuesta3")

function mostrar1(){
    info1.style.display = "block"
}
function ocultar1(){
    info1.style.display = "none"
}

function mostrar2(){
    info2.style.display = "block"
}
function ocultar2(){
   info2.style.display = "none"
}

function mostrar3(){
    info3.style.display = "block"
}
function ocultar3(){
    info3.style.display = "none"
}

function playAudio(){
    document.getElementById("musica1").play();
}





window.addEventListener("load")