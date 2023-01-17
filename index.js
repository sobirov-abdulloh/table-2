"use strict";
window.addEventListener("load", function () {
  let taskInput = document.getElementsByName("taskInput")[0];
  let timeInput = document.getElementsByName("timeInput")[0];
  let taskBtn = document.getElementById("task-btn");
  let todoList = document.querySelector(".todo_list");
  let todoDatas = [];
  let todoData = {};
  taskBtn.addEventListener("click", function (event) {
    event.preventDefault();
    // OBJECTGA INOUT VALUELARNI KIRITAMIZ VA SHU OBJNI ARRAY ICHIGA KIRITIB YUBORAMIZ
    if (taskInput.value && timeInput.value) {
      let task = taskInput.value;
      let time = timeInput.value;
      todoData = {
        task: task,
        time: time,
      };
      todoDatas.push(todoData);
      todoData = {};
      taskInput.value = "";
      timeInput.value = "";
    } else {
      alert("add password");
    }
    // TODODATASNI ICHIDAGI MALUMOTLARNI HTMLDA YANGI ELEMENT YARATIB YUBORAMIZ;
    let todoDiv;
    let p;
    let i;
    todoDatas.forEach((element, index) => {
        todoList.style.padding = "10px";
      // HTMLDAGI TODO LIST DIVNI ICHIGA YANGI DIV YARATAMIZ
      todoDiv = document.createElement("div");
      p = document.createElement("p");
      i=document.createElement("i");
      todoDiv.classList.add("todo");
      p.textContent = `${index + 1}.${element.task}-${element.time}`;
      i.classList.add("fa-solid", "fa-trash-can");
      todoDiv.appendChild(p);
      todoDiv.appendChild(i);
    });
    todoList.appendChild(todoDiv);
    i.addEventListener("click", function (event) {
        event.preventDefault();
        console.log(todoDiv)
        todoDiv.remove();
        console.log(todoDatas)
        });
        let infos=document.querySelector(".infos");
        let p2;
        todoDatas.forEach((element, index) => {
             p2=document.createElement("p");
            p2.textContent=`${index + 1}.${element.task}-${element.time}`;
        });
        infos.appendChild(p2);
  });
});


