let menu = document.querySelectorAll(".menu li a");
let wrap_1 = document.querySelector(".feature");
let wrap_2 = document.querySelector(".company");
let menu1 = document.querySelector(".wrap-menu.One");
let menu2 = document.querySelector(".wrap-menu.Two");
menu.forEach((e)=>{
    e.addEventListener("click" , function(){
        removeClass();
        e.classList.add("foucas");
    })
})
wrap_1.addEventListener('click' , ()=>{
    menu1.classList.toggle("show");
    document.images[2].src = "./images/icon-arrow-up.svg";
    if(!menu1.classList.contains("show")){
        document.images[2].src = "./images/icon-arrow-down.svg";
    }
});
wrap_2.addEventListener("click" , ()=> {
    menu2.classList.toggle("show")
    document.images[7].src = "./images/icon-arrow-up.svg";
    if(!menu2.classList.contains("show")){
        document.images[7].src = "./images/icon-arrow-down.svg";
    }
});
function removeClass(){
    menu.forEach((e)=>e.classList.remove("foucas"));
}
////////////////////////////////////////
let icon = document.querySelector(".icon");
let close = document.querySelector(".close");
let overlay = document.createElement("div");
let nav = document.querySelector("nav");
overlay.className = "overlay";
icon.addEventListener("click" , ()=>{
    nav.classList.add("hide");
    document.body.prepend(overlay);
})

close.addEventListener("click" , function(){
    nav.classList.remove("hide");
    document.body.removeChild(overlay)
})