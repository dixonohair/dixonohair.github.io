$(document).ready(function(){

    $("#photos a").each(function(){
        var swap = new Image();
        swap.src = $(this).attr("href");
    });

    $("#photos a").click(function(evt){
        var imageLocation = $(this).attr("href");
        $("#firstImage").attr("src", imageLocation);

       evt.preventDefault();
    });
    
    $("li:first-child a").focus();

});