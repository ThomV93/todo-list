const project = name => {
    //array to store child tasks
    let taskList = [];
    //store project name
    let projectName = name;
    //toggle boolean for sorting dates
    let dateSort = false;

    //task factory
    const task = (name, time, date, priority) => {
        //format date string to yyyy-MM-dd
        let treatedDate = date.split("/").reverse().join("-");
        //date string to date obj
        date = new Date(treatedDate);
        //notes storage
        let notes = "";
        //checkbox storage
        let subList = [];
        //task status
        let isActive = true;
        //parent name
        let parentName = projectName;

        return {
            name,
            time,
            date,
            priority,
            notes,
            subList,
            isActive,
            parentName
        };
    };

    //add new task to project
    const addTask = task => taskList.push(task);

    //find task index in the array by it's name
    const findTaskIdx = taskName => taskList.findIndex(task => task.name === taskName);

    //find task in the array
    const findTask = taskName => taskList.find(task => task.name === taskName);

    //delete task from project
    const deleteTask = idx => taskList.splice(idx, 1);

    return {
        name,
        taskList,
        dateSort,
        task,
        addTask,
        findTaskIdx,
        findTask,
        deleteTask
    };
};

export default project;