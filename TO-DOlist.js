const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const task = todoInput.value.trim();

  if (task) {
    const listItem = document.createElement("li");
    const taskText = document.createElement("span");
    taskText.textContent = task;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      todoList.removeChild(listItem);
    });
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);
    todoInput.value = "";
  }
});
