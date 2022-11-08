// selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todolist")

// event listeners
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", checkRemove);

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
        todo.remove();
    }
}