'use strict';

const addEventOnElem=function(elem,type,callback){
    if(elem.length>1){
        elem[i].addEventListener(type,callback);

    }
}else{
    elem.addEventListener(type,callback);

}


const navbar=document.querySelector(*[data-navbar]*);
const navbarLinks=document.querySelectorAll(*[data-nav-Link]*);
const navToggler=document.querySelector(*[data-nav-toggler]*);

const toggleNavbar=function(){
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");

}

addEventOneElem(navToggler,"click",toggleNavbar);

const closeNavbar=function(){
    navbar.classList.remove("active");
    navToggler.classList.remove("active");

}

addEventOneElem(navbarLinks,"click",closeNavbar);

const header=document.querySelector(*[daata-header]*);

window.addEventListener("scroll",function(){
    if(this.window.scrollY >100){
        header.classList.add("active");

    }else{
        header.classList.remove("active");
    }
});










