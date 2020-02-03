$(document).ready(function() {
  $(function() {
    $("a").click(function(event) {
      if (this.hash !== "") {
        event.preventDefault();

        var menu = this.hash;
        var diferencial = 0;

        if (this.hash == "#sec-description") {
          diferencial = 3000;
        }

        if (this.hash == "#experiencia") {
          diferencial = 170;
        }

        if (this.hash == "#portfolio") {
          diferencial = 70;
        }
        if (this.hash == "#contact-form") {
          diferencial = 13;
        }
        $("html, body").animate({
          scrollTop: $(menu).offset().top - diferencial
        }, 800);
      }
    });
    $('[data-toggle="tooltip"]').tooltip();
});
