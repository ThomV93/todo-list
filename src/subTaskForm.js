import project from "./projectFactory";

const subTaskForm = () => { 

    const changeName = () => {
        //cache DOM element
        const formTitle = document.getElementById("form-title");
        formTitle.innerHTML = "New Subtask";
    };

    //creator section
    const creator = task => {
        //cache DOM element
        const formInput = document.getElementById("form-name");
        //store user input
        let subTaskName = formInput.value;

        if(subTaskName !== ""){
            //create new subtask
            let newSubTask = task.subTask(subTaskName);
            //add subtask to array
            task.addSubTask(newSubTask);
            //close form
            close();
        } else {
            formName.style.backgroundColor = "rgba(255, 0, 52, 0.2)";
        };
    };

    const close = () => {
        document.body.removeChild(document.body.firstChild);
    };

    return {
        changeName,
        creator,
        close
    };

};

export default subTaskForm;