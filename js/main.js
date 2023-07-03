let drop = document.querySelector("header .icon")
let dropSpan = document.querySelector("header .icon span")
let ul = document.querySelector("header .icon ul")


drop.addEventListener('click', ()=>{
    if (ul.style.display != "flex") {
        ul.style.display = "flex" ;
    } else {
        ul.style.display = "none" ;
    }
})