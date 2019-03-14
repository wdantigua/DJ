$(document).ready(function() {

    $(".media a").on("click", function (event) {

      event.preventDefault()

      const href = $(this).attr("href")

      window.history.pushState(null, null, href)



      $.ajax( "example.php" ).done(function() {
      $("body").fadeOut(25);
  });
});



});
