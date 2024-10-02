//imports
import HomePageLoad from "./HomePageLoad";
import MenuPageLoad from "./MenuPageLoad";
import AboutPageLoad from "./AboutPageLoad";

//global declarations
let contentContainer = document.querySelector("#content");

//factory
const displayController = (function() {
    // intial page load
    HomePageLoad(contentContainer);
    
    //=====DOM cache=====//
    const homeBtn = document.querySelector("#home-btn");
    const menuBtn = document.querySelector("#menu-btn");
    const aboutBtn = document.querySelector("#about-btn");
    
    // functions
    function clearPage() {
        contentContainer.innerHTML = "";
    }

    //=====event listeners=====//
    homeBtn.addEventListener("click", () => {
        clearPage();
        HomePageLoad(contentContainer);
    });
    
    menuBtn.addEventListener("click", () => {
        clearPage();
        MenuPageLoad(contentContainer);
    });
    
    aboutBtn.addEventListener("click", () => {
        clearPage();
        AboutPageLoad(contentContainer);
    });
})();
