document.addEventListener('DOMContentLoaded', () => {
              const taskInput = document.getElementById('taskInput');
              const addTaskButton = document.getElementById('addTaskButton');
              const taskList = document.getElementById('taskList');
              const taskCounterTotal = document.getElementById('totalTasks');
              const taskCounterCompleted = document.getElementById('completedTasks');
              const clearAllButton = document.getElementById('clearAllButton');
            
              loadTasks();
            
              addTaskButton.addEventListener('click', () => {
                const taskText = taskInput.value.trim();
                if (taskText) {
                  addTaskToList(taskText);
                  taskInput.value = '';  
                  updateCounters();
                  saveTasks();
                }
              });
            
              function addTaskToList(taskText) {
                const taskItem = document.createElement('li');
                taskItem.textContent = taskText;
            
                taskItem.addEventListener('click', () => {
                  taskItem.classList.toggle('completed');
                  updateCounters();
                  saveTasks();
                });
            
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Supprimer';
                deleteButton.classList.add('deleteButton');
                deleteButton.addEventListener('click', (e) => {
                  e.stopPropagation(); 
                  taskItem.remove();
                  updateCounters();
                  saveTasks();
                });
            
                taskItem.appendChild(deleteButton);
                taskList.appendChild(taskItem);
              }
            
              function updateCounters() {
                const totalTasks = taskList.children.length;
                const completedTasks = taskList.querySelectorAll('.completed').length;
                taskCounterTotal.textContent = `Total : ${totalTasks}`;
                taskCounterCompleted.textContent = `Terminées : ${completedTasks}`;
              }
            
              function saveTasks() {
                const tasks = [];
                taskList.querySelectorAll('li').forEach((taskItem) => {
                  tasks.push({
                    text: taskItem.textContent.replace('Supprimer', '').trim(),
                    completed: taskItem.classList.contains('completed')
                  });
                });
                localStorage.setItem('tasks', JSON.stringify(tasks));
              }
            
              function loadTasks() {
                const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
                tasks.forEach(task => addTaskToList(task.text));
                updateCounters();
              }
            
              clearAllButton.addEventListener('click', () => {
                taskList.innerHTML = '';
                updateCounters();
                saveTasks();
              });
            });