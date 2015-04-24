var app = app || {};

//controller
(function(app) {
	app.TodoController = Backbone.Marionette.Controller.extend({

		currentView : false,

		todoLists : function() {
			//Todoレイアウト用ビューにルーティング
			this.nextView(app.TodoLayoutView);
		},

		todoDetail : function(id) {
			this.nextView(app.TodoDetailView, id);
		},

		nextView : function(View, option) {
			app.application.mainRegion.show(new View(option));
		},
	});
})(app);
