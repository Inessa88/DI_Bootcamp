const tasks = [];
const form = document.getElementById('form');
const ul = document.getElementById('list-tasks');
form.addEventListener('submit', handleSubmit);


function handleSubmit(e){
    console.log('form was submitted')
    e.preventDefault()
    const formData = new FormData(form);
    const task = formData.get('task');
    if (task==='') return;
    tasks.push(task);
    renderTasks(tasks);
    form.reset();
}

function renderTasks(tasks){
    ul.innerHTML='';
    for(const task of tasks){
    const li = generateLi(task);
    ul.appendChild(li);
    }
}

function generateLi(task){
    const li = document.createElement('li');
    
    const xMark = document.createElement('i');
    xMark.classList.add('fa-solid', 'fa-xmark')
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox')
    const span = document.createElement('span');
    span.innerText = task;
    li.append(xMark);
    li.append(checkBox);
    li.append(span);
    return li;
}