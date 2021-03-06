//import necessary modules
import display from "./display";
import project from "./projectFactory";
import renderSidebarProject from "./renderSidebarProject";
import renderProject from "./renderProject";

const todoApp = (() => {

    const pageLoad = (() => {
        //render basic display
        display();
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

    let codingTask1 = coding.task("Study", "19:00h", "29/08/2021", "regular");
    let codingTask2 = coding.task("Study MORE", "20:30h", "29/08/2021", "high");
    let codingTask3 = coding.task("Stretch back", "22:00h", "29/08/2021", "regular");
    coding.addTask(codingTask1);
    coding.addTask(codingTask2);
    coding.addTask(codingTask3);

    projectsArray.push(coding);


    const displaySideProjects = () => {
        //loop through project objects array
        for(let i = 0; i < projectsArray.length; i++) {
            //create and append necessary containers
            let sideBarProj = renderSidebarProject(sidebarProjectContainer_div);
            //render project's titles
            sideBarProj.renderSideProjectTitle(projectsArray[i].name);

            //loop through each task of the selected project
            for(let j = 0; j < projectsArray[i].taskList.length; j++) {
                //select each task
                let task = projectsArray[i].taskList[j];
                //render tasks
                sideBarProj.renderSideTask(task.name);
            };
        };
    };

    displaySideProjects();

    
    //render single project in the main display
    const displayProject = (name) => {
        //create and append container
        let proj = renderProject(projectDisplayContainer_div);
        proj.renderProjectTitle(name);

        //loop through each task of the project
        for(let i = 0; i < projectsArray[1].taskList.length; i++) {
            //select each task
            let task = projectsArray[1].taskList[i];
            //render tasks
            proj.renderTask(task.name, task.date, task.time, task.priority);
        };
    };

    displayProject("Coding");


    //render all projects and tasks
    const renderAll = () => {
        //loop through project objects array
        for(let i = 0; i < projectsArray.length; i++) {
            //create and append necessary containers
            let sideBarProj = renderSidebarProject(sidebarProjectContainer_div);
            let mainProj = renderProject(projectDisplayContainer_div);
            //render project's titles and task creators
            sideBarProj.renderSideProjectTitle(projectsArray[i].name);
            mainProj.renderProjectTitle(projectsArray[i].name);

            //loop through each task of the selected project
            for(let j = 0; j < projectsArray[i].taskList.length; j++) {
                //select each task
                let task = projectsArray[i].taskList[j];
                //render tasks
                sideBarProj.renderSideTask(task.name);
                mainProj.renderTask(task.name, task.date, task.time);
            };
        };
    };


    //renderAll();

})();