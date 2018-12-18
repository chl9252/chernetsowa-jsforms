$(document).ready(function() {

	var checkComment = (function(){

		// Переменные модуля

		var _form = $('#comment-add-form'),
			_commentText = _form.find('.textarea'),
			_notify = _form.find('.notify');

		// Метод инициализации (запуска) модуля

		var init = function(){
			_setupListeners();

		};

		// Метод прослушки событий

		var _setupListeners = function(){
			_form.on('submit', function(event){
				_formValidate(event);

			});
		};

		// Приватные методы

		var _formValidate = function(event){
			event.preventDefault();
			// proverka

			if(_commentText.val().trim().length === 0) {
				_notify.fadeIn(700);

				_commentText.on('focus', function(){
					_notify.fadeOut(700);
					_form.trigger("reset");
				})

			} else {
				_notify.fadeOut(700);
				_form.unbind('submit').submit();
			}

		};

		return {
			init
		};


	}());

	checkComment.init();

	

});