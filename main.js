'use strict';

let inputBox = document.getElementById('입력');  // 할 일 입력창
let addToDo = document.getElementById('addToDo');      // 버튼
let todolist = document.getElementById('list');    // 할 일 리스트창

addtodo.addEventListener('click', function () {    // 버튼에 클릭 이벤트가 발생하면
    let list = document.createElement('li');     // html 'li' 태그 만들기
    if (!inputBox.value)            // 할 일 입력창에 내용이 입력되지 않으면 alert 발생
        alert('내용을 입력해 주세요!');
    else {
        list.innerText = inputBox.value;  // <li>입력된 할 일</li>
        todolist.appendChild(list);       // 할 일 리스트창에 자식으로 붙이기
        inputBox.value = "";               // 할 일 입력창 초기화
    }

    list.addEventListener('click', function () {      // 만들어진 list에 클릭 이벤트가 발생하면 줄 긋기
        list.style.textDecoration = "line-through";
    })
    list.addEventListener('dblclick', function () {   // list에 더블클릭 이벤트가 발생하면 할 일 리스트창에서 지우기
        todolist.removeChild(list);
    })

    //작도안됨 수정필요해요ㅠㅠ흑흑..