window.addEventListener('load', () => {
    const form = document.querySelector('#task-form');
    const input = document.querySelector('#task-input');
    const listEl = document.querySelector('#tasks');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const task = input.value;

        if (!task) {
            alert('Please fill out the task');
            return;
        } 

        const taskEl = document.createElement('div');
        taskEl.classList.add('task');

        const taskContentEl = document.createElement('div');
        taskContentEl.classList.add('task-content');

        taskEl.appendChild(taskContentEl);

        const taskInputEl= document.createElement('input');
        taskInputEl.classList.add('task-text');
        taskInputEl.type = 'text';
        taskInputEl.value = task;
        taskInputEl.setAttribute('readonly', 'readonly');

        taskContentEl.appendChild(taskInputEl);

        const taskActionsEl = document.createElement('div');
        taskActionsEl.classList.add('task-actions');

        const taskEditBtn = document.createElement('button');
        taskEditBtn.classList.add('task-edit');
        taskEditBtn.innerHTML = 'Edit';

        const taskDeleteBtn = document.createElement('button');
        taskDeleteBtn.classList.add('task-delete');
        taskDeleteBtn.innerHTML = 'Delete';

        taskActionsEl.appendChild(taskEditBtn);
        taskActionsEl.appendChild(taskDeleteBtn);

        taskEl.appendChild(taskActionsEl);

        listEl.appendChild(taskEl);

        input.value = '';

        taskEditBtn.addEventListener('click', () => {
            if(taskEditBtn.innerText.toLowerCase() == 'edit'){
                taskInputEl.removeAttribute('readonly');
                taskInputEl.focus();
                taskEditBtn.innerText = 'save';
            } else {
                taskInputEl.setAttribute('readonly','readonly');
                taskEditBtn.innerText = 'Edit';
            };
            
        });

        taskDeleteBtn.addEventListener('click', () => {
            listEl.removeChild(taskEl);
        });
    });
});