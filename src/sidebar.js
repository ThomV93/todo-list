const sidebar = (container) => {
    //main sidebar container
    let sidebarContainer = document.createElement("div");
    sidebarContainer.id = "sidebar";

    //-------   User data section    ---------
    
    //user data section content container
    let userDataSection = document.createElement("div");
    userDataSection.id = "user-data-section";


    //section title
    let userDataSectionTitle = document.createElement("h1");
    userDataSectionTitle.className = "sidebar-section-title";
    userDataSectionTitle.innerHTML = "To-Do's";

    //sidebar HOME icon
    let sidebarHomeIcon = document.createElement("img");
    sidebarHomeIcon.id = "sidebar-home-icon";
    sidebarHomeIcon.src = "icons/home.svg";

    //sidebar HOME tile
    let sidebarTitleHome = document.createElement("h2");
    sidebarTitleHome.id = "sidebar-title-home";
    sidebarTitleHome.className = "user-titles";
    sidebarTitleHome.innerHTML = "Home";

    //side HOME value
    let sidebarValueHome = document.createElement("p");
    sidebarValueHome.id = "sidebar-value-home";
    sidebarValueHome.innerHTML = "0";

    //sidebar ALL icon
    let sidebarAllIcon = document.createElement("img");
    sidebarAllIcon.id = "sidebar-all-icon";
    sidebarAllIcon.src = "icons/calendar.svg";

    //sidebar ALL title
    let sidebarTitleAll = document.createElement("h2");
    sidebarTitleAll.id = "sidebar-title-all";
    sidebarTitleAll.className = "user-titles";
    sidebarTitleAll.innerHTML = "All";

    //sidebar ALL value
    let sidebarValueAll = document.createElement("p");
    sidebarValueAll.id = "sidebar-value-all";
    sidebarValueAll.innerHTML = "0";

    //sidebar TRASH icon
    let sidebarTrashIcon = document.createElement("img");
    sidebarTrashIcon.id = "sidebar-trash-icon";
    sidebarTrashIcon.src = "icons/trash.svg";

    //sidebar TRASH title
    let sidebarTitleTrash = document.createElement("h2");
    sidebarTitleTrash.id = "sidebar-title-trash";
    sidebarTitleTrash.className = "user-titles";
    sidebarTitleTrash.innerHTML = "Trash";

    //sidebar TRASH value
    let sidebarValueTrash = document.createElement("p");
    sidebarValueTrash.id = "sidebar-value-trash";
    sidebarValueTrash.innerHTML = "0";

    
    //Append all elements to User Data Section container
    userDataSection.append(
        userDataSectionTitle,
        sidebarHomeIcon,
        sidebarTitleHome,
        sidebarValueHome,
        sidebarAllIcon,
        sidebarTitleAll,
        sidebarValueAll,
        sidebarTrashIcon,
        sidebarTitleTrash,
        sidebarValueTrash
    );


    //----- Projects Title -----
    //sidebar section chevron icon
    let sidebarChevronIcon = document.createElement("img");
    sidebarChevronIcon.id = "sidebar-section-chevron-icon";
    sidebarChevronIcon.src = "icons/chevron-right.svg";

    //sidebar projects section title
    let projectsSectionTitle = document.createElement("h1");
    projectsSectionTitle.className = "sidebar-section-title";
    projectsSectionTitle.innerHTML = "Projects";

    //sidebar projects section plus icon
    let projectsSectionPlusIcon = document.createElement("img");
    projectsSectionPlusIcon.id = "sidebar-section-plus-icon";
    projectsSectionPlusIcon.src = "icons/plus-2.svg";


    //---- Projects Container ----
    
    let sidebarProjectsSection = document.createElement("div");
    sidebarProjectsSection.id = "sidebar-projects-section";


    //------- Credit Section -----
    //credit text
    let credit = document.createElement("p");
    credit.innerHTML = "Made by Thomas Veit";

    //git logo
    let gitLogo = document.createElement("img");
    gitLogo.id = "github-logo";
    gitLogo.src = "icons/github.svg";



    //-------------- Append to sidebar main container ----------
    
    sidebarContainer.append(
        userDataSection,
        sidebarChevronIcon,
        projectsSectionTitle,
        projectsSectionPlusIcon,
        sidebarProjectsSection,
        credit,
        gitLogo
    );

    //----------- Append to Content container -----------

    container.append(sidebarContainer);

};

export default sidebar;