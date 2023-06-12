var menuDesplegar = document.getElementById("desplegar");
var menuContraer = document.getElementById("contraer");
var numDeslizar = document.getElementById("deslizarNum");
var btnHamburguesa = document.getElementById("botonHamburguesa");


btnHamburguesa.addEventListener("click", ()=>{
    var posicionMenuHamburguesa = document.getElementById("menuHamburguesa").style.left;
    if(posicionMenuHamburguesa<"-19em"){
    document.getElementById("lineaSuperior").style.transform="rotate(45deg)";
    document.getElementById("lineaSuperior").style.boxShadow="none";
    document.getElementById("lineaSuperior").style.top="1.7em";
    document.getElementById("lineaInferior").style.transform="rotate(-45deg)";
    document.getElementById("menuHamburguesa").style.left="-1em";
    document.getElementById("menuHamburguesa").style.opacity="1";

    }else {
    document.getElementById("lineaSuperior").style.transform="rotate(0deg)";
    document.getElementById("lineaSuperior").style.boxShadow="#ffffff 0 .9em";
    document.getElementById("lineaSuperior").style.top="0em";
    document.getElementById("lineaInferior").style.transform="rotate(0deg)";
    document.getElementById("menuHamburguesa").style.left="-17em";   
    document.getElementById("menuHamburguesa").style.opacity="0";
         
    };
});


numDeslizar.addEventListener("click", ()=>{
    var deslizar = document.getElementById("celNumero").style.top;
    if(deslizar<"-9em"){
        document.getElementById("celNumero").style.top="0"
        document.getElementById("celNumero").style.opacity="1"
        document.getElementById("deslizarNum").style.display="block"
    }else {
        document.getElementById("celNumero").style.top="-8em"
        document.getElementById("celNumero").style.opacity="0"

    };
});




menuDesplegar.addEventListener("click",()=>{
    document.getElementById("desplegable").style.left="0",
    document.getElementById("desplegable").style.opacity="1",
    document.getElementById("desplegar").style.display="none",
    document.getElementById("contraer").style.display="block"
});

menuContraer.addEventListener("click",()=>{
    document.getElementById("desplegable").style.left="6em",
    document.getElementById("desplegable").style.opacity="0",
    document.getElementById("desplegar").style.display="block",
    document.getElementById("contraer").style.display="none"
});