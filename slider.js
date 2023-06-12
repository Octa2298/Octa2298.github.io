const slider = document.querySelector("#slider");
var sliderSection = document.querySelectorAll(".slider__section");
var sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector(".slider__btn-left");
const btnRight = document.querySelector(".slider__btn-right");

slider.insertAdjacentElement("afterbegin",sliderSectionLast)

function proximaImagen () {
    var sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft="-100%"

    setTimeout(()=>{
        slider.style.transition="none"
        slider.insertAdjacentElement("beforeend",sliderSectionFirst)
    },500);
}

function imagenAnterior () {
    var sliderSection = document.querySelectorAll(".slider__section");
    var sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft="0%"
    slider.style.transition="all .5s"

    setTimeout(()=>{
        slider.style.transition="none"
        slider.insertAdjacentElement("afterbegin",sliderSectionLast)
        slider.style.marginLeft="-100%"
    },500);
}

btnRight.addEventListener("click", ()=>{
    proximaImagen()
});

btnLeft.addEventListener("click", ()=>{
    imagenAnterior()
});

setInterval(proximaImagen,4000);

