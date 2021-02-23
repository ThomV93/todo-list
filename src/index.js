//import necessary modules
import navbar from "./navbar";

const todoApp = (() => {
    //cache DOM elements
    const contentContainer_div = document.getElementById("content");

    //initializer function
    const pageLoad = () => {
        //navbar function
        navbar(contentContainer_div);
    };

    pageLoad();
})();