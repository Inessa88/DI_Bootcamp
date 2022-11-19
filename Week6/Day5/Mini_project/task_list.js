function drawListOfTasks(){
    const section = document.getElementById("task");
    section.textContent = '';
    let myTasks = localStorage.getItem('myTasks') ? JSON.parse(localStorage.getItem('myTasks')) : [];

    currentDate = new Date();
    let iterNum = 0;
    for (let task of myTasks) {
            let taskName = task.name;
            let taskDescription = task.description;
            let taskStartTime = task.start_time;
            let taskEndTime = task.end_time;
            let taskIsCompleted = task.isCompleted;
            let millisecDelta = new Date(new Date(taskEndTime) - currentDate - 2*60*60*1000);
            let daysLeft, monthsLeft, yearsLeft;
            [daysLeft, monthsLeft, yearsLeft] = millisecDelta.toLocaleDateString().split('/');
            let timeLeft = millisecDelta.toLocaleTimeString();
            let untillDeadline;
            if ((new Date(taskEndTime) - currentDate) < 0 && !taskIsCompleted) {
                untillDeadline = 'Deadline already has passed!';
            } else if (taskIsCompleted) {
                untillDeadline = 'Task is completed!';
            } else {
                untillDeadline = `${daysLeft - 1} days, ${monthsLeft - 1} months, ${yearsLeft - 1970} years and ${timeLeft}`
            }
            
            let div = document.createElement('div');
            div.classList.add("one_task");
            div.style.border = '1px solid gray';
            div.style.backgroundColor = taskIsCompleted ? 'rgb(99, 204, 99)' : 'rgb(164, 99, 224)';
            if (!taskIsCompleted && (new Date(taskEndTime) - currentDate) < 0) {
                div.style.backgroundColor = 'grey';
            }
            let nameHeading = document.createElement('h3');
            nameHeading.innerText = taskName;
            nameHeading.setAttribute('hidden_description_id', `descr_${iterNum}`);
            nameHeading.addEventListener('click', showDescription);
            div.appendChild(nameHeading);
            let descriptionPar = document.createElement('p');
            descriptionPar.classList.add("descriptionPar");
            descriptionPar.innerText = taskDescription;
            descriptionPar.style.display = 'none';
            descriptionPar.setAttribute('id', `descr_${iterNum}`);
            div.appendChild(descriptionPar);
            let startPar = document.createElement('p');
            startPar.innerText = taskStartTime;
            div.appendChild(startPar);
            let timeLeftPar = document.createElement('p');
            timeLeftPar.innerText = untillDeadline;
            div.appendChild(timeLeftPar);
            let iCompletedThisTask = document.createElement('p');
            iCompletedThisTask.innerText = 'I completed this task:';
            div.appendChild(iCompletedThisTask);
            let isCompletedCheckBox = document.createElement('input');
            isCompletedCheckBox.setAttribute('type', 'checkbox');
            isCompletedCheckBox.setAttribute('task_id', `task_${iterNum}`);
            isCompletedCheckBox.checked = taskIsCompleted ? true: false;
            isCompletedCheckBox.addEventListener('click', changeTaskCompletion);
            div.appendChild(isCompletedCheckBox);
            const divEdit = document.createElement('div');
            const anchor = document.createElement('a');
            anchor.href = `index.html?task_${iterNum}`;
            const editButton = document.createElement('button');
            editButton.setAttribute('id', 'editButton');
            editButton.textContent = 'EDIT';
            anchor.appendChild(editButton);
            divEdit.appendChild(anchor);
            div.appendChild(divEdit);

            let deleteButtonDiv = document.createElement('div');
            let deleteButton = document.createElement('button');
            deleteButton.setAttribute('id', 'deleteButton');
            deleteButton.innerText = 'DELETE';
            deleteButton.setAttribute('task_id', `task_${iterNum}`);
            deleteButton.addEventListener('click', deleteTask);
            deleteButtonDiv.appendChild(deleteButton);
            div.appendChild(deleteButtonDiv);
            section.appendChild(div);
            iterNum ++;
            }
};

drawListOfTasks()

function showDescription(e) {
    let hiddenDescriptionId = e.target.getAttribute('hidden_description_id');
    let descriptionPar = document.getElementById(hiddenDescriptionId);
    descriptionPar.style.display = descriptionPar.style.display === 'none' ? 'block' : 'none';
}

function changeTaskCompletion(e) {
    let taskId = e.target.getAttribute('task_id');
    let myTasks = localStorage.getItem('myTasks') ? JSON.parse(localStorage.getItem('myTasks')) : [];
    let obj = myTasks.find(o => o.task_id === taskId);
    obj.isCompleted = !obj.isCompleted;
    localStorage.setItem('myTasks', JSON.stringify(myTasks));
    drawListOfTasks();
}

function deleteTask(e) {
    const question = prompt('If you are sure - type: yes');
    if (question === 'yes') {
        let taskId = e.target.getAttribute('task_id');
        let myTasks = localStorage.getItem('myTasks') ? JSON.parse(localStorage.getItem('myTasks')) : [];
        let indexOfObject = myTasks.findIndex(o => o.task_id === taskId);
        myTasks.splice(indexOfObject, 1);
        localStorage.setItem('myTasks', JSON.stringify(myTasks));
        drawListOfTasks();
    }
    
}

