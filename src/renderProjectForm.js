const renderProjectForm = container => {

    //main form container
    let formContainer = document.createElement("div");
    formContainer.id = "form-container";


    //project form container
    let projectFormContainer = document.createElement("form");
    projectFormContainer.id = "project-form-container";

    //title container
    let formTitleContainer = document.createElement("div");
    formTitleContainer.id = "project-form-title-container";

    let formTitle = document.createElement("h2");
    formTitle.id = "form-title";
    formTitle.innerHTML = "New Project";

    //append title to container
    formTitleContainer.append(formTitle);


    //form name container
    let formNameContainer = document.createElement("div");
    formNameContainer.id = "project-form-name-container";
    formNameContainer.className = "form-input-container";

    //form label name
    let formLabelName = document.createElement("label");
    formLabelName.id = "form-label-name";
    formLabelName.innerHTML = "Title:";

    //form name input
    let formName = document.createElement("input");
    formName.id = "form-name";
    formName.type = "text";
    formName.minLength = "2";
    formName.maxLength = "12";

    //append elements to form name container
    formNameContainer.append(formLabelName, formName);


    //cancel button
    let formCancelBtn = document.createElement("button");
    formCancelBtn.id = "project-form-cancel-btn";
    formCancelBtn.type = "button";
    formCancelBtn.innerHTML = "Cancel";

    

    //save button
    let formSaveBtn = document.createElement("button");
    formSaveBtn.id = "project-form-save-btn";
    formSaveBtn.type = "button";
    formSaveBtn.innerHTML = "Save";


    // ------- append elements and container to project form container ------
    projectFormContainer.append(
        formTitleContainer,
        formNameContainer,
        formCancelBtn,
        formSaveBtn
    );

    formContainer.append(projectFormContainer);

    container.prepend(formContainer);

};

export default renderProjectForm;