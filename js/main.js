$(document).ready(function () {

  // Show Message When input Focus

  let message = $('.hero .text .form .email .email');
  let showSpan = $('.hero .text .form .email .message');

  message.on('focus', function () {

  showSpan.css('display', 'block');

  });

  

});