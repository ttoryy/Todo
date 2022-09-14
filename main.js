const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function paintTodo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener('click', () => {
        li.remove(span);
    })
    const finishBtn = document.createElement("button");
    finishBtn.innerText = "✔️";
    finishBtn.addEventListener('click', () => {
        span.style.textDecorationLine = "line-through";
    })
    const span = document.createElement("span");
    span.innerText = text
    li.appendChild(span);
    li.appendChild(finishBtn);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

function hadnleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value = "";
}

function loadTodos() {
    const toDos = localStorage.getItem(TODOS_LS)
    if (toDos !== null) {
    }
}

function init() {
    loadTodos();
    toDoForm.addEventListener("submit", hadnleSubmit)
}
init();