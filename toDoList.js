// selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todolist");
const filterOption = document.querySelector(".filter-todos");


// event listeners
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", checkRemove);
filterOption.addEventListener("click", filterTodos);
document.addEventListener("DOMContentLoaded", getLocalTodos)

// functions
function addTodo(e) {
    e.preventDefault();
    // console.log(e);
    // get to do value
    // create new todo
    // add to dom
    // reset input
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = `
    <li>${todoInput.value}</li>
    <span><i class="fa-sharp fa-solid fa-circle-check"></i></span>
    <span><i class="fa-sharp fa-solid fa-xmark"></i></span>`;
    todoDiv.innerHTML = newTodo;
    // append to todolist
    todoList.appendChild(todoDiv);
    saveLocalTodos(todoInput.value)
    todoInput.value = "";
}

function checkRemove(e) {
    const classList = [...e.target.classList];
    const item = e.target;
    console.log(item.parentElement.parentElement);
    if (classList[1] = "fa-circle-check") {
        const todo = item.parentElement.parentElement;
        todo.classList.toggle("completed");
    } else if (classList[1] = "fa-xmark") {
        const todo = item.parentElement.parentElement;
        // we add removeLocalTodo by the last function
        removeLocalTodo(todo);
        // 
        todo.remove();
    }
}

function filterTodos(e) {
    console.log(todoList.childNodes);
    const todos = [...todoList.childNodes];
    todos.forEach((todo) => {
            switch (e.target.value) {
                case "all":
                    todo.style.display = "flex";
                    break;
                case "completed":
                    if (todo.classList.contains("completed")) {
                        todo.style.display = flex;
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                case "uncompleted":
                    if (!todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
            }
        });
}

function saveLocalTodos(todo) {
    // localStorage.setItem("lastname", "Smith");
    // localStorage.getItem("lastname");
    let savedTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
    savedTodos.push(todo);
    localStorage.setItem
    localStorage.setItem("todos", JSON.stringify(savedTodos));
    // at this time we shoud added --saveLocalTodos(todoInput.value)-- to firs function of or code on the top!
}

function getLocalTodos(todo) { 
    let savedTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

    savedTodos.forEach((todo) => {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
    const newTodo = `
    <li>${todo}</li>
    <span><i class="fa-sharp fa-solid fa-circle-check"></i></span>
    <span><i class="fa-sharp fa-solid fa-xmark"></i></span>`;
    todoDiv.innerHTML = newTodo;
    todoList.appendChild(todoDiv);
    });
 }
//  next step: add event! DOMcontentLoaded

function removeLocalTodo (todo) {
    // add removeLocalTodo to removeCheck function!
    let savedTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
    const filterdTodos = savedTodos.filter(
      (t) => t !== todo.children[0].innerText
    );
    localStorage.setItem("todos", JSON.stringify(filterdTodos));
}