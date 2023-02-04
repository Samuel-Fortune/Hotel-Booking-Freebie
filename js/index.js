document.addEventListener("DOMContentLoaded", function () {




    var viewportWidth = document.documentElement.clientWidth;

    if (viewportWidth < 640) {
        // Apply styles for small screens
        document.getElementById("dropdown").classList.add("menu-normal");
        document.getElementById("dropdown").classList.remove("menu");
    } else if (viewportWidth >= 768 && viewportWidth < 992) {
        // Apply styles for medium screens
        document.getElementById("dropdown").classList.add("menu-large");
        document.getElementById("dropdown").classList.remove("menu");

    } else {
        // Apply styles for large screens
        console.log('not working');
    }


});