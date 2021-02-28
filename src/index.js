//import necessary modules
import navbar from "./navbar";
import sidebar from "./sidebar";
import projectContainer from "./projectContainer";
import renderSidebarProject from "./renderSidebarProject";
import project from "./projectFactory";

const todoApp = (() => {
    //render display
    const pageLoad = (() => {
        //cache main container DOM element
        const contentContainer_div = document.getElementById("content");
        //run default display modules
        navbar(contentContainer_div);
        sidebar(contentContainer_div);
        //projectContainer(contentContainer_div);
    })();

    let investing = project("investing");

    let task1 = investing.task("tea", "15h", "08/21");
    let task2 = investing.task("dinner", "18h", "08/21");
    investing.addTask(task1);
    investing.addTask(task2);
    console.log(investing.taskList);

    const sidebarProjectContainer_div = document.getElementById("sidebar-projects-section");

    let sideInvestingProj = renderSidebarProject(sidebarProjectContainer_div);
    let sideCodingProj = renderSidebarProject(sidebarProjectContainer_div);

    sideInvestingProj.projectTitle("Investing");
    sideInvestingProj.sideTask("Buy the dip!");
    sideInvestingProj.sideTask("Tea Time");
    sideInvestingProj.sideTask("Diamond hands");

    sideCodingProj.projectTitle("Coding");
    sideCodingProj.sideTask("Study");
    sideCodingProj.sideTask("Chill");
    sideCodingProj.sideTask("Study");
})();