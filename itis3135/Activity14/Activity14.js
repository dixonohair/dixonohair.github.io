$(document).ready(function() {
	
    $("#nav_list li a").click(function(){
        
        //if they click certain names
        $.ajax({
            type: "get",
            url: "json_files/toobin.json",
            error: function(xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            },
            dataType: "json",
            success: function(data) {
            $.each(data, function(){
                $.each(this, function(key, value){
                    $("main").append(
                        "<h1>" + value.title + "</h1>" + "<h2>" + value.month + "</h2>"
                        + "<h3>" + value.speaker + "</h3>" + 
                        '<img src="' + value.image + '" alt= "toobin_picture">' + value.text
                    )
                });
            });
        }//end getJSON
    });
    });//toobin end click


    $("#nav_list li a").click(function(){

        $.ajax({
            type: "get",
            url: "json_files/sorkin.json",
            error: function(xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            },
            dataType: "json",
            success: function(data) {
            $.each(data, function(){
                $.each(this, function(key, value){
                    $("main").append(
                        "<h1>" + value.title + "</h1>" + "<h2>" + value.month + "</h2>"
                        + "<h3>" + value.speaker + "</h3>" + 
                        '<img src="' + value.image + '" alt= "sorkin_picture">' + value.text
                    )
                });
            });
        }//end getJSON
    });//toobin end click
});

});//end