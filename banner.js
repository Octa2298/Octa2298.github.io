const banner = document.querySelector("#banner");
var bannerSection = document.querySelectorAll(".banner__section");
var bannerSectionLast = bannerSection[bannerSection.length - 1];

banner.insertAdjacentElement("afterbegin",bannerSectionLast);

function bannerProximo () {
    var bannerSectionFirst = document.querySelectorAll(".banner__section")[0];
    banner.style.marginLeft="-100"

    setTimeout(()=>{
        banner.style.transition="none"
        banner.insertAdjacentElement("beforeend",bannerSectionFirst)
    })
}

function bannerAnterior () {
    var banner__section = document.querySelectorAll(".banner__section");
    var bannerSectionLast = bannerSection[bannerSection.length - 1];
    banner.style.marginLeft="0%"
    banner.style.transition="all .5s"

    setTimeout(()=>{
        banner.style.transition="none"
        banner.insertAdjacentElement("afterbegin",bannerSectionLast)
    },200);
}

setInterval(bannerProximo,2000)
