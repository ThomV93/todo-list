import navbar from "./navbar";
import sidebar from "./sidebar";
import projectContainer from "./projectContainer";

const display = () => {
    //cache main container DOM element
    const contentContainer_div = document.getElementById("content");
    //run default display modules
    navbar(contentContainer_div);
    sidebar(contentContainer_div);
    projectContainer(contentContainer_div);
};

export default display;