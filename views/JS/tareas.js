function loadTasks() {
    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
    days.forEach(day => {
        const tasks = JSON.parse(localStorage.getItem(day)) || [];
        const taskList = document.querySelector(`#${day.toLowerCase()} .task-list`);
        tasks.forEach(task => {
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task');
            taskDiv.innerHTML = `${task} <button class="btn btn-danger btn-sm" onclick="removeTask(this, '${day}')">Eliminar</button>`;
            taskList.appendChild(taskDiv);
        });
    });
}

// Función para guardar tareas en el almacenamiento local
function saveTask(day, task) {
    const tasks = JSON.parse(localStorage.getItem(day)) || [];
    tasks.push(task);
    localStorage.setItem(day, JSON.stringify(tasks));
}

// Función para eliminar tareas y actualizar el almacenamiento local
function removeTask(button, day) {
    const taskDiv = button.parentElement;
    const taskText = taskDiv.textContent.replace('Eliminar', '').trim();
    taskDiv.remove();

    // Actualizar almacenamiento local
    const tasks = JSON.parse(localStorage.getItem(day)) || [];
    const updatedTasks = tasks.filter(task => task !== taskText);
    localStorage.setItem(day, JSON.stringify(updatedTasks));
}
document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const taskInput = document.getElementById('taskInput');
    const dayInput = document.getElementById('dayInput');
    const taskValue = taskInput.value;
    const selectedDay = dayInput.value.toLowerCase();

    if (taskValue && selectedDay) {
        const taskList = document.querySelector(`#${selectedDay} .task-list`);

        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.innerHTML = `${taskValue} <button class="btn btn-danger btn-sm" onclick="removeTask(this)">Eliminar</button>`;
        
        taskList.appendChild(taskDiv);

        taskInput.value = '';
        dayInput.value = '';
    }
});

loadTasks();