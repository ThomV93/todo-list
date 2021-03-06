//import necessary modules
import navbar from "./navbar";
import sidebar from "./sidebar";
import projectContainer from "./projectContainer";
import project from "./projectFactory";
import renderSidebarProject from "./renderSidebarProject";
import renderProject from "./renderProject";

const todoApp = (() => {

    //render basic display
    const pageLoad = (() => {
        //cache main container DOM element
        const contentContainer_div = document.getElementById("content");
        //run default display modules
        navbar(contentContainer_div);
        sidebar(contentContainer_div);
        projectContainer(contentContainer_div);
    })();


    //cache DOM elements
    const sidebarProjectContainer_div = document.getElementById("sidebar-projects-section");
    const projectDisplayContainer_div = document.getElementById("project-display-container");

    //project objects array
    let projectsArray = [];

    let investing = project("Investing");

    let investingTask1 = investing.task("Tea Time", "15:00h", "29/08/2021");
    let investingTask2 = investing.task("Dinner", "18:00h", "29/08/2021");
    investing.addTask(investingTask1);
    investing.addTask(investingTask2);

    projectsArray.push(investing);

    let coding = project("Coding");

    let codingTask1 = coding.task("Study", "19:00h", "29/08/2021");
    let codingTask2 = coding.task("Study MORE", "20:30h", "29/08/2021");
    let codingTask3 = coding.task("Stretch back", "22:00h", "29/08/2021");
    coding.addTask(codingTask1);
    coding.addTask(codingTask2);
    coding.addTask(codingTask3);

    projectsArray.push(coding);

    //render all projects and tasks
    const renderDisplay = () => {
        //loop through project objects array
        for (let i = 0; i < projectsArray.length; i++) {
            //create and append necessary containers
            let sideBarProj = renderSidebarProject(sidebarProjectContainer_div);
            let mainProj = renderProject(projectDisplayContainer_div);
            //render project's title and task creator
            sideBarProj.renderSideProjectTitle(projectsArray[i].name);
            mainProj.renderProjectTitle(projectsArray[i].name);

            //loop through each task of the selected project
            for (let j = 0; j < projectsArray[i].taskList.length; j++) {
                //select each task
                let task = projectsArray[i].taskList[j];
                //render tasks
                sideBarProj.renderSideTask(task.name);
                mainProj.renderTask(task.name, task.date, task.time);
            };
        };
    };


    renderDisplay();

})();