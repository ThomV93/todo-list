const projectContainer = (container) => {
    //main container
    let projectDisplayContainer = document.createElement("div");
    projectDisplayContainer.id = "project-display-container";

    // ---- append to main content container ----
    container.append(projectDisplayContainer);
};

export default projectContainer;