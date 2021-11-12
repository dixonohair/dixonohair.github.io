//help from: https://www.codehim.com/carousel/fade-in-fade-out-slideshow-with-jquery/


$(document).ready(function() {


        // preload the image for each link
      
        
        // set up the event handlers for each link

    			// get the image URL and caption for each image and animate the caption

            // cancel the default action of each link


    // move the focus to the first link


    $("#image_list a").each(function(){
        var swap = new Image();
        swap.src = $(this).attr("href");
    });

    

    $("#image_list a").click(function(evt){
        /*
        var imageLocation = $(this).attr("href");
        $("#image").attr("src", imageLocation);
*/
        setInterval(function(){
            $("#image").fadeOut(3000, function(){
                var imageLocation = $(this).attr("href");
                $("#image").attr("src", imageLocation);
                $(this).fadeIn(3000);
            })
        });

        var caption = $(this).attr("title");
        $("#caption").text(caption);

       evt.preventDefault();
    });
    
    $("li:first-child a").focus();

}); // end ready