const renderNavbar = (container) => {
    //main container
    let navContainer = document.createElement("div");
    navContainer.id = "navbar";

    //Logo
    let logoImg = document.createElement("img");
    logoImg.id = "list-icon";
    logoImg.src = "icons/list.svg";

    //searchbar container
    let searchContainer = document.createElement("div");
    searchContainer.id = "search-container";

    //search icon
    let searchIcon = document.createElement("img");
    searchIcon.id = "search-icon";
    searchIcon.src = "icons/search.svg";
    //search input
    let searchbar = document.createElement("input");
    searchbar.id = "searchbar";
    searchbar.type = "text";
    searchbar.placeholder = "Search..";
    
    //append to search container
    searchContainer.append(searchIcon, searchbar);

    //plus sign icon
    let plusIcon = document.createElement("img");
    plusIcon.id = "sun-icon";
    plusIcon.src = "icons/sun.svg";

    //settings icon
    let settingsIcon = document.createElement("img");
    settingsIcon.id = "more-vertical-icon";
    settingsIcon.src = "icons/more-vertical.svg";

    //append all to main container
    navContainer.append(logoImg, searchContainer, plusIcon, settingsIcon);

    //----append navbar to main container---
    container.append(navContainer);
};

export default renderNavbar;