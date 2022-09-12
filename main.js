'use strict'
function addItem() {
    let list = document.getElementById('todolist');
    let todo = document.getElementById('item');
    let listitem = document.getElementById('li');
    let xbtn = document.getElementById('button');
}

xbtn.onclick = function (e) {
    let pnode = e.target.parentNode;
    list.removeChild(pnode);
}

listitem.innerText = todo.value;
listitem.appendChild(xbtn);

list.appendChild(listitem);

todo.value = '';
todo.focus();