'use strict';

const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList"),
    toDoClear = document.querySelector(".clear");

const TODOS_LS = 'toDos';

let toDos = []; //toDos는 array임

// list 삭제
function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode; //btn의 부모를 찾기위해 console.dir사용해서 알아내기 >li
    toDoList.removeChild(li); //여기까지는 del 작동, 근데 새로고침하면 남아있음
    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id); //parseInt 스트링을 숫자로 바꿔줌
    }); //claenTOdos와 filter가 하는 것은 filterFn이 체크가 된 아이템들의 array를 주는것
    toDos = cleanToDos; // 얘때문에 const toDos를 let으로 바꿈 
    saveToDOs();
}

// 전체 삭제
function clearTodos() {
    localStorage.removeItem(TODOS_LS, JSON.stringify(toDos)); //local storage 삭제
    let ul = document.querySelector('ul').innerHTML = '';
}

// local storage 저장
function saveToDOs() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
} //localStorage.setItem (key, value) 추가

function paintTodo(text) {
    const li = document.createElement("li");

    const finishBtn = document.createElement("button");
    finishBtn.innerText = "✔️";
    finishBtn.addEventListener("click", () => {
        div.style.textDecoration = "line-through";
    });

    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);

    toDoClear.addEventListener("click", clearTodos);

    const div = document.createElement("div");
    const newId = toDos.length + 1;
    div.innerText = text;

    li.appendChild(div);
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
};

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
};

function init() {
    loadTodos();
    toDoForm.addEventListener("submit", hadnleSubmit);
}
init();
