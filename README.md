# ToDoList

Создан To Do List.
Находим необходимые элементы DOM и записываем в переменные
Создаем функцию createTask(). Внутри функции:
Создаем новый элемент списка с помощью метода (createElement)
Присваиваем текст из поля ввода в качестве содержимого новой задачи (textContent)
Добавляем новую задачу в список с помощью метода (append)
Очищаем поле ввода
Создаем функцию checkTask(). Внутри функции:
Проверяем, что кликнули на элемент списка (event.target)
Если условие выполняется, то переключаем состояние выполнения задачи, добавляя или удаляя класс у элемента списка (element.classList.toggle)
Добавляем функцию-обработчик к событию клика на кнопку (addEventListener)
Добавляем функцию-обработчик к событию клика на список задач (addEventListener)
