import renderNavbar from "./renderNavbar";
import renderSidebar from "./renderSidebar";
import renderProjectContainer from "./renderProjectContainer";
import renderSidebarProject from "./renderSidebarProject";
import renderProject from "./renderProject";

const display = () => {

    //render default display
    const renderPage = () => {
        //cache main container DOM element
        const contentContainer_div = document.getElementById("content");
        //run default display modules
        renderNavbar(contentContainer_div);
        renderSidebar(contentContainer_div);
        renderProjectContainer(contentContainer_div);
    };

    //render side projects display
    const sideProjects = (arr, container) => {
        //clean previous list
        container.innerHTML = "";
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
                sideBarProj.renderSideTask(task.name, task.isActive);
            };
        };
    };

    //render single project in the main display
    const selectedProject = (arrPos, container) => {
        //clean previous list
        container.innerHTML = "";
        //create and append container
        let proj = renderProject(container);
        proj.renderProjectTitle(arrPos.name);

        //loop through each task of the project
        for(let i = 0; i < arrPos.taskList.length; i++) {
            //select each task
            let task = arrPos.taskList[i];
            //render tasks
            proj.renderTask(task.name, task.date, task.time, task.priority, task.isActive);
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
                mainProj.renderTask(task.name, task.date, task.time, task.priority, task.isActive);
            };
        };
    };

    //hide or display sidebar
    const collapseSidebar = (sidebar, projDisplay, bool) => {
        if (bool === false) {
            //hide sidebar
            sidebar.style.display = "none";
            //center projects and tasks
            projDisplay.style.gridColumn = "1 / -1";
        } else {
            sidebar.style.display = "grid";
            projDisplay.style.gridColumn = "4 / -1";
        };
    };

    //hide or display the projects and tasks displayed in the sidebar
    const collapseSideProjects = (chevron, container, bool) => {
        if (bool === false) {
            chevron.style.transform = "rotate(0deg)";
            container.style.display = "none";
        } else {
            chevron.style.transform = "rotate(90deg)";
            container.style.display = "grid";
        };
    };

    //visually expand task
    const expandTask = (notes, checkbox, idx) => {
        if(notes[idx].style.display === "none") {
            notes[idx].style.display = "block";
            checkbox[idx].style.display = "block";
        } else {
            notes[idx].style.display = "none";
            checkbox[idx].style.display = "none";
        };
    };

    return {
        renderPage,
        sideProjects,
        selectedProject,
        renderAll,
        collapseSidebar,
        collapseSideProjects,
        expandTask
    };
};

export default display;