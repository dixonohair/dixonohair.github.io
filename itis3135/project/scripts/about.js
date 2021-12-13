$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "json_files/bio.json",
        beforeSend: function() {
            $("#bio").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#bio").html("");
            $.each(data, function(){
                $.each(this, function(key, value){
                    $("#bio").append("<p>" + value.bio + "</p>");
                });
            });
        }
    });
});