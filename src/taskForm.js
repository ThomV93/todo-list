import {format} from 'date-fns';

const taskForm = () => {

    //cache each input element
    const formName = document.getElementById("form-name");
    const formTime = document.getElementById("form-time");
    const formDate = document.getElementById("form-date");
    const formFlag = document.getElementById("form-flag");
    const formNotes = document.getElementById("form-notes");

    
    // ----------- Aux Functions Section -----------------

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


    const creator = (selectedProj) => {
        //store user input
        let taskName = formName.value;
        let taskTime = formTime.value;
        let taskDate = formDate.value;
        let taskPriority = formFlag.src.indexOf("red-flag") != -1 ? "high" : "regular";
        let taskNotes = formNotes.value;
        let required = [formName, formTime, formDate];

        if(taskName !== "" && taskTime !== "" && taskDate !== "") {
            //create new task
            let newTask = selectedProj.task(taskName, taskTime, taskDate, taskPriority);
            //add task notes
            newTask.notes = taskNotes;
            //add task to the project
            selectedProj.addTask(newTask);
            //close form
            close();
        } else {
            required.map(field => field.value === "" ? field.style.backgroundColor = "rgba(255, 0, 52, 0.2)" : field.style.backgroundColor = "#fff");
        };
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

    const editor = (selectedProj, idx) => {
        //get selected task
        let selectedTask = selectedProj.taskList[idx];

        if(formName.value !== "") {
            //store new values
            selectedTask.name = formName.value;
            selectedTask.time = formTime.value;
            selectedTask.date = new Date(formDate.value);
            selectedTask.priority = formFlag.src.indexOf("red-flag") != -1 ? "high" : "regular";
            selectedTask.notes = formNotes.value;
            //close form
            close();
        } else {
            formName.style.backgroundColor = "rgba(255, 0, 52, 0.2)";
        };
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