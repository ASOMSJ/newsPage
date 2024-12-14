//use window.scrollY
var scrollpos = window.scrollY;
var navbar = document.getElementById("navbar");

function add_class_on_scroll() {
    navbar.classList.add("small-navbar");
}

function remove_class_on_scroll() {
    navbar.classList.remove("small-navbar");
}

window.addEventListener('scroll', function(){ 
    //Here you forgot to update the value
    scrollpos = window.scrollY;

    if(scrollpos > 10){
        add_class_on_scroll();
    }
    else {
        remove_class_on_scroll();
    }
    console.log(scrollpos);
});



document.getElementById("year").innerHTML = new Date().getFullYear();