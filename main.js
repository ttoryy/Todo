'use strict';

const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

const toDos = [];

function saveToDOs() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

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
    const newId = toDos.length + 1;
    span.innerText = text
    li.appendChild(span);
    li.appendChild(finishBtn);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDOs();
}

function hadnleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value = "";
}

function loadTodos() {
    const loadedToDos = localStorage.getItem(TODOS_LS)
    if (loadedToDos !== null) {
        const parseToDos = JSON.parse(loadedToDos);
        console.log(parseToDos);
        parseToDos.forEach(function (toDo) {
            paintTodo(toDo.text);
        });
    }
}

function init() {
    loadTodos();
    toDoForm.addEventListener("submit", hadnleSubmit)
}
init();