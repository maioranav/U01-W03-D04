const taskTemplate = (task, id) => `
         <div class="task" id="task${id}" onclick="taskCompleted(${id})">
            <span class="delete" onclick="deleteTask(${id})">❌</span><span 
              id="titleTask${id}">${task}</span>
         </div>
`;

const createNewTask = () => {
  const taskList = document.getElementById("task-list");
  const newTaskTitle = document.getElementById("newTask").value;
  const newTaskID = taskList.children.length + 1;
  taskList.innerHTML += taskTemplate(newTaskTitle, newTaskID);
};

const deleteTask = (id) => {
  const taskList = document.getElementById("task-list");
  const taskToRemove = document.getElementById(`task${id}`);
  taskList.removeChild(taskToRemove);
};
const taskCompleted = (id) => {
  document.getElementById(`titleTask${id}`).classList.toggle("completed");
};
