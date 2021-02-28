const renderSidebarProject = (container) => {
    //Project container
    let sidebarProject = document.createElement("div");
    sidebarProject.className = "sidebar-project";

    const projectTitle = (name) => {
        //Project title container
        let projectTitleContainer = document.createElement("div");
        projectTitleContainer.className = "sidebar-project-title-container";
    
        //Project icon
        let projectIcon = document.createElement("img");
        projectIcon.className = "sidebar-project-icon";
        projectIcon.src = "icons/box.svg";
    
        //Project Title
        let projectTitle = document.createElement("h2");
        projectTitle.className = "sidebar-project-title";
        projectTitle.innerHTML = name;
    
        //Append to elements container
        projectTitleContainer.append(projectIcon, projectTitle);

        //Append to project container
        sidebarProject.append(projectTitleContainer);
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

    return {projectTitle, sideTask};
};

export default renderSidebarProject;