
$(document).ready(function() {

    var link = "http://api.flickr.com/services/feeds/photos_public.gne?id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding";
   
    $.ajax({
        type: "get",
        url: link,
        beforeSend: function() {
            $("#new_building").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#new_building").html("");
            $.each(data,function(){
                $.each(this, function(key, value){
                    $("#new_building").append(
                        '<a href= "' + item.media.m + '"data-lightbox="new_building"'+
                        "data-title='" + item.title + "'>" +
                        "<img src= '" + item.media.m + "'></a>"
                    );
                });
            });
        }
    });
});

