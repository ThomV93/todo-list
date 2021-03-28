//import necessary modules
import display from "./display";
import project from "./projectFactory";
import renderTaskForm from "./renderTaskForm";
import renderProjectForm from "./renderProjectForm";
import {format} from 'date-fns';

const todoApp = (() => {

    //render basic page layout
    display().renderPage();
    //project objects array
    let projectsArray = [];
    //today project object
    let todayProj = project("Today");

    //cache DOM elements
    const sunIcon_img = document.getElementById("sun-icon");
    const listIcon_img = document.getElementById("list-icon");
    const sidebar = document.getElementById("sidebar");
    const sidebarTodayTitle = document.getElementById("sidebar-title-today");
    const sideProjectMainTitle = document.getElementById("sidebar-projects-section-title");
    const sideProjectChevron = document.getElementById("sidebar-section-chevron-icon");
    const sidebarPlusIcon = document.getElementById("sidebar-section-plus-icon");
    const sidebarProjectContainer_div = document.getElementById("sidebar-projects-section");
    const sidebarProjectTitleContainer_div = document.getElementsByClassName("sidebar-project-title-container");
    const projectDisplayContainer_div = document.getElementById("project-display-container");


    // --------- DEMO Projects and Tasks -----------


    let work = project("Work");

    let workTask1 = work.task("Check Emails", "09:00", "27/03/2021", "high");
    let workTask2 = work.task("Send Emails", "10:30", "21/01/2021", "regular");
    let workTask3 = work.task("Create reports", "14:00", "27/03/2021", "high");
    let workTask4 = work.task("Open Tickets", "16:00", "13/04/2021", "regular");
    workTask2.notes = "Hello Notes";
    work.addTask(workTask1);
    work.addTask(workTask2);
    work.addTask(workTask3);
    work.addTask(workTask4);

    projectsArray.push(work);


    let investing = project("Investing");

    let investingTask1 = investing.task("Tea Time", "15:00", "29/08/2021");
    let investingTask2 = investing.task("Dinner", "18:00", "27/03/2021");
    let investingTask3 = investing.task("Test", "18:00", "27/03/2021");
    investing.addTask(investingTask1);
    investing.addTask(investingTask2);
    investing.addTask(investingTask3);

    projectsArray.push(investing);


    let coding = project("Coding");

    let codingTask1 = coding.task("Study", "19:00", "29/08/2021", "regular");
    let codingTask2 = coding.task("Study MORE", "20:30", "27/03/2021", "high");
    let codingTask3 = coding.task("Stretch back", "22:00", "29/08/2021", "regular");
    coding.addTask(codingTask1);
    coding.addTask(codingTask2);
    coding.addTask(codingTask3);

    projectsArray.push(coding);


    // -------------------- projectsArray Aux Functions ---------------------


    //retrieve task obejct from any project by name
    const getTaskObj = name => {
        for(let i = 0; i < projectsArray.length; i++) {
            if (projectsArray[i].findTask(name) !== undefined) {
                return projectsArray[i].findTask(name);
            };
        };
    };

    //get project index by name
    const getParentIdx = name => {
        return projectsArray.findIndex(proj => proj.name === name);
    };

    //find tasks with today's date and push to today project object
    const checkForToday = arr => {
        //get today's date
        let today = format(new Date(), "yyyy/MM/dd");
        //loop through projects array
        for(let i = 0; i < arr.length; i++) {
            let project = arr[i];
            //loop through each task
            for(let j = 0; j < project.taskList.length; j++) {
                let task = project.taskList[j];
                //format task date to match today's date
                let formattedDate = format(task.date, "yyyy/MM/dd");
                //if task is due today, add to today project object
                if(formattedDate === today) {
                    let todayTask = task;
                    todayProj.addTask(todayTask);
                };

            };
        };
    };


    // ---------------- Navbar Events Section ----------------


    const collapseSidebarEvent = () => {
        //toggle boolean
        let toggle = false;
        //click event to run function and invert toggle
        listIcon_img.addEventListener("click", () => {
            display().collapseSidebar(sidebar, projectDisplayContainer_div, toggle);
            toggle = !toggle;
        });
    };

    const changeThemeEvent = () => {
        //toggle boolean
        let toggle = false;
        //click event to run function and invert toggle
        sunIcon_img.addEventListener("click", () => {
            display().changeTheme(sunIcon_img, toggle);
            toggle = !toggle;
        });
    };


    // --------------- Sidebar Events Section ------------------


    //hide or display the projects and tasks displayed in the sidebar
    const collapseSideProjectsEvent = () => {
        //toggle boolean
        let toggle = false;
        //click event to run function and invert toggle
        sideProjectMainTitle.addEventListener("click", () => {
            display().collapseSideProjects(sideProjectChevron, sidebarProjectContainer_div, toggle);
            toggle = !toggle;
        });
    };

    const todaySectionEvent = () => {
        sidebarTodayTitle.addEventListener("click", () => {
            updateDisplay(projectsArray, todayProj, projectDisplayContainer_div, sidebarProjectContainer_div);
        });
    };

    //click event to display selected project
    const sideProjectTitleEvent = () => {
        for (let i = 0; i < sidebarProjectTitleContainer_div.length; i++) {
            //add event listener to each element
            sidebarProjectTitleContainer_div[i].addEventListener("click", () => {
                display().selectedProject(projectsArray[i], projectDisplayContainer_div);
                sortProjectDatesEvent(projectsArray[i]);
                editProjectEvent(projectsArray[i]);
                taskCreatorEvent(projectsArray[i]);
                editTaskEvent(projectsArray[i]);
                deleteTaskEvent(projectsArray[i]);
                expandTaskEvent(projectsArray[i]);
                crossTaskEvent(projectsArray[i]);
            });
        };
    };

    //click event to cross sidebar task
    const crossSideTaskEvent = () => {
        //cache input element
        const sideTaskInput = document.getElementsByClassName("sidebar-task-input");
        //HTML collection to array
        const sideTaskArray = Array.from(sideTaskInput);
        //loop through each element of the array
        for(let i = 0; i < sideTaskArray.length; i++) {
            sideTaskArray[i].addEventListener("click", () => {
                //get task based on the name of the DOM element
                let selectedTask = getTaskObj(sideTaskArray[i].name);
                //get index of parent to update display accordingly
                let projIdx = getParentIdx(selectedTask.parentName);
                //toggle task status
                projectsArray[projIdx].toggleTaskStatus(selectedTask);
    
                updateDisplay(projectsArray, projectsArray[projIdx], projectDisplayContainer_div, sidebarProjectContainer_div);
            });
        };
    };


    // --------------- Projects Events Section ----------------


    //order task dates on click
    const sortProjectDatesEvent = selectedProj => {
        //cache DOM elements
        const projectDateFilter = document.getElementById("project-date-container");
        //add click event to element
        projectDateFilter.addEventListener("click", () => {
            selectedProj.sortDates();
            updateDisplay(projectsArray, selectedProj, projectDisplayContainer_div, sidebarProjectContainer_div);
        });
    };

    const editProjectEvent = selectedProj => {
        //cache DOM element
        const projEditIcon = document.getElementById("proj-edit-icon");
        //add click event to element
        projEditIcon.addEventListener("click", () => {
            renderProjectForm(document.body);
            renderProjectEditorValues(selectedProj);
            projectCreatorCancelBtnEvent();
            projectEditorSaveBtnEvent(selectedProj);
        });
    };


    // --------------- Tasks Events Section -------------------


    //cross inactive tasks
    const crossTaskEvent = selectedProj => {
        //cache task input element
        const taskInput = document.getElementsByClassName("task-checkbox-input");

        for(let i = 0; i < taskInput.length; i++) {
            taskInput[i].addEventListener("click", () => {
                selectedProj.toggleTaskStatus(selectedProj.taskList[i]);
                updateDisplay(projectsArray, selectedProj, projectDisplayContainer_div, sidebarProjectContainer_div);
            });
        };
    };

    const editTaskEvent = selectedProj => {
        //cache all displayed
        const taskEditIcon = document.getElementsByClassName("task-edit-icon");

        for(let i = 0; i < taskEditIcon.length; i++) {
            taskEditIcon[i].addEventListener("click", () => {
                renderTaskForm(document.body);
                renderTaskEditorValues(selectedProj, i);
                taskCreatorFlagEvent();
                taskCreatorCancelBtn();
                taskEditorSaveBtnEvent(selectedProj, i);
            });
        };
    };

    const deleteTaskEvent = selectedProj => {
        //cache all displayed
        const taskTrashIcon = document.getElementsByClassName("task-trash-icon");

        for(let i = 0; i < taskTrashIcon.length; i++) {
            taskTrashIcon[i].addEventListener("click", () => {
                selectedProj.deleteTask(i);
                updateDisplay(projectsArray, selectedProj, projectDisplayContainer_div, sidebarProjectContainer_div);
            });
        };
    };

    const expandTaskEvent = selectedProj => {
        //cache all displayed
        const taskName = document.getElementsByClassName("task-name");
        const taskNotes = document.getElementsByClassName("task-notes");
        const taskNotesContainer = document.querySelectorAll("[data-notes]");
        const taskCheckboxContainer = document.querySelectorAll("[data-checkbox]");

        for(let i = 0; i < taskName.length; i++) {
            taskName[i].addEventListener("click", () => {
                display().expandTask(taskNotesContainer, taskCheckboxContainer, i);
                display().renderNotes(selectedProj, taskNotes, i);
            });
        };
    };


    // ---------------- Project Creator --------------------

    
    const projectCreatorEvent = () => {
        sidebarPlusIcon.addEventListener("click", () => {
            renderProjectForm(document.body);
            projectCreatorCancelBtnEvent();
            projectCreatorSaveBtnEvent();
        });
    };

    //project creator form logic
    const projectCreator = () => {
        //select input element
        const formName = document.getElementById("form-name");
        //store user input
        let projectName = formName.value;

        //create new project
        let newProject = project(projectName)
        //add project to array
        projectsArray.push(newProject);
    };

    //task form cancel button event
    const projectCreatorCancelBtnEvent = () => {
        //cache DOM element
        const projectCancelBtn = document.getElementById("project-form-cancel-btn");
        //close the form on click
        projectCancelBtn.addEventListener("click", () => {
            closeFrom();
        });
    };

    //task form save button event
    const projectCreatorSaveBtnEvent = () => {
        //cache DOM element
        const projectSaveBtn = document.getElementById("project-form-save-btn");
        //run necessary functions on click
        projectSaveBtn.addEventListener("click", () => {
            projectCreator();
            //update display and reintroduce necessary event listeners
            updateDisplay(projectsArray, projectsArray[projectsArray.length - 1], projectDisplayContainer_div, sidebarProjectContainer_div);
            //stop displaying the form
            closeFrom();
        });
    };


    // ------------------- Project Editor -----------------------


    const renderProjectEditorValues = selectedProj => {
        //cache DOM elements
        const formTitle = document.getElementById("form-title");
        const formName = document.getElementById("form-name");
        //alter form's title
        formTitle.innerHTML = "Edit Project";
        //render value stored in the object
        formName.value = selectedProj.name;
    };

    const projectEditor = selectedProj => {
        //select each input element
        const formName = document.getElementById("form-name");
        //store new value in the object
        selectedProj.name = formName.value;
    };

    const projectEditorSaveBtnEvent = selectedProj => {
        //cache DOM element
        const projectSaveBtn = document.getElementById("project-form-save-btn");
        //run necessary functions on click
        projectSaveBtn.addEventListener("click", () => {
            projectEditor(selectedProj);
            //update display and reintroduce necessary event listeners
            updateDisplay(projectsArray, selectedProj, projectDisplayContainer_div, sidebarProjectContainer_div);
            //stop displaying the form
            closeFrom();
        });
    };


    // -------------------- Task Creator -------------------------


    //click event for the task creator button
    const taskCreatorEvent = selectedProj => {
        //select all task creators displayed
        const taskCreator_div = document.querySelectorAll("[data-creator]");

        for(let i = 0; i < taskCreator_div.length; i ++) {
            taskCreator_div[i].addEventListener("click", () => {
                renderTaskForm(document.body);
                taskCreatorFlagEvent();
                taskCreatorSaveBtn(selectedProj);
                taskCreatorCancelBtn();
            });
        };
    };

    const closeFrom = () => {
        document.body.removeChild(document.body.firstChild);
    };

    //check if task is due today and push to today project object
    const checkIfToday = (date, task) => {
        let todayDate = format(new Date(), "yyyy/MM/dd");
        let formattedDate = format(date, "yyyy/MM/dd");

        if(todayDate === formattedDate){
            todayProj.addTask(task);
        };
    };

    //task creator form logic
    const taskCreator = proj => {
        //select each input element
        const formName = document.getElementById("form-name");
        const formTime = document.getElementById("form-time");
        const formDate = document.getElementById("form-date");
        const formFlag = document.getElementById("form-flag").src;
        const formNotes = document.getElementById("form-notes");

        //store user input
        let taskName = formName.value;
        let taskTime = formTime.value;
        let taskDate = formDate.value;
        let taskPriority = formFlag.indexOf("red-flag") != -1 ? "high" : "regular";
        let taskNotes = formNotes.value;

        //create new task
        let newTask = proj.task(taskName, taskTime, taskDate, taskPriority);
        //add task notes
        newTask.notes = taskNotes;
        //add task to the project
        proj.addTask(newTask);
        //check if the task is due today and add to today's section as well
        checkIfToday(newTask.date, newTask);
    };

    //user can switch between task priority by clicking on flag
    const taskCreatorFlagEvent = () => {
        //cache flag element
        const formFlag = document.getElementById("form-flag");
        //toggle value is defined by the flag displayed
        let toggle = formFlag.src.indexOf("red-flag") != -1 ? true : false;

        formFlag.addEventListener("click", () => {
            taskCreatorFlag(formFlag, toggle);
            toggle = !toggle;
        });
    };

    const taskCreatorFlag = (flag, bool) => {
        //display correct flag
        bool === false ? flag.src = "icons/red-flag.svg" : flag.src = "icons/flag.svg";
    };

    //task form cancel button event
    const taskCreatorCancelBtn = () => {
        //cache DOM element
        const cancelBtn = document.getElementById("form-cancel-btn");

        cancelBtn.addEventListener("click", () => {
            closeFrom();
        });
    };

    //task form save button event
    const taskCreatorSaveBtn = (selectedProj) => {
        //cache DOM element
        const saveBtn = document.getElementById("form-save-btn");

        saveBtn.addEventListener("click", () => {
            taskCreator(selectedProj);
            updateDisplay(projectsArray, selectedProj, projectDisplayContainer_div, sidebarProjectContainer_div);
            closeFrom();
        });
    };


    // --------------------- Task editor -----------------------


    //render current values when the editor is displayed
    const renderTaskEditorValues = (proj, idx) => {
        //cache task form title
        const formTitle = document.getElementById("form-title");
        //cache each input element
        const formName = document.getElementById("form-name");
        const formTime = document.getElementById("form-time");
        const formDate = document.getElementById("form-date");
        const formFlag = document.getElementById("form-flag");
        const formNotes = document.getElementById("form-notes");

        //alter form's title
        formTitle.innerHTML = "Edit Task";

        //render correct flag
        proj.taskList[idx].priority === "high" ? formFlag.src = "icons/red-flag.svg" : formFlag.src = "icons/flag.svg";

        //render values stored in the object
        formName.value = proj.taskList[idx].name;
        formTime.value = proj.taskList[idx].time;
        formDate.value = format(proj.taskList[idx].date, "yyyy-MM-dd");
        formNotes.value = proj.taskList[idx].notes;
    };

    const taskEditor = (proj, idx) => {
        //select each input element
        const formName = document.getElementById("form-name");
        const formTime = document.getElementById("form-time");
        const formDate = document.getElementById("form-date");
        const formFlag = document.getElementById("form-flag").src;
        const formNotes = document.getElementById("form-notes");

        proj.taskList[idx].name = formName.value;
        proj.taskList[idx].time = formTime.value;
        proj.taskList[idx].date = new Date(formDate.value);
        proj.taskList[idx].priority = formFlag.indexOf("red-flag") != -1 ? "high" : "regular";
        proj.taskList[idx].notes = formNotes.value;

        //check if the task is due today and add to today's section as well
        checkIfToday(proj.taskList[idx].date, proj.taskList[idx]);
    };

    //task editor save button event
    const taskEditorSaveBtnEvent = (selectedProj, idx) => {
        //cache DOM element
        const saveBtn = document.getElementById("form-save-btn");

        saveBtn.addEventListener("click", () => {
            taskEditor(selectedProj, idx);
            //update display and reintroduce necessary event listeners
            updateDisplay(projectsArray, selectedProj, projectDisplayContainer_div, sidebarProjectContainer_div);
            //stop displaying the form
            closeFrom();
        });
    };


    // --------------------- General -------------------------


    const updateDisplay = (arr, proj, projContainer, sideContainer) => {
        //display the updated project
        display().selectedProject(proj, projContainer);
        //display the updated sidebar project and task list
        display().sideProjects(arr, sideContainer);
        //add back the sidebar projet's click event
        sideProjectTitleEvent();
        //sort tasks by date
        sortProjectDatesEvent(proj);
        //edit project
        editProjectEvent(proj);
        //add back the task creator click event
        taskCreatorEvent(proj);
        //add back the edit task event
        editTaskEvent(proj);
        //add back the delete task event
        deleteTaskEvent(proj);
        //add back the expand task event
        expandTaskEvent(proj);
        //cross off task
        crossTaskEvent(proj);
        //cross off sidetask
        crossSideTaskEvent();
    };

    //initialize necessary functions when page is launched
    const pageInit = (() => {
        display().sideProjects(projectsArray, sidebarProjectContainer_div);
        collapseSidebarEvent();
        changeThemeEvent();
        todaySectionEvent();
        checkForToday(projectsArray);
        collapseSideProjectsEvent();
        sideProjectTitleEvent();
        projectCreatorEvent();
        crossSideTaskEvent();
    })();



    // -------- To be done -------

    // trash section and functionalities
    // home section displays user numbers. Num of tasks/projects..
    // searchbar
    // task sub-list
    // display each section's value
    // notes altered outside of the forms need to be saved
    // create local storage
    
    // ---- CSS -----

    // media queries
    // improve collapse
    // improve dark mode

})();