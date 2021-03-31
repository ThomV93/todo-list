const searchbar = (selectedProj, taskCollection, searchInput) => {
    //convert input to uppercase
    let filter = searchInput.value.toUpperCase();
    //html collection to array
    let taskArrayDom = Array.from(taskCollection);
    //loop through the list hiding the values that don't match the value in the searchbar
    for (let i = 0; i < selectedProj.taskList.length; i++) {
        let taskDom = taskArrayDom[i+1];
        let taskObj = selectedProj.taskList[i];
        if (taskDom !== undefined) {
            taskObj.name.toUpperCase().indexOf(filter) > -1 ? taskDom.style.display = "grid" : taskDom.style.display = "none";
        };
    };
};

export default searchbar;