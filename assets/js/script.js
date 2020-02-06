$(document).ready(function() {
  $('a[href^="#"]').click(function() {
    var destino = $(this.hash);
    var diferencial = 0;
    if (destino.length == 0) {
      destino = $('a[name="' + this.hash.substr(1) + '"]');
    }
    if (destino.length == 0) {
      destino = $('html');
    }
    if (this.hash == "#sec-description") {
      diferencial = 100;
    }

    if (this.hash == "#experiencia") {
      diferencial = 100;
    }

    if (this.hash == "#portfolio") {
      diferencial = 60;
    }
    if (this.hash == "#contact-form") {
      diferencial = 13;
    }
    $('html, body').animate({ scrollTop: destino.offset().top - diferencial }, 500);
    return false;
  });
  $('[data-toggle="tooltip"]').tooltip();
  $(".close").click(function(){
    $("#myAlert").alert("close");
  });
  $('#carousel-Slidesonly').carousel({
    interval: 5000
  });
});
