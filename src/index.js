//import necessary modules
import display from "./display";
import searchbar from "./searchbar";
import project from "./projectFactory";
import projectForm from "./projectForm";
import taskForm from "./taskForm";
import renderTaskForm from "./renderTaskForm";
import renderProjectForm from "./renderProjectForm";
import {format, isSameWeek} from "date-fns";

const todoApp = (() => {

    //render basic page layout
    display().renderPage();
    //project objects array
    let projectsArray = [];
    //today project object
    let todayProj = project("Today");
    //week project object
    let weekProj = project("Week");
    //week section value
    let weekValue = weekProj.taskList.length;
    //trash project object
    let trashProj = project("Trash");
    //trash section value
    let trashValue = trashProj.taskList.length;

    //cache DOM elements
    const sunIcon_img = document.getElementById("sun-icon");
    const listIcon_img = document.getElementById("list-icon");
    const searchbar_input = document.getElementById("searchbar");
    const sidebar = document.getElementById("sidebar");
    const sidebarTodayTitle = document.getElementById("sidebar-title-today");
    const sidebarWeekTitle = document.getElementById("sidebar-title-week");
    const sidebarTrashTitle = document.getElementById("sidebar-title-trash");
    const sideProjectMainTitle = document.getElementById("sidebar-projects-section-title");
    const sideProjectChevron = document.getElementById("sidebar-section-chevron-icon");
    const sidebarPlusIcon = document.getElementById("sidebar-section-plus-icon");
    const sidebarProjectContainer_div = document.getElementById("sidebar-projects-section");
    const sidebarProjectTitleContainer_div = document.getElementsByClassName("sidebar-project-title-container");
    const projectDisplayContainer_div = document.getElementById("project-display-container");


    // --------- DEMO Projects and Tasks -----------


    let work = project("Work");

    let workTask1 = work.task("Check Emails", "09:00", "03/04/2021", "high");
    let workTask2 = work.task("Send Emails", "10:30", "04/04/2021", "regular");
    let workTask3 = work.task("Create reports", "14:00", "31/03/2021", "high");
    let workTask4 = work.task("Open Tickets", "16:00", "13/04/2021", "regular");
    workTask2.notes = "Hello Notes";
    work.addTask(workTask1);
    work.addTask(workTask2);
    work.addTask(workTask3);
    work.addTask(workTask4);

    projectsArray.push(work);


    let investing = project("Investing");

    let investingTask1 = investing.task("Tea Time", "15:00", "29/08/2021");
    let investingTask2 = investing.task("Dinner", "18:00", "04/04/2021");
    let investingTask3 = investing.task("Test", "18:00", "31/03/2021");
    investing.addTask(investingTask1);
    investing.addTask(investingTask2);
    investing.addTask(investingTask3);

    projectsArray.push(investing);


    let coding = project("Coding");

    let codingTask1 = coding.task("Study", "19:00", "03/04/2021", "regular");
    let codingTask2 = coding.task("Study MORE", "20:30", "31/03/2021", "high");
    let codingTask3 = coding.task("Stretch back", "22:00", "29/08/2021", "regular");
    coding.addTask(codingTask1);
    coding.addTask(codingTask2);
    coding.addTask(codingTask3);

    projectsArray.push(coding);


    // -------------------- ProjectsArray Aux Functions ---------------------


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
    const checkForUpcoming = arr => {
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
                //if task is due this week, add to Week project object
                let compareWeek = isSameWeek(new Date(formattedDate), new Date(today));
                if(compareWeek){
                    let weekTask = task;
                    weekProj.addTask(weekTask);
                };
            };
        };
    };

    //restore task to it's original parent
    const restoreTask = (selectedProj, idx) => {
        //store selected task
        let task = selectedProj.taskList[idx];
        //store original parent obj
        let parent = projectsArray[getParentIdx(task.parentName)];
        //add task back to original parent
        parent.addTask(selectedProj.taskList[idx]);
        //delete task from task project
        trashProj.deleteTask(selectedProj.taskList[idx]);
    };


    // ---------------- Navbar Events Section ----------------


    const collapseSidebarEvent = () => {
        //cache DOM element
        const projectTitleContainer = document.getElementsByClassName("project-title-container");
        //toggle boolean
        let toggle = false;
        //click event to run function and invert toggle
        listIcon_img.addEventListener("click", () => {
            display().collapseSidebar(sidebar, projectDisplayContainer_div, projectTitleContainer, toggle);
            toggle = !toggle;
        });
    };

    //input event listener
    const searchbarEvent = selectedProj => {
        const taskCollection = document.getElementsByClassName("task");
        searchbar_input.addEventListener("input", () => {
            searchbar(selectedProj, taskCollection, searchbar_input);
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

    //Title events

    const todaySectionEvent = () => {
        sidebarTodayTitle.addEventListener("click", () => {
            updateDisplay(projectsArray, todayProj, projectDisplayContainer_div, sidebarProjectContainer_div);
        });
    };

    const weekSectionEvent = () => {
        sidebarWeekTitle.addEventListener("click", () => {
            updateDisplay(projectsArray, weekProj, projectDisplayContainer_div, sidebarProjectContainer_div);
        });
    };

    const trashSectionEvent = () => {
        sidebarTrashTitle.addEventListener("click", () => {
            updateDisplay(projectsArray, trashProj, projectDisplayContainer_div, sidebarProjectContainer_div);
        });
    };

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
                moveToTrashEvent(projectsArray[i]);
                expandTaskEvent(projectsArray[i]);
                crossTaskEvent(projectsArray[i]);
                searchbarEvent(projectsArray[i]);
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


    // --------------- Project Events Section ----------------


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

    //edit project's name on click
    const editProjectEvent = selectedProj => {
        //cache DOM element
        const projEditIcon = document.getElementById("proj-edit-icon");
        //add click event to element
        projEditIcon.addEventListener("click", () => {
            renderProjectForm(document.body);
            projectForm().displayStoredValues(selectedProj);
            projectCreatorCancelBtnEvent();
            projectEditorSaveBtnEvent(selectedProj);
        });
    };

    //delete all tasks on click
    const trashDeleteAllEvent = selectedProj => {
        //cache DOM element
        const projTrashRedIcon = document.getElementById("proj-trash-red-icon");

        projTrashRedIcon.addEventListener("click", () => {
            selectedProj.taskList = [];
            updateDisplay(projectsArray, selectedProj, projectDisplayContainer_div, sidebarProjectContainer_div);
        });
    };


    // --------------- Task Events Section -------------------


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
                taskForm().displayStoredValues(selectedProj, i);
                taskCreatorFlagEvent();
                taskCreatorCancelBtnEvent();
                taskEditorSaveBtnEvent(selectedProj, i);
            });
        };
    };

    //move task to the trash section and delete it locally
    const moveToTrashEvent = selectedProj => {
        //cache all displayed
        const taskTrashIcon = document.getElementsByClassName("task-trash-icon");

        for(let i = 0; i < taskTrashIcon.length; i++) {
            taskTrashIcon[i].addEventListener("click", () => {
                //push to trash section
                trashProj.addTask(selectedProj.taskList[i]);
                //delete from the original project
                selectedProj.deleteTask(i);
                updateDisplay(projectsArray, selectedProj, projectDisplayContainer_div, sidebarProjectContainer_div);
            });
        };
    };

    //restore task to it's original parent
    const restoreTaskEvent = selectedProj => {
        //cache all displayed
        const restoreTaskIcon = document.getElementsByClassName("task-restore-icon");

        for(let i = 0; i < restoreTaskIcon.length; i++) {
            restoreTaskIcon[i].addEventListener("click", () => {
                restoreTask(selectedProj, i);
                updateDisplay(projectsArray, selectedProj, projectDisplayContainer_div, sidebarProjectContainer_div);
            });
        };        
    };

    //delete task permanently
    const deleteTaskEvent = selectedProj => {
        //cache all displayed
        const taskTrashRedIcon = document.getElementsByClassName("task-trash-red-icon");

        for(let i = 0; i < taskTrashRedIcon.length; i++) {
            taskTrashRedIcon[i].addEventListener("click", () => {
                //delete from the original project
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


    // ---------------- Project Form Events --------------------

    
    const projectCreatorEvent = () => {
        sidebarPlusIcon.addEventListener("click", () => {
            renderProjectForm(document.body);
            projectCreatorCancelBtnEvent();
            projectCreatorSaveBtnEvent();
        });
    };

    //task form cancel button event
    const projectCreatorCancelBtnEvent = () => {
        //cache DOM element
        const projectCancelBtn = document.getElementById("project-form-cancel-btn");
        //close the form on click
        projectCancelBtn.addEventListener("click", () => {
            projectForm().close();
        });
    };

    //task form save button event
    const projectCreatorSaveBtnEvent = () => {
        //cache DOM element
        const projectSaveBtn = document.getElementById("project-form-save-btn");
        //run necessary functions on click
        projectSaveBtn.addEventListener("click", () => {
            projectForm().creator(projectsArray);
            //update display and reintroduce necessary event listeners
            updateDisplay(projectsArray, projectsArray[projectsArray.length - 1], projectDisplayContainer_div, sidebarProjectContainer_div);
            //stop displaying the form
            projectForm().close();
        });
    };

    const projectEditorSaveBtnEvent = selectedProj => {
        //cache DOM element
        const projectSaveBtn = document.getElementById("project-form-save-btn");
        //run necessary functions on click
        projectSaveBtn.addEventListener("click", () => {
            projectForm().editor(selectedProj);
            //update display and reintroduce necessary event listeners
            updateDisplay(projectsArray, selectedProj, projectDisplayContainer_div, sidebarProjectContainer_div);
            //stop displaying the form
            projectForm().close();
        });
    };


    // -------------------- Task Form Events -------------------------


    //click event for the task creator button
    const taskCreatorEvent = selectedProj => {
        //select all task creators displayed
        const taskCreator_div = document.querySelectorAll("[data-creator]");

        for(let i = 0; i < taskCreator_div.length; i ++) {
            taskCreator_div[i].addEventListener("click", () => {
                renderTaskForm(document.body);
                taskCreatorFlagEvent();
                taskCreatorSaveBtnEvent(selectedProj);
                taskCreatorCancelBtnEvent();
            });
        };
    };

    //user can switch between task priority by clicking on flag
    const taskCreatorFlagEvent = () => {
        //cache flag element
        const formFlag = document.getElementById("form-flag");
        //toggle value is defined by the flag displayed
        let toggle = formFlag.src.indexOf("red-flag") != -1 ? true : false;

        formFlag.addEventListener("click", () => {
            taskForm().displayCorrectFlag(formFlag, toggle);
            toggle = !toggle;
        });
    };

    //task form cancel button event
    const taskCreatorCancelBtnEvent = () => {
        //cache DOM element
        const cancelBtn = document.getElementById("form-cancel-btn");

        cancelBtn.addEventListener("click", () => {
            taskForm().close();
        });
    };

    //task form save button event
    const taskCreatorSaveBtnEvent = (selectedProj) => {
        //cache DOM element
        const saveBtn = document.getElementById("form-save-btn");

        saveBtn.addEventListener("click", () => {
            taskForm().creator(selectedProj, todayProj);
            updateDisplay(projectsArray, selectedProj, projectDisplayContainer_div, sidebarProjectContainer_div);
            taskForm().close();
        });
    };

    //task editor save button event
    const taskEditorSaveBtnEvent = (selectedProj, idx) => {
        //cache DOM element
        const saveBtn = document.getElementById("form-save-btn");

        saveBtn.addEventListener("click", () => {
            taskForm().editor(selectedProj, idx, todayProj);
            //update display and reintroduce necessary event listeners
            updateDisplay(projectsArray, selectedProj, projectDisplayContainer_div, sidebarProjectContainer_div);
            //stop displaying the form
            taskForm().close();
        });
    };


    // --------------------- General -------------------------

    const projectDisplayController = (proj, projContainer) => {
        switch(proj.name) {
            case "Today":
            case "Week":
                display().todayProject(proj, projContainer);
                //task creator click event
                taskCreatorEvent(proj);
                //edit task on click
                editTaskEvent(proj);
                //move task to trash section on click
                moveToTrashEvent(proj);
                //cross off task on click
                crossTaskEvent(proj);
                //cross off sidetask on click
                crossSideTaskEvent();
                break;

            case "Trash":
                display().trashProject(proj, projContainer);
                //delete all tasks event
                trashDeleteAllEvent(proj);
                //restore to original project on click
                restoreTaskEvent(proj);
                //delete task permanently on click
                deleteTaskEvent(proj);
                break;

            default:
                display().selectedProject(proj, projContainer);
                //sort tasks by date on click
                sortProjectDatesEvent(proj);
                //edit project
                editProjectEvent(proj);
                //task creator click event
                taskCreatorEvent(proj);
                //edit task
                editTaskEvent(proj);
                //move task to trash section on click
                moveToTrashEvent(proj);
                //cross off task
                crossTaskEvent(proj);
                break;
        };
    };

    const updateDisplay = (arr, proj, projContainer, sideContainer) => {
        //display the updated project
        projectDisplayController(proj, projContainer);
        //display the updated sidebar project and task list
        display().sideProjects(arr, sideContainer);
        //add back the sidebar projet's click event
        sideProjectTitleEvent();
        //cross off sidetask
        crossSideTaskEvent();
        //add back the expand task event
        expandTaskEvent(proj);
        //display Today Value
        display().sideValues(todayProj, weekProj, trashProj);
    };

    //initialize necessary functions when page is launched
    const pageInit = (() => {
        display().sideProjects(projectsArray, sidebarProjectContainer_div);
        collapseSidebarEvent();
        changeThemeEvent();
        todaySectionEvent();
        weekSectionEvent();
        trashSectionEvent();
        checkForUpcoming(projectsArray);
        collapseSideProjectsEvent();
        sideProjectTitleEvent();
        projectCreatorEvent();
        crossSideTaskEvent();
        display().sideValues(todayProj, weekProj, trashProj);
    })();



    // -------- To be done -------
    // display each section's value
    // create local storage
    // credit
    // task sub-list
    
    // ---- CSS -----
    // media queries

    // ---- Bugs ----
    // deleted tasks are not deleted in the today object
    // edited priority get duplicated in the today section
    // edited date on today section don't erase task
    // search don't work properly on trash section

})();