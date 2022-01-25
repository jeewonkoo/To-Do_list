const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form");
const todoList = document.getElementById("todo-list");

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText
}


function handleToDoSubmit(event) {
    event.preventDefualt();
    const newTodo = todoInput.value;
    todoInput.value = "";
    paintTodo(newTodo);

}

todoForm.addEventListener("submit", handleToDoSubmit);