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
            proj.renderTask(task.name, formatDate(task.date), task.time, task.priority, task.notes, task.isActive, task.isCollapsed);

            //cache container for subtasks
            const checkboxContainerDOM = document.querySelectorAll("#sub-task-container")[i];
            //loop through each subtask
            for(let j = 0; j < task.subList.length; j++) {
                //select subtask
                let subTask = task.subList[j];
                //render subtask
                proj.renderSubTask(subTask.name, checkboxContainerDOM, subTask.isSubTaskActive, task.name);
            };
        };
    };

    //render today project in the main display
    const todayProject = (proj, container) => {
        //clean previous list
        container.innerHTML = "";
        //create and append container
        let projContainer = renderProject(container);
        projContainer.renderTodayProjectTitle(proj.name);

        //loop through each task of the project
        for(let i = 0; i < proj.taskList.length; i++) {
            //select each task
            let task = proj.taskList[i];
            //render tasks
            projContainer.renderTask(task.name, formatDate(task.date), task.time, task.priority, task.notes, task.isActive, task.isCollapsed);

            //cache container for subtasks
            const checkboxContainerDOM = document.querySelectorAll("#sub-task-container")[i];
            //loop through each subtask
            for(let j = 0; j < task.subList.length; j++) {
                //select subtask
                let subTask = task.subList[j];
                //render subtask
                projContainer.renderSubTask(subTask.name, checkboxContainerDOM, subTask.isSubTaskActive, task.name);
            };
        };
    };

    //render today project in the main display
    const trashProject = (proj, container) => {
        //clean previous list
        container.innerHTML = "";
        //create and append container
        let projContainer = renderProject(container);
        projContainer.renderTrashProjectTitle(proj.name);

        //loop through each task of the project
        for(let i = 0; i < proj.taskList.length; i++) {
            //select each task
            let task = proj.taskList[i];
            //render tasks
            projContainer.renderTrashTask(task.name, formatDate(task.date), task.time, false);
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
            projDisplay.style.gridColumn = "5 / -1";
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

    const sideValues = (today, week, trash) => {
        // ----- Today Section -------
        //today section value
        let todayValue = today.taskList.length;
        //cache DOM element
        const todayDOMValue = document.getElementById("sidebar-value-today");
        //update displayed value
        todayDOMValue.innerHTML = todayValue;

        // ----- Week Section -------
        let weekValue = week.taskList.length;
        //cache DOM element
        const weekDOMValue = document.getElementById("sidebar-value-week");
        //update displayed value
        weekDOMValue.innerHTML = weekValue;

        // ----- Trash Section -------
        let trashValue = trash.taskList.length;
        //cache DOM element
        const trashDOMValue = document.getElementById("sidebar-value-trash");
        //update displayed value
        trashDOMValue.innerHTML = trashValue;
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

    //format date to display
    const formatDate = date => {
        let formatted = format(date, "dd/MM/yyyy");
        return formatted;
    };

    return {
        renderPage,
        sideProjects,
        selectedProject,
        todayProject,
        trashProject,
        collapseSidebar,
        changeTheme,
        collapseSideProjects,
        sideValues
    };
};

export default display;