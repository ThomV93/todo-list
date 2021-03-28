import project from "./projectFactory";

const projectForm = () => {

    //creator section
    const creator = array => {
        //select input element
        const formName = document.getElementById("form-name");
        //store user input
        let projectName = formName.value;

        //create new project
        let newProject = project(projectName)
        //add project to array
        array.push(newProject);
    };

    //display stored values in the editor
    const displayStoredValues = selectedProj => {
        //cache DOM elements
        const formTitle = document.getElementById("form-title");
        const formName = document.getElementById("form-name");
        //alter form's title
        formTitle.innerHTML = "Edit Project";
        //display value stored in the object
        formName.value = selectedProj.name;
    };

    //editor section
    const editor = selectedProj => {
        //select each input element
        const formName = document.getElementById("form-name");
        //store new value in the object
        selectedProj.name = formName.value;
    };

    //close form
    const close = () => {
        document.body.removeChild(document.body.firstChild);
    };

    return {
        creator,
        displayStoredValues,
        editor,
        close
    };

};

export default projectForm;