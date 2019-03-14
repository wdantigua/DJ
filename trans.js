$(document).ready(function() {

    $(".media a").on("click", function (event) {

      event.preventDefault()

      const href = $(this).attr("href")

      window.history.pushState(null, null, href)



      $.ajax({
        url: href,
        fail: function() {
    alert( "error" );
},
        success: function (data) {
          $("body").fadeOut(25)
        }
      })

    })
});
