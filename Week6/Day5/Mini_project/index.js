
const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', saveToLocalStorage);


let myTasks = localStorage.getItem('myTasks') ? JSON.parse(localStorage.getItem('myTasks')) : [];
let taskEditId = window.location.search.substring(1);
let editMode = false;
if (taskEditId) {
    let obj = myTasks.find(o => o.task_id === taskEditId)
    if (obj) {
        const name = document.getElementById('name');
        name.setAttribute('value', obj.name);
        const description = document.getElementById('description');
        description.setAttribute('value', obj.description);
        const start_time = document.getElementById('start_time');
        start_time.setAttribute('value', obj.start_time);
        const end_time = document.getElementById('end_time');
        end_time.setAttribute('value', obj.end_time);
        editMode = true;        
    }
}

function saveToLocalStorage(e){
    const formInfo = e.target.elements;
    const formName = formInfo.name.value;
    const formDescription = formInfo.description.value;
    const formStart = formInfo.start_time.value;
    const formEnd = formInfo.end_time.value;
    if (new Date(formStart) >= new Date(formEnd)) {
        alert('End Date can not be less than Start Date!');
        e.preventDefault();
        return
    }
    const task = {
        name: formName, description: formDescription,
        start_time: formStart, end_time: formEnd,
        isCompleted: false
    };
    if (!editMode) {
        myTasks.push(task);
    } else {
        let indexOfObject = myTasks.findIndex(o => o.task_id === taskEditId);
        myTasks[indexOfObject] = task;
    }
    
    myTasks.sort(sorting);
    let taskId = 0;
    for (const task of myTasks) {
        task.task_id = `task_${taskId}`;
        taskId++;
    }
    localStorage.setItem('myTasks', JSON.stringify(myTasks));
}

function sorting(a,b) {
    return new Date(a.start_time) - new Date(b.start_time);    
}



    

