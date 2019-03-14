$(document).ready(function() {

    $(".media a").on("click", function (event) {

      event.preventDefault()

      const href = $(this).attr("href")

      window.history.pushState(null, null, href)



      $.ajax({
        url: href,

        success: function (data) {
          $("body").fadeOut(250, function () {
            const newPage = $(data).filter("body").html()

            $("body").html(newPage)

            $("body").fadeIn(250)
          })
        }
      })

    })
});
