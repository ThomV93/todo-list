const renderProject = container => {
    //main project container
    let projectContainer = document.createElement("div");
    projectContainer.className = "project";

    //main task container
    let mainTaskContainer = document.createElement("div");
    mainTaskContainer.className = "task-container";


    // ------ Project DOM factory module -----

    const renderProjectTitle = name => {
        //title container
        let projectTitleContainer = document.createElement("div");
        projectTitleContainer.className = "project-title-container";

        //project title
        let projectTitle = document.createElement("h3");
        projectTitle.className = "project-title";
        projectTitle.innerHTML = name;

        //date container
        let ProjectDateContainer = document.createElement("div");
        ProjectDateContainer.id = "project-date-container";

        //date filter
        let projectDate = document.createElement("h3");
        projectDate.className = "project-date";
        projectDate.innerHTML = "Date";

        //chevron icon
        let projectDateFilter = document.createElement("img");
        projectDateFilter.className = "project-date-filter";
        projectDateFilter.src = "icons/chevrons-down.svg";

        //project edit icon
        let projectEditIcon = document.createElement("img");
        projectEditIcon.className = "project-edit-icon";
        projectEditIcon.id = "proj-edit-icon";
        projectEditIcon.src = "icons/edit-3.svg";

        //project trash icon
        let projectTrashIcon = document.createElement("img");
        projectTrashIcon.className = "project-trash-icon";
        projectTrashIcon.id = "proj-trash-icon";
        projectTrashIcon.src = "icons/trash-2.svg";

        //append date elements to container
        ProjectDateContainer.append(projectDate, projectDateFilter);

        //append elements to title container
        projectTitleContainer.append(
            projectTitle,
            ProjectDateContainer,
            projectEditIcon,
            projectTrashIcon
        );
        
        //append to main project container
        projectContainer.prepend(projectTitleContainer);

        //--------- Task DOM creator section -----------

        //task style container
        let taskStyleContainer = document.createElement("div");
        taskStyleContainer.className = "task";
        taskStyleContainer.dataset.creator = "y";

        //task creator container
        let taskCreatorContainer = document.createElement("div");
        taskCreatorContainer.id = "creator-container";

        //task creator img
        let taskCreatorImg = document.createElement("img");
        taskCreatorImg.id = "task-creator-img";
        taskCreatorImg.src = "icons/plus-2.svg";

        //task creator text
        let taskCreatorText = document.createElement("p");
        taskCreatorText.id = "task-creator-text";
        taskCreatorText.innerHTML = "Add task";

        //append elements to creator container
        taskCreatorContainer.append(taskCreatorImg, taskCreatorText);

        //append to task style container
        taskStyleContainer.append(taskCreatorContainer);

        //append to main task container
        mainTaskContainer.append(taskStyleContainer);
    };

    // --------- Task DOM factory module ---------

    const renderTask = (name, date, time, priority, status) => {
        //task container
        let taskContainer = document.createElement("div");
        taskContainer.className = "task";

        //checkbox input
        let taskCheckboxInput = document.createElement("input");
        taskCheckboxInput.className = "task-checkbox-input";
        taskCheckboxInput.type = "checkbox";

        //task time
        let taskTime = document.createElement("p");
        taskTime.className = "task-time";
        taskTime.innerHTML = time;

        //task name
        let taskName = document.createElement("p");
        taskName.className = "task-name";
        taskName.innerHTML = name;

        //task importance flag
        let taskFlag = document.createElement("img");
        taskFlag.className = "task-flag";
        taskFlag.src = priority === "regular" ? "icons/flag.svg" : "icons/red-flag.svg";

        //task date
        let taskDate = document.createElement("p");
        taskDate.className = "task-date";
        taskDate.innerHTML = date;

        if (status === false) {
            taskCheckboxInput.checked = true;
            taskTime.style.textDecoration = "line-through";
            taskName.style.textDecoration = "line-through";
            taskDate.style.textDecoration = "line-through";
            taskFlag.style.display = "none";
        };

        //task edit icon
        let taskEditIcon = document.createElement("img");
        taskEditIcon.className = "task-edit-icon";
        taskEditIcon.src = "icons/edit-3.svg";

        //task trash icon
        let taskTrashIcon = document.createElement("img");
        taskTrashIcon.className = "task-trash-icon";
        taskTrashIcon.src = "icons/trash-2.svg";

        //---------- Expanded task section ---------

        //----- Notes section ------
        //expanded task notes container
        let taskNotesContainer = document.createElement("div");
        taskNotesContainer.id = "notes-container";
        taskNotesContainer.className = "task-expanded";
        taskNotesContainer.dataset.notes = "notes";
        taskNotesContainer.style.position = "absolute";
        taskNotesContainer.style.visibility = "hidden";

        //notes title
        let taskNotesTitle = document.createElement("h2");
        taskNotesTitle.className = "task-expanded-title";
        taskNotesTitle.innerHTML = "Notes:";

        //notes text area
        let notesTextArea = document.createElement("textarea");
        notesTextArea.className = "task-notes";
        notesTextArea.innerHTML = "";
        notesTextArea.disabled = true;

        //append elements to container
        taskNotesContainer.append(taskNotesTitle, notesTextArea);

        //----- Checkbox section -----
        //expanded task checkbox container
        let taskCheckboxContainer = document.createElement("div");
        taskCheckboxContainer.id = "checkbox-container";
        taskCheckboxContainer.className = "task-expanded";
        taskCheckboxContainer.dataset.checkbox = "checkbox";
        taskCheckboxContainer.style.position = "absolute";
        taskCheckboxContainer.style.visibility = "hidden";

        //checkbox title
        let taskCheckboxTitle = document.createElement("h2");
        taskCheckboxTitle.className = "task-expanded-title";
        taskCheckboxTitle.innerHTML = "List:";

        //----Check container ---
        //individual checkbox container
        let checkboxContainer = document.createElement("div");
        checkboxContainer.className = "checkbox";

        //check input
        let checkInput = document.createElement("input");
        checkInput.className = "check-input";
        checkInput.type = "checkbox";

        //check label
        let checkLabel = document.createElement("label");
        checkLabel.innerHTML = "Diamon Hands";

        //append elements to individual checkbox container
        checkboxContainer.append(checkInput, checkLabel);


        //append elements to expanded checkbox container
        taskCheckboxContainer.append(taskCheckboxTitle, checkboxContainer);

        
        //-------- Append all to task container ---------
        taskContainer.append(
            taskCheckboxInput,
            taskTime,
            taskName,
            taskFlag,
            taskDate,
            taskEditIcon,
            taskTrashIcon,
            taskNotesContainer,
            taskCheckboxContainer
        );


        //append task container to main task container
        mainTaskContainer.append(taskContainer);
    };


    // --------- Today project section ----------


    const renderTodayProjectTitle = name => {
        //title container
        let projectTitleContainer = document.createElement("div");
        projectTitleContainer.className = "project-title-container";

        //project title
        let projectTitle = document.createElement("h3");
        projectTitle.id = "today-title";
        projectTitle.className = "project-title";
        projectTitle.innerHTML = name;

        //project trash icon
        let projectTrashIcon = document.createElement("img");
        projectTrashIcon.className = "project-trash-icon";
        projectTrashIcon.id = "proj-trash-icon";
        projectTrashIcon.src = "icons/trash-2.svg";

        //append elements to title container
        projectTitleContainer.append(projectTitle, projectTrashIcon);
        
        //append to main project container
        projectContainer.prepend(projectTitleContainer);

        //--------- Task DOM creator section -----------

        //task style container
        let taskStyleContainer = document.createElement("div");
        taskStyleContainer.className = "task";
        taskStyleContainer.dataset.creator = "y";

        //task creator container
        let taskCreatorContainer = document.createElement("div");
        taskCreatorContainer.id = "creator-container";

        //task creator img
        let taskCreatorImg = document.createElement("img");
        taskCreatorImg.id = "task-creator-img";
        taskCreatorImg.src = "icons/plus-2.svg";

        //task creator text
        let taskCreatorText = document.createElement("p");
        taskCreatorText.id = "task-creator-text";
        taskCreatorText.innerHTML = "Add task due today";

        //append elements to creator container
        taskCreatorContainer.append(taskCreatorImg, taskCreatorText);

        //append to task style container
        taskStyleContainer.append(taskCreatorContainer);

        //append to main task container
        mainTaskContainer.append(taskStyleContainer);
    };


    // --------- Trash project section ----------


    const renderTrashProjectTitle = name => {
        //title container
        let projectTitleContainer = document.createElement("div");
        projectTitleContainer.className = "project-title-container";

        //project title
        let projectTitle = document.createElement("h3");
        projectTitle.id = "trash-title";
        projectTitle.className = "project-title";
        projectTitle.innerHTML = name;

        //project restore icon
        let projectrestoreIcon = document.createElement("img");
        projectrestoreIcon.className = "project-restore-icon";
        projectrestoreIcon.id = "proj-restore-icon";
        projectrestoreIcon.src = "icons/restore.svg";

        //project trash icon
        let projectTrashIcon = document.createElement("img");
        projectTrashIcon.id = "proj-trash-red-icon";
        projectTrashIcon.className = "project-trash-icon";
        projectTrashIcon.src = "icons/trash.svg";

        //append elements to title container
        projectTitleContainer.append(projectTitle, projectrestoreIcon, projectTrashIcon);
        
        //append to main project container
        projectContainer.prepend(projectTitleContainer);
    };

    const renderTrashTask = (name, date, time) => {
        //task container
        let taskContainer = document.createElement("div");
        taskContainer.className = "task";

        //checkbox input
        let taskCheckboxInput = document.createElement("input");
        taskCheckboxInput.className = "task-checkbox-input";
        taskCheckboxInput.type = "checkbox";
        taskCheckboxInput.disabled = true;

        //task time
        let taskTime = document.createElement("p");
        taskTime.className = "task-time";
        taskTime.innerHTML = time;

        //task name
        let taskName = document.createElement("p");
        taskName.className = "task-name";
        taskName.innerHTML = name;

        //task date
        let taskDate = document.createElement("p");
        taskDate.className = "task-date";
        taskDate.innerHTML = date;

        //task restore icon
        let taskrestoreIcon = document.createElement("img");
        taskrestoreIcon.className = "task-restore-icon";
        taskrestoreIcon.src = "icons/restore.svg";

        //task trash icon
        let taskTrashIcon = document.createElement("img");
        taskTrashIcon.className = "task-trash-red-icon";
        taskTrashIcon.src = "icons/trash.svg";

        //---------- Expanded task section ---------

        //----- Notes section ------
        //expanded task notes container
        let taskNotesContainer = document.createElement("div");
        taskNotesContainer.id = "notes-container";
        taskNotesContainer.className = "task-expanded";
        taskNotesContainer.dataset.notes = "notes";
        taskNotesContainer.style.position = "absolute";
        taskNotesContainer.style.visibility = "hidden";

        //notes title
        let taskNotesTitle = document.createElement("h2");
        taskNotesTitle.className = "task-expanded-title";
        taskNotesTitle.innerHTML = "Notes:";

        //notes text area
        let notesTextArea = document.createElement("textarea");
        notesTextArea.className = "task-notes";
        notesTextArea.innerHTML = "";
        notesTextArea.disabled = true;

        //append elements to container
        taskNotesContainer.append(taskNotesTitle, notesTextArea);

        //----- Checkbox section -----
        //expanded task checkbox container
        let taskCheckboxContainer = document.createElement("div");
        taskCheckboxContainer.id = "checkbox-container";
        taskCheckboxContainer.className = "task-expanded";
        taskCheckboxContainer.dataset.checkbox = "checkbox";
        taskCheckboxContainer.style.position = "absolute";
        taskCheckboxContainer.style.visibility = "hidden";

        //checkbox title
        let taskCheckboxTitle = document.createElement("h2");
        taskCheckboxTitle.className = "task-expanded-title";
        taskCheckboxTitle.innerHTML = "List:";

        //----Check container ---
        //individual checkbox container
        let checkboxContainer = document.createElement("div");
        checkboxContainer.className = "checkbox";

        //check input
        let checkInput = document.createElement("input");
        checkInput.className = "check-input";
        checkInput.type = "checkbox";

        //check label
        let checkLabel = document.createElement("label");
        checkLabel.innerHTML = "Diamon Hands";

        //append elements to individual checkbox container
        checkboxContainer.append(checkInput, checkLabel);


        //append elements to expanded checkbox container
        taskCheckboxContainer.append(taskCheckboxTitle, checkboxContainer);

        
        //-------- Append all to task container ---------
        taskContainer.append(
            taskCheckboxInput,
            taskTime,
            taskName,
            taskDate,
            taskrestoreIcon,
            taskTrashIcon,
            taskNotesContainer,
            taskCheckboxContainer
        );


        //append task container to main task container
        mainTaskContainer.append(taskContainer);
    };

    //append main task container to main project container
    projectContainer.append(mainTaskContainer);

    //append to main content container
    container.append(projectContainer);

    return {
        renderProjectTitle,
        renderTask,
        renderTodayProjectTitle,
        renderTrashProjectTitle,
        renderTrashTask
    };
};

export default renderProject;