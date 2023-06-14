var mouseSobreColecciones=document.getElementById("colecciones");
var mouseSobreDesplegable1=document.getElementById("desplegable1");

mouseSobreDesplegable1.addEventListener("mouseover",()=>{
    document.getElementById("coleccion1").style.left="-8vw"
    document.getElementById("coleccion2").style.left="8vw"
});


mouseSobreColecciones.addEventListener("mouseover",()=>{
    document.getElementById("coleccion1").style.left="-8vw"
    document.getElementById("coleccion2").style.left="8vw"
});

mouseSobreColecciones.addEventListener("mouseout",()=>{
    document.getElementById("coleccion1").style.left="0vw"
    document.getElementById("coleccion2").style.left="0vw"
});