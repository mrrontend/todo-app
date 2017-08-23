var App = (function todoFB(App, fb) {

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

	var insertTodos = function(todoList) {
		database.ref().set({
			todos: todoList,
		});
		App.view.refreshList(todoList);
	};

	var addTodo = function() {
		var todoText = document.getElementById("todo-text");
		if(todoText.value !== "") {
			todoList.push(todoText.value);
			todoText.value = "";
			insertTodos(todoList);
		}
	};

	var removeTodo = function(i) {
		var todoItem = document.getElementById("td-item-" + i);
		todoList.splice(i, 1);
		insertTodos(todoList);
	};

	var init = function() {
		fb.initializeApp(config);
		database = fb.database();
		observeTodos();
	};

	init();

	App.data = {
		addTodo: addTodo,
		removeTodo: removeTodo,
	};

	return App;
}(App || {}, firebase));
