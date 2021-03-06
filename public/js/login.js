
'use strict';

function loginUser() {
  var settings = {
    url: "/users/login",
    method: "POST",
    // data: JSON.stringify({username: username, password: password}),
    contentType: 'application/json',
    dataType: 'json',
  };
  $.ajax(settings).done(function (response) {
    if (response.user) {
      const getUser = {
        url: "/users/settings",
        method: "GET",
        data: window.location = '/profile.html',
        contentType: 'application/json',
        dataType: 'json',
      };
      $.ajax(getUser).done(function (response) {
        console.log('Ya:', response);
        if (response.user) {
          $('.js-success-message2').html("Welcome, 'username'!");
        }
      else {
        $('.js-error-message').html('Could not load user');
      };
    });
    }
    else {
      $('.js-login-form')[0].reset();
      $('.js-error-message').html('Invalid username or password');
    }
  });
}

function watchLogIn() {
  $('.js-login-form').submit(function(event) {
    event.preventDefault();
    // var username = $("#login_form_username").val();
    // var password = $("#login_form_password").val();
    loginUser();
  });
}

$(watchLogIn());
