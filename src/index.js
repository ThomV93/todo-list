//import necessary modules
import navbar from "./navbar";
import sidebar from "./sidebar";
import projectContainer from "./projectContainer";
import project from "./projectFactory";
import renderSidebarProject from "./renderSidebarProject";
import renderProject from "./renderProject";

const todoApp = (() => {
    //render display
    const pageLoad = (() => {
        //cache main container DOM element
        const contentContainer_div = document.getElementById("content");
        //run default display modules
        navbar(contentContainer_div);
        sidebar(contentContainer_div);
        projectContainer(contentContainer_div);
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

    sideInvestingProj.sideProjectTitle("Investing");
    sideInvestingProj.sideTask("Buy the dip!");
    sideInvestingProj.sideTask("Tea Time");
    sideInvestingProj.sideTask("Diamond hands");

    sideCodingProj.sideProjectTitle("Coding");
    sideCodingProj.sideTask("Study");
    sideCodingProj.sideTask("Chill");
    sideCodingProj.sideTask("Study");


    const projectDisplayContainer_div = document.getElementById("project-display-container");

    let investingProj = renderProject(projectDisplayContainer_div);
    let codingProj = renderProject(projectDisplayContainer_div);

    investingProj.projectTitle("Investing");
    investingProj.task("Buy the dip!", "29/08/2021", "15:00h");
    investingProj.task("Tea time", "29/08/2021", "17:00h");
    investingProj.task("Diamond Hands", "29/08/2021", "18:00h");

    codingProj.projectTitle("Coding");
    codingProj.task("Study", "29/08/2021", "19:00h");
    codingProj.task("Chill", "29/08/2021", "20:00h");
    codingProj.task("Study", "29/08/2021", "20:15h");
})();