const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todolist");
const filterOption = document.querySelector(".filter-todos");
const clearBtn = document.querySelector(".clear-btn");

todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", checkRemove);
filterOption.addEventListener("change", filterTodos);
document.addEventListener("DOMContentLoaded", getLocalTodos);
clearBtn.addEventListener("click", clearAll);

function addTodo(e) {
  e.preventDefault();
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    const todoDiv = createTodoElement(todoText);
    appendTodoElement(todoDiv);
    saveLocalTodos(todoText);
    todoInput.value = "";
  }
}

function createTodoElement(todoText) {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = `
    <li>${todoText}</li>
    <span><i class="fas fa-check-circle"></i></span>
    <span><i class="fas fa-times-circle"></i></span>`;
  todoDiv.innerHTML = newTodo;
  return todoDiv;
}

function appendTodoElement(todoDiv) {
  todoList.appendChild(todoDiv);
}

function checkRemove(e) {
  const target = e.target;
  const todo = target.closest(".todo");

  if (target.classList.contains("fa-check-circle")) {
    todo.classList.toggle("completed");
  } else if (target.classList.contains("fa-times-circle")) {
    todo.remove();
    removeLocalTodo(todo);
  }
}

function filterTodos() {
    const todos = Array.from(todoList.children);

    todos.forEach((todo) => {
        switch (filterOption.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                todo.style.display = todo.classList.contains("completed") ? "flex" : "none";
                break;
            case "uncompleted":
                todo.style.display = !todo.classList.contains("completed") ? "flex" : "none";
                break;
        }
    });
}

function saveLocalTodos(todo) {
  let savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  savedTodos.push(todo);
  localStorage.setItem("todos", JSON.stringify(savedTodos));
}

function getLocalTodos() {
  let savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

  savedTodos.forEach((todo) => {
    const todoDiv = createTodoElement(todo);
    appendTodoElement(todoDiv);
  });
}

function removeLocalTodo(todo) {
  let savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const filteredTodos = savedTodos.filter((t) => t !== todo.children[0].innerText);
  localStorage.setItem("todos", JSON.stringify(filteredTodos));
}

function clearAll() {
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
    localStorage.removeItem("todos");
}

function removeLocalTodo() {
    localStorage.removeItem("todos");
}