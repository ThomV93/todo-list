import navbar from "./navbar";
import sidebar from "./sidebar";
import projectContainer from "./projectContainer";
import renderSidebarProject from "./renderSidebarProject";
import renderProject from "./renderProject";

const display = () => {

    //render default display
    const loadPage = () => {
        //cache main container DOM element
        const contentContainer_div = document.getElementById("content");
        //run default display modules
        navbar(contentContainer_div);
        sidebar(contentContainer_div);
        projectContainer(contentContainer_div);
    };

    //render side projects display
    const sideProjects = (arr, container) => {
        //loop through objects array
        for(let i = 0; i < arr.length; i++) {
            //create and append necessary containers
            let sideBarProj = renderSidebarProject(container);
            //render project's titles
            sideBarProj.renderSideProjectTitle(arr[i].name);

            //loop through each task of the selected project
            for(let j = 0; j < arr[i].taskList.length; j++) {
                //select each task
                let task = arr[i].taskList[j];
                //render tasks
                sideBarProj.renderSideTask(task.name);
            };
        };
    };

    //render single project in the main display
    const selectedProject = (idx, arr, container) => {
        //clean previous list
        container.innerHTML = "";
        //create and append container
        let proj = renderProject(container);
        proj.renderProjectTitle(arr[idx].name);

        //loop through each task of the project
        for(let i = 0; i < arr[idx].taskList.length; i++) {
            //select each task
            let task = arr[idx].taskList[i];
            //render tasks
            proj.renderTask(task.name, task.date, task.time, task.priority);
        };
    };

    //render all projects
    const allProjects = (arr, container) => {
        //clean previous list
        container.innerHTML = "";
        //loop through objects array
        for(let i = 0; i < arr.length; i++) {
            //create and append necessary containers
            let mainProj = renderProject(container);
            //render project's titles and task creators
            mainProj.renderProjectTitle(arr[i].name);

            //loop through each task of the selected project
            for(let j = 0; j < arr[i].taskList.length; j++) {
                //select each task
                let task = arr[i].taskList[j];
                //render tasks
                mainProj.renderTask(task.name, task.date, task.time, task.priority);
            };
        };
    };

    //render all projects and sideprojects
    const renderAll = (arr, sideContainer, container) => {
        //loop through objects array
        for(let i = 0; i < arr.length; i++) {
            //create and append necessary containers
            let sideBarProj = renderSidebarProject(sideContainer);
            let mainProj = renderProject(container);
            //render project's titles and task creators
            sideBarProj.renderSideProjectTitle(arr[i].name);
            mainProj.renderProjectTitle(arr[i].name);

            //loop through each task of the selected project
            for(let j = 0; j < arr[i].taskList.length; j++) {
                //select each task
                let task = arr[i].taskList[j];
                //render tasks
                sideBarProj.renderSideTask(task.name);
                mainProj.renderTask(task.name, task.date, task.time, task.priority);
            };
        };
    };

    return {
        loadPage,
        sideProjects,
        selectedProject,
        allProjects,
        renderAll
    };
};

export default display;