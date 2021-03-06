const project = name => {
    //array to store child tasks
    let taskList = [];
    //store project name
    let projectName = name;
    //toggle boolean for sorting dates
    let dateSort = false;

    //task factory
    const task = (name, time, date, priority) => {
        let taskName = name;
        //format date string to yyyy-MM-dd
        let treatedDate = date.split("/").reverse().join("-");
        //date string to date obj
        date = new Date(treatedDate);
        //notes storage
        let notes = "";
        //task status
        let isActive = true;
        //task expanded
        let isCollapsed = true;
        //parent name
        let parentName = projectName;
        //checkbox storage
        let subList = [];

        //subtask factory
        const subTask = (name) => {
            //subTask status
            let isSubTaskActive = true;
            // parent name
            let parentTaskName = taskName;

            return {
                name,
                isSubTaskActive,
                parentTaskName
            };
        };

        const addSubTask = subTask => subList.push(subTask);

        //toggle Subtask status
        const toggleSubTaskStatus = subTask => subTask.isSubTaskActive === true ? subTask.isSubTaskActive = false : subTask.isSubTaskActive = true;

        //find task in the array
        const findSubTask = subTaskName => subList.find(subTask => subTask.name === subTaskName);

        //find subtask index in the array by it's name
        const findSubTaskIdx = subTaskName => subList.findIndex(subTask => subTask.name === subTaskName);

        //delete subtask from task
        const deleteSubTask = idx => subList.splice(idx, 1);

        return {
            name,
            time,
            date,
            priority,
            notes,
            subList,
            isActive,
            isCollapsed,
            parentName,
            subTask,
            addSubTask,
            toggleSubTaskStatus,
            findSubTask,
            findSubTaskIdx,
            deleteSubTask
        };
    };

    //add new task to project
    const addTask = task => taskList.push(task);

    //toggle task status
    const toggleTaskStatus = task => task.isActive === true ? task.isActive = false : task.isActive = true;

    //toggle task display
    const toggleTaskDisplay = task => task.isCollapsed === true ? task.isCollapsed = false : task.isCollapsed = true;

    //find task index in the array by it's name
    const findTaskIdx = taskName => taskList.findIndex(task => task.name === taskName);

    //find task in the array
    const findTask = taskName => taskList.find(task => task.name === taskName);

    //delete task from project
    const deleteTask = idx => taskList.splice(idx, 1);

    //sort task list by date
    const sortDates = () => {
        dateSort === false ? taskList.sort((a, b) => a.date - b.date) : taskList.sort((a, b) => b.date - a.date);
        //toggle boolean value
        dateSort = !dateSort;
    };

    return {
        name,
        taskList,
        dateSort,
        task,
        addTask,
        toggleTaskStatus,
        toggleTaskDisplay,
        sortDates,
        findTaskIdx,
        findTask,
        deleteTask
    };
};

export default project;