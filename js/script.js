let todos = [];

// function to add a new todo item
function addTodo() {
  const todoInput = document.getElementById("todo-input");
  const todoDate = document.getElementById("todo-date");
  if (todoInput.value === "" || todoDate.value === "") {
    alert("Please enter both task and date.");
  } else {
    const newTodos = {
      task: todoInput.value,
      date: todoDate.value,
    };

    todos.push(newTodos);
    renderTodos();

    // clear the input fields after adding the todo
    todoInput.value = "";
    todoDate.value = "";
  }
}

// function to render the todo list
function renderTodos() {
  const todoList = document.getElementById("todo-list");

  // clear the todo list before rendering
  todoList.innerHTML = "";

  // render each todo item
  todos.forEach((todo, _) => {
    todoList.innerHTML += `
      <li> <p class="text-2xl">${todo.task}<span class="text-sm text-gray-500" >${todo.date}</span></p><br>
      </li>`;
  });
}

// function to remove all todo items
function removeAllTodos() {
  todos = [];
  renderTodos();
}
