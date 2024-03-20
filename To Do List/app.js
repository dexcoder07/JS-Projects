const addTaskButton = document.querySelector('#addTask');
const taskContainer = document.querySelector('.list-container');
const listItem = document.querySelector('li');


addTaskButton.addEventListener('click', function(){

    let inputValue = document.querySelector('#input-box');
    if(inputValue.value == ''){
        alert("You must write something");
    }
    else{
        const newTask = document.createElement("li");
        newTask.innerHTML = inputValue.value;
        taskContainer.appendChild(newTask);
        inputValue.value = "";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        newTask.appendChild(span);
        saveData()
    }

}, false)


taskContainer.addEventListener('click', function(e) {
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
}, false)



function saveData(){
    localStorage.setItem("data", taskContainer.innerHTML);
}


function showTask(){
    taskContainer.innerHTML = localStorage.getItem("data");
}

showTask();