const burger_btn = document.querySelector("#burger-btn");
const menu = document.querySelector(".menu");
const body = document.body;


if (burger_btn && menu) {
    burger_btn.addEventListener("click", () =>{
        burger_btn.classList.toggle("active");
        menu.classList.toggle("active");
    })
}


// const navbar = document.querySelector(".header"); // to hide navbar on scrolling bottom
// var lastScrollTop = 0;

// window.addEventListener("scroll", function() {
//    var st = window.pageYOffset || document.documentElement.scrollTop;


//    if (st > lastScrollTop) {
//     $("#navbar").fadeIn(500);
//    }

//    else {
//     $("#navbar").fadeOut(500);
//    }

//    lastScrollTop = st <= 0 ? 0 : st;
// }, false);



const togleBtn = document.querySelector("#swipe-btn");
const dot = document.querySelector("#swipe-dot");
const yearText = document.querySelector("#text-year");
const monthText = document.querySelector("#text-month");
var n = 0;

togleBtn.addEventListener("click", () => {
    if (n == 0) {
        dot.style.paddingLeft = "56px";
        yearText.style.opacity="1"
        monthText.style.opacity="0.5"
        n = 1;
    }
    else {
        dot.style.paddingLeft = "8px";
        yearText.style.opacity="0.5"
        monthText.style.opacity="1"
        n = 0;
    }
})