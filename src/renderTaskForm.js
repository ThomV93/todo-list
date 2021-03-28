const renderTaskForm = container => {

    //main form container
    let formContainer = document.createElement("div");
    formContainer.id = "form-container";


    //task form container
    let taskFormContainer = document.createElement("div");
    taskFormContainer.id = "task-form-container";

    //title container
    let formTitleContainer = document.createElement("div");
    formTitleContainer.id = "form-title-container";

    let formTitle = document.createElement("h2");
    formTitle.id = "form-title";
    formTitle.innerHTML = "New Task";

    //append title to container
    formTitleContainer.append(formTitle);



    //flag icon
    let formFlag = document.createElement("img");
    formFlag.id = "form-flag";
    formFlag.src = "icons/flag.svg";



    //form name container
    let formNameContainer = document.createElement("div");
    formNameContainer.id = "form-name-container";
    formNameContainer.className = "form-input-container";

    //form label name
    let formLabelName = document.createElement("label");
    formLabelName.id = "form-label-name";
    formLabelName.innerHTML = "Title:";

    //form name input
    let formName = document.createElement("input");
    formName.id = "form-name";
    formName.type = "text";

    //append elements to form name container
    formNameContainer.append(formLabelName, formName);



    //form time container
    let formTimeContainer = document.createElement("div");
    formTimeContainer.id = "form-time-container";
    formTimeContainer.className = "form-input-container";

    //form label time
    let formLabelTime = document.createElement("label");
    formLabelTime.id = "form-label-time";
    formLabelTime.innerHTML = "Time:";

    //form time input
    let formTime = document.createElement("input");
    formTime.id = "form-time";
    formTime.type = "time";

    //append elements to form time container
    formTimeContainer.append(formLabelTime, formTime);



    //form date container
    let formDateContainer = document.createElement("div");
    formDateContainer.id = "form-date-container";
    formDateContainer.className = "form-input-container";

    //form label date
    let formLabelDate = document.createElement("label");
    formLabelDate.id = "form-label-date";
    formLabelDate.innerHTML = "Date:";

    //form date input
    let formDate = document.createElement("input");
    formDate.id = "form-date";
    formDate.type = "date";

    //append elements to form date container
    formDateContainer.append(formLabelDate, formDate);



    //form notes container
    let formNotesContainer = document.createElement("div");
    formNotesContainer.id = "form-notes-container";
    formNotesContainer.className = "form-input-container";

    //form label notes
    let formLabelNotes = document.createElement("label");
    formLabelNotes.id = "form-label-notes";
    formLabelNotes.innerHTML = "Notes:";

    //form notes textarea
    let formNotes = document.createElement("textarea");
    formNotes.id = "form-notes";

    //append elements to form date container
    formNotesContainer.append(formLabelNotes, formNotes);



    //cancel button
    let formCancelBtn = document.createElement("button");
    formCancelBtn.id = "form-cancel-btn";
    formCancelBtn.type = "button";
    formCancelBtn.innerHTML = "Cancel";

    

    //save button
    let formSaveBtn = document.createElement("button");
    formSaveBtn.id = "form-save-btn";
    formSaveBtn.type = "button";
    formSaveBtn.innerHTML = "Save";


    // ------- append elements and container to task form container ------
    taskFormContainer.append(
        formTitleContainer,
        formFlag,
        formNameContainer,
        formTimeContainer,
        formDateContainer,
        formNotesContainer,
        formCancelBtn,
        formSaveBtn
    );

    formContainer.append(taskFormContainer);

    container.prepend(formContainer);

};

export default renderTaskForm;