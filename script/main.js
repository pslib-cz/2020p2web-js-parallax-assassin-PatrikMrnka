let l1 = document.getElementsByClassName("layer-1")[0];
let l2 = document.getElementsByClassName("layer-2")[0];
let l3 = document.getElementsByClassName("layer-3")[0];
let l4 = document.getElementsByClassName("layer-4")[0];
let con = document.getElementsByClassName("parallax-container")[0];

window.onscroll = (a) => {
    if (window.scrollY <= con.offsetHeight)
    {
        l1.style.transform = "translateY(-"+window.scrollY/2+"px)";
        l2.style.transform = "translateY(-"+window.scrollY/2+"px)";
        l3.style.transform = "translateY(-"+window.scrollY+"px) translateX(-"+window.scrollY/2+"px)";
        l4.style.transform = "translateY(-"+window.scrollY+"px)";
    }
}