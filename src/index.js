document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get input value
    const taskInput = document.getElementById('new-task-description');
    const taskText = taskInput.value;

    // Create new task list item
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Append task to the list
    taskList.appendChild(taskItem);

    // Clear input field
    taskInput.value = '';
  });
});
