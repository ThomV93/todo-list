const searchbar = (selectedProj, taskCollection, searchInput) => {
    let filter = searchInput.value.toUpperCase();
    let taskArrayDom = Array.from(taskCollection);
    //loop through the list hiding the values that don't match the value in the searchbar
    for (let i = 0; i < selectedProj.taskList.length; i++) {
        let task = taskArrayDom[i+1];
        let taskObj = selectedProj.taskList[i];
        if (task !== undefined) {
            if (taskObj.name.toUpperCase().indexOf(filter) > -1) {
                task.style.display = "grid";
            } else {
                task.style.display = "none";
            };
        }
    };
};

export default searchbar;