const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function () {
  const taskText = taskInput.value;
  const newTask = document.createElement("li");
  newTask.textContent = taskText;
  taskList.append(newTask);
  taskInput.value = " ";
});

function checkTask() {
  taskList.addEventListener("click", function (evt) {
    if (evt.target.tagName === "LI") {
      evt.target.classList.toggle("completed");
    }
  });
}
checkTask();
