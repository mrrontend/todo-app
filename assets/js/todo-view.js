var App = (function view(App) {

	var todoList = document.getElementById("todo-list");

	var createTodo = function(todo, i) {
		var todoItem = document.createElement("div");
		todoItem.id = "td-item-" + i;

		var todoBtn = document.createElement("button");
		todoBtn.type = "button";
		todoBtn.name = "rm-todo-" + i;
		todoBtn.textContent = "Rm";
		todoBtn.className = "rm-todo-btn";
		todoBtn.addEventListener("click", function() {
			App.controller.removeTodo(i);
		});
		todoItem.appendChild(todoBtn);

		var todoText = document.createElement("span");
		todoText.textContent = todo;
		todoText.className = "td-item-text";
		todoItem.appendChild(todoText);

		return todoItem;
	};

	var refreshList = function(todos) {
		todoList.innerHTML = "";
		todos.forEach(function(todo, i) {
			todoList.appendChild(createTodo(todo, i));
		});
	};

	App.view = {
		refreshList: refreshList,
	};

	return App;
}(App || {}));
