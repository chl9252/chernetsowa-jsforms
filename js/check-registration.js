$(document).ready(function() {

	var checkRegistration = (function(){

		// Переменные модуля

		var _form = $('#registration-form'),
			_inputEmail = _form.find('#registration-form-email'),
			_inputPassword = _form.find('#registration-form-password'),
			_notifyEmail = _form.find('#notify-email'),
			_notifyEmail2 = _form.find('#notify-email2'),
			_notifyPassword = _form.find('#notify-password'),
			_notifyEmailOccupy = _form.find('#notify-email-occupy'),
			_notifyEmailOccupy2 = _form.find('#notify-email-occupy2'),
			_pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

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
			valid = true;

			// proverka

			// email empty

			if(_inputEmail.val().trim().length === 0) {
				valid = false;
				_notifyEmail.fadeIn(700);

				_inputEmail.on('focus', function(){
					_notifyEmail.fadeOut(700);
					_form.trigger("reset");
				})
			};

			// email invalid

			if (valid) {
				if (!_pattern.test(_inputEmail.val())) {
					_notifyEmail2.fadeIn(700);
					valid = false;
					_inputEmail.on('focus', function(){
						_notifyEmail2.fadeOut(700);

						})
					};

				if(_inputEmail.val().toLowerCase() === 'mail@mail.com')  {
					valid = false;
					_notifyEmailOccupy.fadeIn(700);
					_notifyEmailOccupy2.fadeIn(700);
					_inputEmail.on('focus', function(){
						_notifyEmailOccupy.fadeOut(700);
						_notifyEmailOccupy2.fadeOut(700);
						_form.trigger("reset");
					});
				}

			};

			//password empty

			if(_inputPassword.val().trim().length === 0) {
				valid = false;
				_notifyPassword.fadeIn(700);

				_inputPassword.on('focus', function(){
					_notifyPassword.fadeOut(700);

				})
			};

			

			// email  invalid

			if (valid) {
				_form.unbind('submit').submit();
			};
										
		}

		return {
			init
		};


	}());

	checkRegistration.init();
	

});