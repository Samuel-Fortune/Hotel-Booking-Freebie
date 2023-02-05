document.addEventListener("DOMContentLoaded", function () {

    window.onresize = function () {
        location.reload();
    };
    var viewportWidth = document.documentElement.clientWidth;

    if (viewportWidth < 640) {
        // Apply styles for small screens

        //Apply this style to my menu
        document.getElementById("dropdown").classList.add("menu-normal");
        document.getElementById("dropdown").classList.remove("menu");
        //Apply styles to the nav-bg
        document.getElementById("nav-bg").classList.add("nav-bg-normal");
        document.getElementById("nav-bg").classList.remove("nav-bg");

        //Apply styles to the logo-search 
        document.getElementById("logo-search").classList.add("logo-search-normal");
        document.getElementById("logo-search").classList.remove("logo-search");

        //Apply styles to the best tour plan
        document.getElementById("best-tour-plan").classList.add("best-tour-plan-normal");
        document.getElementById("best-tour-plan").classList.remove("best-tour-plan");

        //Apply this style to my nav search input
        document.getElementById("nav-search-input").classList.add("search-input-normal");
        document.getElementById("nav-search-input").classList.remove("search-input");


        //Apply this style to my nav buttom list
        document.getElementById("nav-buttom-list-menu").classList.add("nav-buttom-list-normal");
        document.getElementById("nav-buttom-list-menu").classList.remove("nav-buttom-list");

        //Apply this style tomy slider
        document.getElementById("slider").classList.add("slider-normal");
        document.getElementById("slider").classList.remove("slider");

        //Apply this style to my package-menu
        document.getElementById("package-menu").classList.add("package-menu-normal");
        document.getElementById("package-menu").classList.remove("package-menu");

        //Apply this style to my package-offer
        document.getElementById("package-offer").classList.add("package-offer-normal");
        document.getElementById("package-offer").classList.remove("package-offer");

        //Apply this styles to my package-card-details
        document.getElementById("package-card-details").classList.add("package-card-details-normal");
        document.getElementById("package-card-details").classList.remove("package-card-details");



    } else if (viewportWidth >= 768 && viewportWidth < 992) {
        // Apply styles for medium screens

        //Apply this style to my nav-menu
        document.getElementById("dropdown").classList.remove("menu-normal");
        //Apply this style to my nav-bg
        document.getElementById("nav-bg").classList.remove("nav-bg-normal");

        //Apply this style to my logo-search
        document.getElementById("logo-search").classList.remove("logo-search-normal");

        //Apply this style to my best-tour-plan
        document.getElementById("best-tour-plan").classList.remove("best-tour-plan-normal");

        //Apply this style to my nav search input
        document.getElementById("nav-search-input").classList.remove("search-input-normal");

        //Apply this style to my nav buttom list
        document.getElementById("nav-buttom-list-menu").classList.remove("nav-buttom-list-normal");
        ducument.getElementById("nav-buttom-list-menu").classList.add("nav-buttom-list");

        //Apply this style to my slider
        document.getElementById("slider").classList.remove("slider-normal");

        //Apply this style to my package-menu
        document.getElementById("package-menu").classList.remove("package-menu-normal");

        //Apply this style to my package-offer
        document.getElementById("package-offer").classList.remove("package-offer-normal");

        //Apply this style to my package-card-details
        document.getElementById("package-card-details").classList.remove("package-card-details-normal");

    } else {
        // Apply styles for large screens
        console.log('not working');
    }




});