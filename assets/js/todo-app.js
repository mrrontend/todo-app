var App = (function controller(App, fb) {
	var config = {
		apiKey: "AIzaSyDjsp-w-1BvMYK4wpvnNvGLjAkECao_hEQ",
		authDomain: "todolist-70f9b.firebaseapp.com",
		databaseURL: "https://todolist-70f9b.firebaseio.com/",
		storageBucket: "todolist-70f9b.appspot.com",
	};

	var todoList = [];
	var database;

	var handleSnapshot = function(snapshot) {
		if(snapshot.val()) {
			todoList = snapshot.val().todos;
		} else {
			todoList = [];
		}

		App.view.refreshList(todoList);
	};

	var observeTodos = function() {
		database.ref().on("value", handleSnapshot);
	};

	var init = function() {
		fb.initializeApp(config);
		database = fb.database();
		observeTodos();
	};

	var saveTodos = function(todoList) {
		database.ref().set({
			todos: todoList,
		});
		App.view.refreshList(todoList);
	};

	var addTodo = function() {
		var todoText = document.getElementById("todo-text").value;
		todoList.push(todoText);
		saveTodos(todoList);
	};

	var removeTodo = function(i) {
		var todoItem = document.getElementById("td-item-" + i);
		todoList.splice(i, 1);
		saveTodos(todoList);
	};

	init();

	App.controller = {
		addTodo: addTodo,
		removeTodo: removeTodo,
	};

	return App;
}(App || {}, firebase));
