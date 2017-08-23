var App = (function controller(App) {

	var addTodo = function() {
		App.data.addTodo();
	};

	var removeTodo = function(i) {
		App.data.removeTodo(i);
	};

	var textInputKeyup = function(event) {
		if(event.keyCode === 13) {
			App.data.addTodo();
		}
	};

	App.controller = {
		addTodo: addTodo,
		removeTodo: removeTodo,
		textInputKeyup: textInputKeyup,
	};

	return App;
}(App || {}));
