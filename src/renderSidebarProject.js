const renderSidebarProject = (container) => {
    //Project container
    let sidebarProject = document.createElement("div");
    sidebarProject.className = "sidebar-project";

    const sideProjectTitle = (name) => {
        //Project title container
        let sideProjectTitleContainer = document.createElement("div");
        sideProjectTitleContainer.className = "sidebar-project-title-container";
    
        //Project icon
        let projectIcon = document.createElement("img");
        projectIcon.className = "sidebar-project-icon";
        projectIcon.src = "icons/box.svg";
    
        //Project Title
        let sideProjectTitle = document.createElement("h2");
        sideProjectTitle.className = "sidebar-project-title";
        sideProjectTitle.innerHTML = name;
    
        //Append to elements container
        sideProjectTitleContainer.append(projectIcon, sideProjectTitle);

        //Append to project container
        sidebarProject.append(sideProjectTitleContainer);
    };
    
    const sideTask = (name) => {
        //Task container
        let taskContainer = document.createElement("div");
        taskContainer.className = "sidebar-project-task-container";
    
        //Task checkbox input
        let taskCheckInput = document.createElement("input");
        taskCheckInput.className = "sidebar-task-input";
        taskCheckInput.type = "checkbox";
    
        //Task label
        let taskCheckLabel = document.createElement("label");
        taskCheckLabel.className = "sidebar-task-label";
        taskCheckLabel.innerHTML = name.toString();
    
        //Append elements to container
        taskContainer.append(taskCheckInput, taskCheckLabel);

        //Append to project container
        sidebarProject.append(taskContainer);
    };

    container.append(sidebarProject);

    return {sideProjectTitle, sideTask};
};

export default renderSidebarProject;