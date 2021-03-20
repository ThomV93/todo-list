const project = name => {
    let taskList = [];

    //task factory
    const task = (name, time, date, priority) => {
        //notes storage
        let notes = "";
        //checkbox storage
        let subList = [];
        //task status
        let isActive = true;

        return {
            name,
            time,
            date,
            priority,
            notes,
            subList,
            isActive
        };
    };

    //add new task to project
    const addTask = task => taskList.push(task);

    //find text index in the array by it's name
    const findTaskIdx = taskName => taskList.findIndex(task => task.name === taskName);

    //delete task from project
    const deleteTask = idx => taskList.splice(idx, 1);

    return {
        name,
        taskList,
        task,
        addTask,
        findTaskIdx,
        deleteTask
    };
};

export default project;