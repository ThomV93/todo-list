import renderNavbar from "./renderNavbar";
import renderSidebar from "./renderSidebar";
import renderProjectContainer from "./renderProjectContainer";
import renderSidebarProject from "./renderSidebarProject";
import renderProject from "./renderProject";
import {format} from 'date-fns';

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
            proj.renderTask(task.name, formatDate(task.date), task.time, task.priority, task.isActive);
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
            sidebar.style.transform = "translateX(-450px)";
            //center projects and tasks
            projDisplay.style.gridColumn = "1 / -1";
        } else {
            sidebar.style.transform = "translateX(0)";
            projDisplay.style.gridColumn = "4 / -1";
        };
    };

    const changeTheme = (icon, bool) => {
        if (bool === false) {
            icon.src = "icons/moon.svg";
            document.documentElement.dataset.theme = "dark"
        } else {
            icon.src = "icons/sun.svg";
            document.documentElement.dataset.theme = "light"
        };
    };

    //hide or display the projects and tasks displayed in the sidebar
    const collapseSideProjects = (chevron, container, bool) => {
        if (bool === false) {
            chevron.style.transform = "rotate(0deg)";
            container.style.visibility = "hidden";
            container.style.opacity = "0";
            container.style.transition = "visibility 0s linear 400ms, opacity 400ms";
        } else {
            chevron.style.transform = "rotate(90deg)";
            container.style.visibility = "visible";
            container.style.opacity = "1";
            container.style.transition = "visibility 0s linear 0s, opacity 400ms";
        };
    };

    const renderNotes = (selectedProj, notes, idx) => {
        //display notes stored in the object
        notes[idx].innerHTML = selectedProj.taskList[idx].notes;
    };

    //visually expand task
    const expandTask = (notesContainer, checkContainer, idx) => {
        if(notesContainer[idx].style.position === "absolute") {
            //apply on notes container
            notesContainer[idx].style.position = "static";
            notesContainer[idx].style.visibility = "visible";
            //apply on checkbox container
            checkContainer[idx].style.position = "static";
            checkContainer[idx].style.visibility = "visible";
        } else {
            //apply on notes container
            notesContainer[idx].style.visibility = "hidden";
            notesContainer[idx].style.position = "absolute";
            //apply on checkbox container
            checkContainer[idx].style.visibility = "hidden";
            checkContainer[idx].style.position = "absolute";
        };
    };

    //format date to display
    const formatDate = date => {
        let formatted = format(date, "dd/MM/yyyy");
        return formatted;
    };

    return {
        renderPage,
        sideProjects,
        selectedProject,
        renderAll,
        collapseSidebar,
        changeTheme,
        collapseSideProjects,
        renderNotes,
        expandTask
    };
};

export default display;