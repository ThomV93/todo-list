const renderTaskEditor = (container) => {

    //main editor container
    let editorContainer = document.createElement("div");
    editorContainer.id = "editor-container";


    //task editor container
    let taskEditorContainer = document.createElement("div");
    taskEditorContainer.id = "task-editor-container";

    //title container
    let editorTitleContainer = document.createElement("div");
    editorTitleContainer.id = "editor-title-container";

    let editorTitle = document.createElement("h2");
    editorTitle.id = "editor-title";
    editorTitle.innerHTML = "New Task";

    //append title to container
    editorTitleContainer.append(editorTitle);



    //flag icon
    let editorFlag = document.createElement("img");
    editorFlag.id = "editor-flag";
    editorFlag.src = "icons/flag.svg";



    //editor name container
    let editorNameContainer = document.createElement("div");
    editorNameContainer.id = "editor-name-container";
    editorNameContainer.className = "editor-input-container";

    //editor label name
    let editorLabelName = document.createElement("label");
    editorLabelName.id = "editor-label-name";
    editorLabelName.innerHTML = "Title:";

    //editor name input
    let editorName = document.createElement("input");
    editorName.id = "editor-name";
    editorName.type = "text";

    //append elements to editor name container
    editorNameContainer.append(editorLabelName, editorName);



    //editor time container
    let editorTimeContainer = document.createElement("div");
    editorTimeContainer.id = "editor-time-container";
    editorTimeContainer.className = "editor-input-container";

    //editor label time
    let editorLabelTime = document.createElement("label");
    editorLabelTime.id = "editor-label-time";
    editorLabelTime.innerHTML = "Time:";

    //editor time input
    let editorTime = document.createElement("input");
    editorTime.id = "editor-time";
    editorTime.type = "time";

    //append elements to editor time container
    editorTimeContainer.append(editorLabelTime, editorTime);



    //editor date container
    let editorDateContainer = document.createElement("div");
    editorDateContainer.id = "editor-date-container";
    editorDateContainer.className = "editor-input-container";

    //editor label date
    let editorLabelDate = document.createElement("label");
    editorLabelDate.id = "editor-label-date";
    editorLabelDate.innerHTML = "Date:";

    //editor date input
    let editorDate = document.createElement("input");
    editorDate.id = "editor-date";
    editorDate.type = "date";

    //append elements to editor date container
    editorDateContainer.append(editorLabelDate, editorDate);



    //editor notes container
    let editorNotesContainer = document.createElement("div");
    editorNotesContainer.id = "editor-notes-container";
    editorNotesContainer.className = "editor-input-container";

    //editor label notes
    let editorLabelNotes = document.createElement("label");
    editorLabelNotes.id = "editor-label-notes";
    editorLabelNotes.innerHTML = "Notes:";

    //editor notes textarea
    let editorNotes = document.createElement("textarea");
    editorNotes.id = "editor-notes";

    //append elements to editor date container
    editorNotesContainer.append(editorLabelNotes, editorNotes);



    //cancel button
    let editorCancelBtn = document.createElement("button");
    editorCancelBtn.id = "editor-cancel-btn";
    editorCancelBtn.type = "button";
    editorCancelBtn.innerHTML = "Cancel";

    

    //save button
    let editorSaveBtn = document.createElement("button");
    editorSaveBtn.id = "editor-save-btn";
    editorSaveBtn.type = "button";
    editorSaveBtn.innerHTML = "Save";


    // ------- append elements and container to task editor container ------
    taskEditorContainer.append(
        editorTitleContainer,
        editorFlag,
        editorNameContainer,
        editorTimeContainer,
        editorDateContainer,
        editorNotesContainer,
        editorCancelBtn,
        editorSaveBtn
    );

    editorContainer.append(taskEditorContainer);

    container.prepend(editorContainer);

};

export default renderTaskEditor;