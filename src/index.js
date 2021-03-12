//import necessary modules
import display from "./display";
import project from "./projectFactory";
import taskEditor from "./taskEditor";

const todoApp = (() => {

    //render basic page layout
    display().loadPage();

    //cache DOM elements
    const sidebarProjectContainer_div = document.getElementById("sidebar-projects-section");
    const projectDisplayContainer_div = document.getElementById("project-display-container");
    const sidebarProjectTitle_div = document.getElementsByClassName("sidebar-project-title");
    const sidebarTitleAll_h2 = document.getElementById("sidebar-title-all");


    // --------- DEMO Projects and Tasks -----------

    //project objects array
    let projectsArray = [];

    let work = project("Work");

    let workTask1 = work.task("Check Emails", "09:00h", "29/08/2021", "high");
    let workTask2 = work.task("Send Emails", "10:30h", "29/08/2021", "regular");
    let workTask3 = work.task("Create reports", "14:00h", "29/08/2021", "high");
    let workTask4 = work.task("Open Tickets", "16:00h", "29/08/2021", "regular");
    work.addTask(workTask1);
    work.addTask(workTask2);
    work.addTask(workTask3);
    work.addTask(workTask4);

    projectsArray.push(work);


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

    // ----------- General ------------

    const updateDisplay = (arr, proj, projContainer, sideContainer) => {
        //display the updated project
        display().selectedProject(proj, projContainer);
        //display the updated sidebar project and task list
        display().sideProjects(arr, sideContainer);
        //add back the sidebar projet's click event
        sideProjectTitleEvent();
        //add back the task creator click event
        taskCreatorEvent(proj);
        //add back the delete task event
        deleteTaskEvent(proj);
    };


    // -------- Sidebar Events Section -----------

    //click event to display all existing projects
    const displayAllEvent = () => {
        //select sidebar All title
        sidebarTitleAll_h2.addEventListener("click", () => {
            display().allProjects(projectsArray, projectDisplayContainer_div);
            taskCreatorEvent();
        });
    };

    //click event to display selected project
    const sideProjectTitleEvent = () => {
        //html collection to array
        let array = Array.from(sidebarProjectTitle_div);
        //loop through each element
        for(let i = 0; i < array.length; i++) {
            //add event listener to each element
            array[i].addEventListener("click", () => {
                display().selectedProject(projectsArray[i], projectDisplayContainer_div);
                taskCreatorEvent(projectsArray[i]);
                deleteTaskEvent(projectsArray[i]);
            });
        };
    };


    // ---------- Task Creator ---------------


    //click event for the task creator button
    const taskCreatorEvent = (selectedProj) => {
        //select all task creators displayed
        const taskCreator_div = document.querySelectorAll("[data-creator]");

        for(let i = 0; i < taskCreator_div.length; i ++) {
            taskCreator_div[i].addEventListener("click", () => {
                taskEditor(document.body);
                taskCreatorSaveBtn(selectedProj);
                taskCreatorCancelBtn();
            });
        };
    };

    //task creator form logic
    const taskCreator = (proj) => {
        //select each input element
        const editorName = document.getElementById("editor-name");
        const editorTime = document.getElementById("editor-time");
        const editorDate = document.getElementById("editor-date");

        //store user input
        let taskName = editorName.value;
        let taskTime = editorTime.value;
        let taskDate = editorDate.value;

        //create new task
        let newTask = proj.task(taskName, taskTime, taskDate, "high");
        //add task to the project
        proj.addTask(newTask);
    };

    //task creator/ editor cancel button event
    const taskCreatorCancelBtn = () => {
        const cancelBtn = document.getElementById("editor-cancel-btn");

        cancelBtn.addEventListener("click", () => {
            document.body.removeChild(document.body.firstChild);
        });
    };

    //task creator/ editor save button event
    const taskCreatorSaveBtn = (selectedProj) => {
        const saveBtn = document.getElementById("editor-save-btn");

        saveBtn.addEventListener("click", () => {
            taskCreator(selectedProj);
            //update display and reintroduce necessary event listeners
            updateDisplay(projectsArray, selectedProj, projectDisplayContainer_div, sidebarProjectContainer_div);
            //stop displaying the form
            document.body.removeChild(document.body.firstChild);
        });
    };


    // ----------- Tasks Section -------------

    const deleteTaskEvent = (selectedProj) => {
        //cache all displayed
        const taskTrashIcon = document.getElementsByClassName("task-trash-icon");

        for(let i = 0; i < taskTrashIcon.length; i++) {
            taskTrashIcon[i].addEventListener("click", () => {
                selectedProj.deleteTask(i);
                updateDisplay(projectsArray, selectedProj, projectDisplayContainer_div, sidebarProjectContainer_div);
            });
        };
    };



    display().sideProjects(projectsArray, sidebarProjectContainer_div);
    sideProjectTitleEvent();
    displayAllEvent();


    // -------- To be done -------

    // tasks can be edited
    // tasks can be expanded
    // create add project form and functionalities
    // collapsable sidebar project list
    // extend sidebar projects title and icon hover effects to parent hover
    // date and time format library
    // properly formated dates and times
    // searchbar
    // night mode
    // trash section and functionalities
    // home section displays tasks due to today
    // display each section's value
    // sidebar can be collapsed
    // media queries for mobile
    // create local storage

})();