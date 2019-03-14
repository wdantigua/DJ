
// console.log("here");
$(document).ready(function() {
    $("button").mouseover(function(event) {
        AnimateRotate(360)
        /* Act on the event */
        $("button").animate({opacity: 0.25}, "fast")
    });
    $("button").mouseleave(function(event) {
        /* Act on the event */
        $("button").animate({opacity: 1}, "fast")
    });

});

function AnimateRotate(d){
    var elem = $("button");

    $({deg: 0}).animate({deg: d}, {
        duration: "fast",
        step: function(now){
            elem.css({
                 transform: "rotate(" + now + "deg)"
            });
        }
    });
}
