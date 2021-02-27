//import necessary modules
import navbar from "./navbar";
import sidebar from "./sidebar";
import project from "./factory";

const todoApp = (() => {
    //cache DOM elements
    const contentContainer_div = document.getElementById("content");

    //initializer function
    const pageLoad = () => {
        navbar(contentContainer_div);
        sidebar(contentContainer_div);
    };

    let investing = project("investing");

    let task1 = investing.task("tea", "15h", "08/21");
    let task2 = investing.task("dinner", "18h", "08/21");
    investing.addTask(task1);
    investing.addTask(task2);
    console.log(investing.taskList);
    

    pageLoad();
})();