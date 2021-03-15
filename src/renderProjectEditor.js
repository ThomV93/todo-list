const renderProjectEditor = (container) => {

    //main editor container
    let editorContainer = document.createElement("div");
    editorContainer.id = "editor-container";


    //project editor container
    let projectEditorContainer = document.createElement("div");
    projectEditorContainer.id = "project-editor-container";

    //title container
    let editorTitleContainer = document.createElement("div");
    editorTitleContainer.id = "project-editor-title-container";

    let editorTitle = document.createElement("h2");
    editorTitle.id = "editor-title";
    editorTitle.innerHTML = "New Project";

    //append title to container
    editorTitleContainer.append(editorTitle);


    //editor name container
    let editorNameContainer = document.createElement("div");
    editorNameContainer.id = "project-editor-name-container";
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


    //cancel button
    let editorCancelBtn = document.createElement("button");
    editorCancelBtn.id = "project-editor-cancel-btn";
    editorCancelBtn.type = "button";
    editorCancelBtn.innerHTML = "Cancel";

    

    //save button
    let editorSaveBtn = document.createElement("button");
    editorSaveBtn.id = "project-editor-save-btn";
    editorSaveBtn.type = "button";
    editorSaveBtn.innerHTML = "Save";


    // ------- append elements and container to project editor container ------
    projectEditorContainer.append(
        editorTitleContainer,
        editorNameContainer,
        editorCancelBtn,
        editorSaveBtn
    );

    editorContainer.append(projectEditorContainer);

    container.prepend(editorContainer);

};

export default renderProjectEditor;