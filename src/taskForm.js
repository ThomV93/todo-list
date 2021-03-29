import {format} from 'date-fns';

const taskForm = () => {

    //cache each input element
    const formName = document.getElementById("form-name");
    const formTime = document.getElementById("form-time");
    const formDate = document.getElementById("form-date");
    const formFlag = document.getElementById("form-flag");
    const formNotes = document.getElementById("form-notes");

    
    // ----------- Aux Functions Section -----------------


    //check if task is due today and push to today project object
    const checkIfToday = (todayObj, task, date) => {
        let todayDate = format(new Date(), "yyyy/MM/dd");
        let formattedDate = format(date, "yyyy/MM/dd");

        if(todayDate === formattedDate){
            todayObj.addTask(task);
        };
    };

    //display correct flag
    const displayCorrectFlag = (flag, bool) => {
        //display correct flag
        bool === false ? flag.src = "icons/red-flag.svg" : flag.src = "icons/flag.svg";
    };

    //close form
    const close = () => {
        document.body.removeChild(document.body.firstChild);
    };


    // -------------- Creator section -----------------


    const creator = (selectedProj, todayObj) => {
        //store user input
        let taskName = formName.value;
        let taskTime = formTime.value;
        let taskDate = formDate.value;
        let taskPriority = formFlag.src.indexOf("red-flag") != -1 ? "high" : "regular";
        let taskNotes = formNotes.value;

        //create new task
        let newTask = selectedProj.task(taskName, taskTime, taskDate, taskPriority);
        //add task notes
        newTask.notes = taskNotes;
        //add task to the project
        selectedProj.addTask(newTask);
        //check if the task is due today and add to today's section as well
        checkIfToday(todayObj, newTask, newTask.date);
    };


    // --------------- Editor Section ----------------


    //display stored values in the editor
    const displayStoredValues = (selectedProj, idx) => {
        //cache task form title
        const formTitle = document.getElementById("form-title");

        //alter form's title
        formTitle.innerHTML = "Edit Task";

        //display correct flag
        selectedProj.taskList[idx].priority === "high" ? formFlag.src = "icons/red-flag.svg" : formFlag.src = "icons/flag.svg";

        //display values stored in the object
        formName.value = selectedProj.taskList[idx].name;
        formTime.value = selectedProj.taskList[idx].time;
        formDate.value = format(selectedProj.taskList[idx].date, "yyyy-MM-dd");
        formNotes.value = selectedProj.taskList[idx].notes;
    };

    const editor = (selectedProj, idx, todayObj) => {
        //get selected task
        let selectedTask = selectedProj.taskList[idx];
        
        //store new values
        selectedTask.name = formName.value;
        selectedTask.time = formTime.value;
        selectedTask.date = new Date(formDate.value);
        selectedTask.priority = formFlag.src.indexOf("red-flag") != -1 ? "high" : "regular";
        selectedTask.notes = formNotes.value;

        //check if the task is due today and add to today's section as well
        checkIfToday(todayObj, selectedTask, selectedTask.date);
    };


    return{
        displayCorrectFlag,
        close,
        creator,
        displayStoredValues,
        editor
    };
};

export default taskForm;