const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addBatton");
const taskList = document.getElementById("taskList");

//Обработчик события клика на кнопку "Добавить"
addButton.addEventListener("click", function() {
  //Получаем значение, введенное в поле ввода
  const taskText = taskInput.value;

  //Создаём новый элемент списка
  const newTask = document.createElement("li");

  //Устанавливаем текст задачи внутри созданного элемента списка
  newTask.textContent = taskText;

  //Добавляем созданный элемент списка в нужное место на странице
  taskList.append(newTask);

  //Очищаем поле ввода после добавления задачи
  taskInput.value = " ";
});
function()

// Создаем функцию checkTask()
function checkTask() {
  const button = document.querySelector(".button");

  //Внутри функции: Проверяем, что кликнули на элемент списка (event.target)
  button.addEventListener("click", function (evt) {
    if (evt.target.tagName === "BUTTON") {
      // Если условие выполняется, то переключаем состояние выполнения задачи, добавляя или удаляя класс у элемента списка (element.classList.toggle)
      evt.target.classList.toggle("aline-through");
    }
  });
}

// Добавляем функцию-обработчик к событию клика на кнопку (addEventListener)
addButton.addEventListener("click", function() {});
// Добавляем функцию-обработчик к событию клика на список задач (addEventListener)
taskList.addEventListener("click", function() {});
