const renderSidebar = (container) => {
    //main sidebar container
    let sidebarContainer = document.createElement("div");
    sidebarContainer.id = "sidebar";

    //-------   User data section    ---------
    
    //user data section content container
    let userDataSection = document.createElement("div");
    userDataSection.id = "user-data-section";

    //sidebar Today icon
    let sidebarTodayIcon = document.createElement("img");
    sidebarTodayIcon.id = "sidebar-today-icon";
    sidebarTodayIcon.src = "icons/bell.svg";

    //sidebar Today title
    let sidebarTitleToday = document.createElement("h2");
    sidebarTitleToday.id = "sidebar-title-today";
    sidebarTitleToday.className = "user-titles";
    sidebarTitleToday.innerHTML = "Today";

    //sidebar Today value
    let sidebarValueToday = document.createElement("p");
    sidebarValueToday.id = "sidebar-value-today";
    sidebarValueToday.innerHTML = "0";

    //sidebar this week icon
    let sidebarCalendarIcon = document.createElement("img");
    sidebarCalendarIcon.id = "sidebar-calendar-icon";
    sidebarCalendarIcon.src = "icons/calendar.svg";

    //sidebar this week tile
    let sidebarTitleWeek = document.createElement("h2");
    sidebarTitleWeek.id = "sidebar-title-week";
    sidebarTitleWeek.className = "user-titles";
    sidebarTitleWeek.innerHTML = "Week";

    //side this week value
    let sidebarValueWeek = document.createElement("p");
    sidebarValueWeek.id = "sidebar-value-week";
    sidebarValueWeek.innerHTML = "0";

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
        sidebarTodayIcon,
        sidebarTitleToday,
        sidebarValueToday,
        sidebarCalendarIcon,
        sidebarTitleWeek,
        sidebarValueWeek,
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
    projectsSectionTitle.id = "sidebar-projects-section-title";
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

    //logo link
    let logoLink = document.createElement("a");
    logoLink.id = "github-logo";
    logoLink.href = "https://github.com/ThomV93/todo-list";
    logoLink.target = "_blank";

    //git logo
    let gitLogo = document.createElement("img");
    gitLogo.id = "logo";
    gitLogo.src = "icons/github.svg";

    //append img to link
    logoLink.append(gitLogo);

    //-------------- Append to sidebar main container ----------
    
    sidebarContainer.append(
        userDataSection,
        sidebarChevronIcon,
        projectsSectionTitle,
        projectsSectionPlusIcon,
        sidebarProjectsSection,
        credit,
        logoLink
    );

    //----------- Append to Content container -----------

    container.append(sidebarContainer);

};

export default renderSidebar;