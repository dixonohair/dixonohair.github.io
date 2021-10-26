//Activity 9 Slideshow Javascript
$(document).ready(function(){

    $("#photos a").each(function(){
        var swap = new Image();
        swap.src = $(this).attr("href");
    });

    $("#photos a").click(function(evt){
        var imageLocation = $(this).attr("href");
        $("#firstImage").attr("src", imageLocation);

        var caption = $(this).attr("title");
        $("#caption").text(caption);

        evt.preventDefault();
    });
    
    $("li:first-child a").focus();

});

