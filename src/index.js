//import necessary modules
import display from "./display";
import project from "./projectFactory";
import renderTaskEditor from "./renderTaskEditor";
import renderProjectEditor from "./renderProjectEditor";
import {format} from 'date-fns';

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

    let workTask1 = work.task("Check Emails", "09:00", "29/08/2021", "high");
    let workTask2 = work.task("Send Emails", "10:30", "29/08/2021", "regular");
    let workTask3 = work.task("Create reports", "14:00", "29/08/2021", "high");
    let workTask4 = work.task("Open Tickets", "16:00", "29/08/2021", "regular");
    work.addTask(workTask1);
    work.addTask(workTask2);
    work.addTask(workTask3);
    work.addTask(workTask4);

    projectsArray.push(work);


    let investing = project("Investing");

    let investingTask1 = investing.task("Tea Time", "15:00", "29/08/2021");
    let investingTask2 = investing.task("Dinner", "18:00", "29/08/2021");
    investing.addTask(investingTask1);
    investing.addTask(investingTask2);

    projectsArray.push(investing);


    let coding = project("Coding");

    let codingTask1 = coding.task("Study", "19:00", "29/08/2021", "regular");
    let codingTask2 = coding.task("Study MORE", "20:30", "29/08/2021", "high");
    let codingTask3 = coding.task("Stretch back", "22:00", "29/08/2021", "regular");
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
        //add back the edit task event
        editTaskEvent(proj);
        //add back the delete task event
        deleteTaskEvent(proj);
        //add back the expand task event
        expandTaskEvent();
        //cross off task
        crossTaskEvent();
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
        for(let i = 0; i < sidebarProjectTitle_div.length; i++) {
            //add event listener to each element
            sidebarProjectTitle_div[i].addEventListener("click", () => {
                display().selectedProject(projectsArray[i], projectDisplayContainer_div);
                taskCreatorEvent(projectsArray[i]);
                editTaskEvent(projectsArray[i]);
                deleteTaskEvent(projectsArray[i]);
                expandTaskEvent();
                crossTaskEvent(projectsArray[i]);
            });
        };
    };


    // ---------- Project Creator ------------

    
    const projectCreatorEvent = () => {
        //cache sidebar plus icon
        const sidebarPlusIcon = document.getElementById("sidebar-section-plus-icon");

        sidebarPlusIcon.addEventListener("click", () => {
            renderProjectEditor(document.body);
            projectCreatorCancelBtn();
            projectCreatorSaveBtn();
        });
    };

    //project creator form logic
    const projectCreator = () => {
        //select input element
        const editorName = document.getElementById("editor-name");
        //store user input
        let projectName = editorName.value;

        //create new project
        let newProject = project(projectName)
        //add project to array
        projectsArray.push(newProject);
    };

    //task creator/ editor cancel button event
    const projectCreatorCancelBtn = () => {
        //cache DOM element
        const projectCancelBtn = document.getElementById("project-editor-cancel-btn");

        projectCancelBtn.addEventListener("click", () => {
            document.body.removeChild(document.body.firstChild);
        });
    };

    //task creator/ editor save button event
    const projectCreatorSaveBtn = () => {
        //cache DOM element
        const projectSaveBtn = document.getElementById("project-editor-save-btn");

        projectSaveBtn.addEventListener("click", () => {
            projectCreator();
            //update display and reintroduce necessary event listeners
            updateDisplay(projectsArray, projectsArray[projectsArray.length - 1], projectDisplayContainer_div, sidebarProjectContainer_div);
            //stop displaying the form
            document.body.removeChild(document.body.firstChild);
        });
    };


    // ---------- Task Creator ---------------


    //click event for the task creator button
    const taskCreatorEvent = (selectedProj) => {
        //select all task creators displayed
        const taskCreator_div = document.querySelectorAll("[data-creator]");

        for(let i = 0; i < taskCreator_div.length; i ++) {
            taskCreator_div[i].addEventListener("click", () => {
                renderTaskEditor(document.body);
                taskCreatorSaveBtn(selectedProj);
                taskCreatorCancelBtn();
            });
        };
    };

    //format date to display
    const formatDate = (date) => {
        let dateObj = new Date(date);
        let formatted = format(dateObj, "dd/MM/yyyy");

        return formatted;
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
        let taskDate = formatDate(editorDate.value);

        //create new task
        let newTask = proj.task(taskName, taskTime, taskDate, "high");
        //add task to the project
        proj.addTask(newTask);
    };

    //task creator/ editor cancel button event
    const taskCreatorCancelBtn = () => {
        //cache DOM element
        const cancelBtn = document.getElementById("editor-cancel-btn");

        cancelBtn.addEventListener("click", () => {
            document.body.removeChild(document.body.firstChild);
        });
    };

    //task creator/ editor save button event
    const taskCreatorSaveBtn = (selectedProj) => {
        //cache DOM element
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

    const crossTaskEvent = (selectedProj) => {
        //cache task input element
        const taskInput = document.getElementsByClassName("task-checkbox-input");

        for(let i = 0; i < taskInput.length; i++) {
            taskInput[i].addEventListener("click", () => {
                crossTask(selectedProj, i);
            });
        };
    };

    const crossTask = (selectedProj, idx) => {
        //cache DOM elements
        const taskTime = document.getElementsByClassName("task-time");
        const taskName = document.getElementsByClassName("task-name");
        const taskDate = document.getElementsByClassName("task-date");
        const taskFlag = document.getElementsByClassName("task-flag");

        if(selectedProj.taskList[idx].isActive === false) {
            selectedProj.taskList[idx].isActive = true;
            taskTime[idx].style.textDecoration = "line-through";
            taskName[idx].style.textDecoration = "line-through";
            taskDate[idx].style.textDecoration = "line-through";
        } else {
            selectedProj.taskList[idx].isActive = false;
            taskTime[idx].style.textDecoration = "";
            taskName[idx].style.textDecoration = "";
            taskDate[idx].style.textDecoration = "";
        }
    };

    const editTaskEvent = (selectedProj) => {
        //cache all displayed
        const taskEditIcon = document.getElementsByClassName("task-edit-icon");

        for(let i = 0; i < taskEditIcon.length; i++) {
            taskEditIcon[i].addEventListener("click", () => {
                renderTaskEditor(document.body);
                renderTaskEditorValues(selectedProj, i);
                taskCreatorCancelBtn();
                taskEditorSaveBtn(selectedProj, i);
            });
        };
    };

    //render current values when the editor is displayed
    const renderTaskEditorValues = (proj, idx) => {
        //cache task editor title
        const editorTitle = document.getElementById("editor-title");
        //cache each input element
        const editorName = document.getElementById("editor-name");
        const editorTime = document.getElementById("editor-time");
        const editorDate = document.getElementById("editor-date");

        //alter form's title
        editorTitle.innerHTML = "Edit Task";

        //render values stored in the object
        editorName.value = proj.taskList[idx].name;
        editorTime.value = proj.taskList[idx].time;
        editorDate.value = proj.taskList[idx].date.split("/").reverse().join("-");
    };

    const taskEditor = (proj, idx) => {
        //select each input element
        const editorName = document.getElementById("editor-name");
        const editorTime = document.getElementById("editor-time");
        const editorDate = document.getElementById("editor-date");

        proj.taskList[idx].name = editorName.value;
        proj.taskList[idx].time = editorTime.value;
        proj.taskList[idx].date = formatDate(editorDate.value);
    };

    //task creator/ editor save button event
    const taskEditorSaveBtn = (selectedProj, idx) => {
        //cache DOM element
        const saveBtn = document.getElementById("editor-save-btn");

        saveBtn.addEventListener("click", () => {
            taskEditor(selectedProj, idx);
            //update display and reintroduce necessary event listeners
            updateDisplay(projectsArray, selectedProj, projectDisplayContainer_div, sidebarProjectContainer_div);
            //stop displaying the form
            document.body.removeChild(document.body.firstChild);
        });
    };


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

    //task expander logic
    const expandTask = (notes, checkbox, idx) => {
        if(notes[idx].style.display === "none") {
            notes[idx].style.display = "block";
            checkbox[idx].style.display = "block";
        } else {
            notes[idx].style.display = "none";
            checkbox[idx].style.display = "none";
        };
    };

    const expandTaskEvent = () => {
        //cache all displayed
        const taskName = document.getElementsByClassName("task-name");
        const taskNotes = document.querySelectorAll("[data-notes]");
        const taskCheckbox = document.querySelectorAll("[data-checkbox]");

        for(let i = 0; i < taskName.length; i++) {
            taskName[i].addEventListener("click", () => {
                expandTask(taskNotes, taskCheckbox, i);
            });
        };
    };



    display().sideProjects(projectsArray, sidebarProjectContainer_div);
    sideProjectTitleEvent();
    displayAllEvent();
    projectCreatorEvent();


    // -------- To be done -------

    // can choose and alter task priority
    // collapsable sidebar project list
    // extend sidebar projects title and icon hover effects to parent hover
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