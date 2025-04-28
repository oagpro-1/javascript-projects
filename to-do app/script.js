
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");


window.onload = function () {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach((task) => {
    createTaskElement(task.text, task.completed);
  });
};


addBtn.addEventListener("click", function () {
  const taskText = input.value.trim();
  if (taskText !== "") {
    createTaskElement(taskText, false);
    input.value = "";
    saveTasks();
  }
});


function createTaskElement(text, completed) {
  const li = document.createElement("li");
  li.textContent = text;


  if (completed) {
    li.classList.add("completed");
  }


  li.addEventListener("click", function () {
    li.classList.toggle("completed");
    saveTasks();
  });


  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    li.remove();
    saveTasks();
  });

  li.appendChild(delBtn);
  todoList.appendChild(li);
}


function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#todo-list li").forEach((li) => {
    tasks.push({
      text: li.childNodes[0].textContent.trim(),
      completed: li.classList.contains("completed"),
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
