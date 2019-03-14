$(document).ready(function() {

    $(".media a").on("click", function (event) {

      event.preventDefault();

href = $(this).attr("href");

      window.history.pushState(null, null, href);


      $.ajax({
         url: href,
         success: function (data) {
           $("html").fadeOut(250)
       }
       })

});



});
